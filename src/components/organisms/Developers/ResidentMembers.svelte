<script>
  import TeamCard from './TeamCard.svelte';
  import DeveloperCard from './DeveloperCard.svelte';
  import TeamTabs from './TeamTabs.svelte';
  import { teams, tabs } from './data.js';

  let activeTab = tabs[0]; // Initial active tab

  function tabChange(event) {
    activeTab = event.detail;
  }
</script>

<div class="container pb-20">
  {#each teams as team}
    {#if activeTab === team.name}
      <TeamCard teamName={team.name} description={team.description} />
    {/if}
  {/each}

  <div class="team-tabs-container overflow-x-auto">
    <TeamTabs {activeTab} {tabs} on:tabChange={tabChange} />
  </div>

  <div class="flex md:flex-1 items-center justify-center">
    {#each teams as team}
      {#if activeTab === team.name}
        <div class="grid grid-cols-4 gap-4">
          {#each team.developers as developer}
            <DeveloperCard
              imageSrc={developer.imageSrc}
              nickname={developer.nickname}
            />
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</div>
