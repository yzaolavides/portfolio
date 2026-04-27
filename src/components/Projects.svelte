<script lang="ts">
  const projects = [
    {
      id: 1,
      title: 'Social Media',
      description: 'Short description of the project.',
      video: '/videos/socialmedia.mp4',
    },
    {
      id: 2,
      title: 'Thumbnails',
      description: 'Short description of the project.',
      video: '/videos/thumbnails.mp4',
    },
    {
      id: 3,
      title: 'Newsletter',
      description: 'Short description of the project.',
      video: '/videos/newsletter.mp4',
    },
    {
      id: 4,
      title: 'HQZen',
      description: 'Short description of the project.',
      video: '/videos/hqzen.mp4',
    },
    {
      id: 5,
      title: 'AyuAyu',
      description: 'Short description of the project.',
      video: '/videos/ayuayu.mp4',
    },
    // ...
  ];
</script>


<div class="p-7 lg:p-30 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-y-20 justify-center">
    {#each projects as project (project.id)}
    <div class="flex flex-col gap-3">
        <!-- Thumbnail -->
        <div class="border border-neutral-100 rounded-xl overflow-hidden aspect-video bg-gray-100">
            <video
            src={project.video}
            class="w-full h-full object-cover"
            autoplay
            muted
            loop
            playsinline
            >
            </video>
        </div>

        <!-- Text -->
        <div class="pl-1 pt-1">
            <h3 class="text-2xl font-light">{project.title}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{project.description}</p>
        </div>
        </div>
    {/each}
</div>
