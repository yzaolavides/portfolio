<script>
  import { page } from '$app/stores';
</script>

{#if $page.status === 404}
  <div class="min-h-screen flex flex-col justify-center items-center text-center px-8">
    <h1 class="text-8xl font-light text-neutral-200">404</h1>
    <p class="text-xl font-light text-neutral-500 mt-4">I'm sorry, but this page doesn't exist.</p>
    <a href="/" class="mt-8 text-sm text-neutral-400 hover:text-neutral-800 transition duration-300">
      ← Go back to home
    </a>
  </div>
{/if}