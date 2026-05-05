<script>
  const { title, children, color = '#000000'} = $props();
</script>

<section class="p-4 mb-4">
  <p class="text-sm mb-4 casestudy-section font-light" style="color: {color}">{title}</p>

    {@render children()}

</section>