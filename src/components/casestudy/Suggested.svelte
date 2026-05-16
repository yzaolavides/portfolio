<script>
  const { projects, current } = $props();

  const suggested = projects.filter(p => p.id !== current).slice(0, 2);
</script>

<section class="bg-[#faf9f7] py-16 px-5 lg:px-50 border-t border-neutral-200">
<div class="flex items-center ">
  <p class="mb-4 text-xl md:text-2xl sm:text-md font-light text-neutral-500">Next Work</p>
</div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each suggested as project (project.id)}
      <a href={project.bloglink} aria-label="See more of Yzabel's projects" class="flex flex-col gap-3 group">
        <div class="rounded-xl overflow-hidden aspect-video bg-neutral-100">
          <video
            src={project.video}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            autoplay muted loop playsinline
          ></video>
        </div>
        <div>
          <h3 class="text-xl font-light">{project.title}</h3>
          <p class="text-sm text-neutral-400">{project.description}</p>
        </div>
      </a>
    {/each}
  </div>
</section>