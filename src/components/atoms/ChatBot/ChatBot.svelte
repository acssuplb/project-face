<script>
    // @ts-nocheck

    import "./ChatBot.css"
    import LoadingDots from "./LoadingDots.svelte";
    import { fade, fly, scale } from "svelte/transition";
    import { cubicOut } from "svelte/easing"
    import { beforeUpdate, afterUpdate } from "svelte";

    let isChatbotOpen = false;
    let buttonTransitionDuration = 200;
    let chatbotButton;
    let userInputValue = "";
    let messagesContainer;
    let autoscroll = false;

    let messageHistory = [
        {
            isUser: false,
            textLoaded: true,
            text: "Greetings, visitor!\n\nI am your ACSStant, a chatbot that you can ask about all things ACSS! If you've any question, just type it and ask away."
        },
    ]

    // transition objects
    let chatbotBlockIn = {
    duration: buttonTransitionDuration,
    easing: cubicOut,
    x: 20,
    y: 20,
    opacity: 0
    }

    let chatbotBlockOut = {
    ...chatbotBlockIn,
    x: 0,
    }

    let messageIn = {
    duration: 500,
    easing: cubicOut,
    y: 20,
    opacity: 0,
    }

    beforeUpdate(() => {
        if (messagesContainer) {
            const scrollableDistance = messagesContainer.scrollHeight - messagesContainer.offsetHeight;
            autoscroll = messagesContainer.scrollTop > scrollableDistance - 20;
        }
    })

    afterUpdate(() => {
        if (autoscroll && messagesContainer) {
            messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
        }
    })

    const toggleChatbot = () => {
        isChatbotOpen = !isChatbotOpen

        if (isChatbotOpen) {
            chatbotButton.style.animationName = "animate-button-border--open"
        } else {
            chatbotButton.style.animationName = "animate-button-border--close"
        }
    }

    const fetchAnswer = async (question, userInput, sendButton) => {
        // send question to api
        const res = await fetch("/api/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question })
        })

        const json = await res.json();
        let result;

        if (res.ok) {
            result = json["result"]
        } else {
            result = json["message"]
        }
        
        // update message history
        messageHistory[messageHistory.length - 1] = {
            textLoaded: true,
            text: result
        }
        messageHistory = messageHistory;

        // reset textarea
        userInputValue = "";

        userInput.disabled = false;
        sendButton.disabled = false;

        userInput.placeholder = "Type your message..."
    }

    const sendQuestion = () => {
        if (userInputValue == "") {
            return;
        }

        let userInput = document.getElementById("user-input");
        let sendButton = document.getElementById("submit-button");

        userInput.style.height = "16px";
        userInput.disabled = true;
        sendButton.disabled = true;

        let question = userInputValue;
        userInputValue = "";
        userInput.placeholder = "Waiting for response..."

        // add user's question to message history
        messageHistory = [...messageHistory, {
            isUser: true,
            textLoaded: true,
            text: question
        }]

        // auto scroll to bottom of messages after sending a message
        messagesContainer.scrollTo(0, messagesContainer.scrollHeight)

        setTimeout(async () => {
            // add empty text from bot's side to render the Loading Dots component
            messageHistory = [...messageHistory, {
                isUser: false,
                textLoaded: false,
                text: "",
            }]

            await fetchAnswer(question, userInput, sendButton)
        }, 500)
    }

    // resize textarea when typing long messages
    const resizeTextarea = (e) => {
        e.target.style.height = "16px";
        e.target.style.height = e.target.scrollHeight + "px";
    }
</script>

<!-- chatbot -->
<div class="flex flex-col items-end justify-end gap-3 fixed z-20 bottom-0 right-0 mb-4 mr-4 sm:mb-7 sm:mr-7 max-ss:pl-4 max-ss:pt-4 box-border">
    {#if isChatbotOpen}
        <!-- chatbot block -->
        <div class="chatbot__block w-[100%] ss:w-[335px] h-[420px] flex flex-col items-start shrink-0 bg-white/10 backdrop-blur-md" in:fly={chatbotBlockIn} out:fly={chatbotBlockOut}>
            <!-- div for containing the messages at a fixed width and height -->
            <div class="flex flex-col relative justify-end items-center h-full box-border overflow-auto">
                <!-- messages container -->
                <div bind:this={messagesContainer} class="flex flex-col overflow-y-auto gap-1 p-[25px]">
                    <!-- render each message -->
                    {#each messageHistory as message, i}
                        <div class={"flex flex-col gap-1 self-stretch " + (message.isUser ? "items-end" : "items-start")} in:fly={messageIn}>
                            <!-- sender name -->
                            <span class="flex items-start text-white text-center text-base font-bold tracking-[0.8px]">{message.isUser ? "You" : "Bot"}</span>
                            <!-- message text -->
                            <p class={"text flex p-4 gap-3 max-w-[80%] flex-[1_0_0] text-white text-xs font-normal tracking-[0.6px] whitespace-pre-line " + (message.isUser ? "text--user" : "text--bot")}>
                                {#if (message.isUser || message.textLoaded)}
                                    {message.text}
                                {:else}
                                    <LoadingDots />
                                {/if}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- input area -->
            <div class="flex py-4 px-5 gap-4 self-stretch border-t border-solid border-black h-fit box-border">
                <!-- text area -->
                <textarea id="user-input" class="flex self-stretch resize-none flex-[1_0_0] bg-transparent border-none outline-0 h-4 max-h-14 text-xs" placeholder="Type your message..." bind:value={userInputValue} on:input={resizeTextarea}/>
                <!-- send button -->
                <button id="submit-button" class="disabled:opacity-50" on:click={sendQuestion}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_889_678)">
                            <path d="M19.4565 0.218381C19.851 0.491818 20.058 0.964474 19.9838 1.43713L17.4838 17.6871C17.4252 18.066 17.1947 18.3981 16.8588 18.5856C16.5229 18.7731 16.1205 18.7965 15.7651 18.6481L11.0932 16.7067L8.4174 19.6012C8.06974 19.9801 7.52287 20.1051 7.0424 19.9176C6.56193 19.7301 6.24943 19.2653 6.24943 18.7496V15.484C6.24943 15.3278 6.30802 15.1793 6.41349 15.066L12.9604 7.92151C13.1869 7.67541 13.1791 7.29651 12.9447 7.06213C12.7104 6.82776 12.3315 6.81213 12.0854 7.03479L4.14005 14.0934L0.690837 12.3668C0.276774 12.1598 0.011149 11.7457 -0.000569705 11.2848C-0.0122885 10.8238 0.229899 10.3942 0.628336 10.1637L18.1283 0.163693C18.5463 -0.0745882 19.0619 -0.0511507 19.4565 0.218381Z" fill="#F4F1FF"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_889_678">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>

    {/if}
    <!-- chatbot button -->
    <button class="chatbot__button flex flex-col justify-center items-center w-14 h-14 shrink-0 backdrop-blur-md bg-white/20" on:click={toggleChatbot} bind:this={chatbotButton}>
        {#if !isChatbotOpen}
            <!-- chat icon -->
            <svg class="w-2/5 h-auto shrink-0 fill-white drop-shadow-xl fixed" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" transition:fade={{duration:buttonTransitionDuration}}>
                <path d="M8.6257 17.6877C13.1141 17.6877 16.751 13.8399 16.751 9.09367C16.751 4.34742 13.1141 0.499634 8.6257 0.499634C4.13727 0.499634 0.500428 4.34742 0.500428 9.09367C0.500428 10.9785 1.07467 12.7217 2.04736 14.1427C1.91063 14.6017 1.7075 15.007 1.49265 15.3488C1.30514 15.6515 1.11373 15.8859 0.9731 16.047C0.902785 16.1252 0.844189 16.1886 0.805125 16.2277C0.785593 16.2472 0.769968 16.2619 0.762155 16.2668L0.754342 16.2765C0.539491 16.4767 0.445738 16.8283 0.531679 17.1457C0.617619 17.4631 0.855908 17.6877 1.12545 17.6877C1.97704 17.6877 2.83644 17.4143 3.55131 17.0773C3.9107 16.9064 4.24665 16.716 4.53963 16.5207C5.73889 17.2629 7.13346 17.6877 8.6257 17.6877ZM18.001 9.09367C18.001 14.5773 14.1298 18.7083 9.5437 19.2014C10.493 22.8344 13.6415 25.5005 17.376 25.5005C18.8682 25.5005 20.2628 25.0757 21.466 24.3334C21.759 24.5288 22.091 24.7192 22.4504 24.8901C23.1653 25.227 24.0247 25.5005 24.8763 25.5005C25.1458 25.5005 25.388 25.2807 25.47 24.9585C25.5521 24.6362 25.4622 24.2846 25.2435 24.0844L25.2356 24.0746C25.2278 24.0649 25.2122 24.0551 25.1927 24.0356C25.1536 23.9965 25.095 23.9379 25.0247 23.8549C24.8841 23.6938 24.6927 23.4594 24.5051 23.1566C24.2903 22.8148 24.0872 22.4047 23.9504 21.9505C24.9231 20.5345 25.4974 18.7913 25.4974 16.9015C25.4974 12.3701 22.1809 8.6542 17.9737 8.33193C17.9893 8.58096 17.9971 8.83487 17.9971 9.08879L18.001 9.09367Z" fill="#F4F1FF"/>
            </svg>
        {:else}
            <!-- close icon -->
            <svg class="w-2/5 h-auto shrink-0 fill-white drop-shadow-xl fixed" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" out:fade={{duration:buttonTransitionDuration}} in:scale={{ duration:buttonTransitionDuration, easing: cubicOut, start: 0, opacity: 0 }}>
                <path d="M15.0561 3.06169C15.6417 2.47603 15.6417 1.52491 15.0561 0.939247C14.4704 0.353584 13.5193 0.353584 12.9336 0.939247L8 5.87756L3.06169 0.943932C2.47603 0.358269 1.52491 0.358269 0.939247 0.943932C0.353584 1.5296 0.353584 2.48071 0.939247 3.06637L5.87756 8L0.943933 12.9383C0.35827 13.524 0.35827 14.4751 0.943933 15.0608C1.5296 15.6464 2.48071 15.6464 3.06637 15.0608L8 10.1224L12.9383 15.0561C13.524 15.6417 14.4751 15.6417 15.0608 15.0561C15.6464 14.4704 15.6464 13.5193 15.0608 12.9336L10.1224 8L15.0561 3.06169Z" fill="#F4F1FF"/>
            </svg>
        {/if}
    </button>
</div>    

<style>
    .chatbot__block {
        border-radius: 20px 0px 0px 20px;
        box-shadow: -10px 10px 20px 0px rgba(0, 0, 0, 0.25);
    }

    .text {
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
    }

    .text--user {
        border-radius: 15px 0px 15px 15px;
        background: rgba(59, 127, 239, 0.25);
        justify-content: flex-end;
    }

    .text--bot {
        border-radius: 0px 15px 15px 15px;
        background: rgba(80, 79, 85, 0.5);
        justify-content: flex-start;
    }

    button {
        -webkit-tap-highlight-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        border-radius: 50px;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
</style>