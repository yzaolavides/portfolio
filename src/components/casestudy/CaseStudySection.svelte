<script>
  const { title, children, color = '#000000', layout = 'default' } = $props();
</script>

<section class="p-4 mb-4">
  <p class="text-sm mb-4 casestudy-section font-light" style="color: {color}">{title}</p>
  
  {#if layout === 'two-col'}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {@render children()}
    </div>
  {:else}
    {@render children()}
  {/if}
</section>