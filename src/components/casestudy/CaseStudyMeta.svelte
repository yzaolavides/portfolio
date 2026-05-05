
<script>
const { client, role: roleProp, timeline, tools: toolsProp, color = '#000000' } = $props();

const roleList = Array.isArray(roleProp) ? roleProp : [roleProp];
const toolsList = Array.isArray(toolsProp) ? toolsProp : [toolsProp];
</script>

<hr class="h-px bg-neutral-400 border-0">
<div class="grid grid-cols-2 p-4 md:grid-cols-4 gap-6 text-sm text-neutral-500">
  <div>
    <p class="font-semibold mb-1 casestudy-section" style="color: {color}">Client</p>
    <p class="font-light">{client}</p>
  </div>

  <div>
    <p class="font-semibold mb-1 casestudy-section" style="color: {color}">Timeline</p>
    <p class="font-light">{timeline}</p>
  </div>

  <div>
    <p class="font-semibold mb-1 casestudy-section" style="color: {color}">Role</p>
    <div class={roleList.length > 2 ? 'grid grid-cols-2 gap-x-0.5' : 'flex flex-col'}>
      {#each roleList as r (r)}
        <span class="font-light">{r}</span>
      {/each}
    </div>
  </div>

  <div>
    <p class="font-semibold mb-1 casestudy-section" style="color: {color}">Tools</p>
    <div class={toolsList.length > 2 ? 'grid grid-cols-2 gap-x-2' : 'flex flex-col'}>
      {#each toolsList as t (t)}
        <span class="font-light">{t}</span>
      {/each}
    </div>
  </div>
</div>
<hr class="h-px bg-neutral-400 border-0">