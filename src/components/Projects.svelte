<script>
  import Badge from "/src/components/Badge.svelte";

  const projects = [
    {
      id: 1,
      title: 'Social Media',
      description: 'Short description of the project.',
      video: '/videos/socialmedia.mp4',
      tags: [
        'Social Media', 'Motion'
      ]
    },
    {
      id: 2,
      title: 'Thumbnails',
      description: 'Short description of the project.',
      video: '/videos/thumbnails.mp4',
      tags: [
        'Social Media'
      ]
    },
    {
      id: 3,
      title: 'Newsletter',
      description: 'Short description of the project.',
      video: '/videos/newsletter.mp4',
      tags: [
        'Reports'
      ]
    },
    {
      id: 4,
      title: 'HQZen',
      description: 'Short description of the project.',
      video: '/videos/hqzen.mp4',
      tags: [
        'UI/UX'
      ]
    },
    {
      id: 5,
      title: 'AyuAyu',
      description: 'Short description of the project.',
      video: '/videos/ayuayu.mp4',
      tags: [
        'UI/UX'
      ]
    },
    // ...
  ];
</script>

<section id="works">
<div class="flex items-center pl-7 pr-7 lg:pl-30 lg:pr-30 ">
  <hr class="w-20 h-0.5 my-4 bg-neutral-300 border-0 rounded-sm md:my-10">
  <p class="pl-3 text-2xl md:text-2xl sm:text-base font-light">My Work</p>
</div>
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
         <div>
          <div class="flex flex-wrap gap-1.5 mb-1">
            {#each project.tags as tag (tag)}
              <Badge {tag} />
            {/each}
          </div>
          <div class="pl-1 pt-1">
            <h3 class="text-2xl font-light">{project.title}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{project.description}</p>
        </div>
        </div>
        
        </div>
    {/each}
</div>
</section>