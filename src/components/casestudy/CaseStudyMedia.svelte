<script>
  const { src, type = 'image', caption, layout = 'full', columns = 2 } = $props();

  const srcList = Array.isArray(src) ? src : [src];
</script>

{#if layout === 'full'}
  <div class="w-full my-8">
    {#if type === 'video'}
      <video src={srcList[0]} autoplay muted loop playsinline class="w-full rounded-2xl object-cover"></video>
    {:else}
      <img src={srcList[0]} alt={caption} class="w-full rounded-xl object-cover" />
    {/if}
    {#if caption}
      <p class="text-sm text-neutral-400 mt-2 text-center">{caption}</p>
    {/if}
  </div>

{:else if layout === 'half'}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    {#each srcList as s, i (i)}
      <img src={s} alt={caption} class="w-full object-cover" />
    {/each}
  </div>

{:else if layout === 'grid'}
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8"
       style="grid-template-columns: repeat({columns}, minmax(0, 1fr))">
    {#each srcList as s, i (i)}
      <img 
        src={s} 
        alt="{caption} {i + 1}" 
        class="w-full object-cover rounded-xl aspect-square sm:aspect-auto"
      />
    {/each}
  </div>
  {#if caption}
    <p class="text-sm text-neutral-400 mt-2 text-center">{caption}</p>
  {/if}

  {:else if layout === 'masonry'}
  <div class="columns-1 sm:columns-2 gap-3 my-8">
    {#each srcList as s, i (i)}
      <img 
        src={s} 
        alt="{caption} {i + 1}" 
        class="w-full object-cover rounded-xl mb-3 break-inside-avoid"
      />
    {/each}
  </div>
{/if}
