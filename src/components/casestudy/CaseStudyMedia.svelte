<script>
  const { src, type = 'image', caption, layout = 'full' } = $props();
</script>

{#if layout === 'full'}
  <div class="w-full my-8">
    {#if type === 'video'}
      <video src={src} autoplay muted loop playsinline class="w-full object-cover"></video>
    {:else}
      <img src={src} alt={caption} class="w-full object-cover" />
    {/if}
    {#if caption}
      <p class="text-sm text-neutral-400 mt-2 text-center">{caption}</p>
    {/if}
  </div>

{:else if layout === 'half'}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    {#each src as s, i (i)}
      <img src={s} alt={caption} class="w-full rounded-2xl object-cover" />
    {/each}
  </div>
{/if}