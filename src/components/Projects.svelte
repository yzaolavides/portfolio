<script>
  import Badge from "/src/components/Badge.svelte";
  

  const projects = [
    {
      id: 1,
      title: 'Social Media',
      description: 'Short description of the project.',
      video: '/videos/socialmedia.mp4',
      bloglink:'/work/project-one',
      tags: [
        'Social Media', 'Motion'
      ]
    },
    {
      id: 2,
      title: 'Thumbnails',
      description: 'Short description of the project.',
      video: '/videos/thumbnails.mp4',
      bloglink:'/work/project-one',
      tags: [
        'Social Media'
      ]
    },
    {
      id: 3,
      title: 'Annual Performance Report',
      description: 'Short description of the project.',
      video: '/videos/newsletter.mp4',
      bloglink:'/work/ren-annual-report',
      tags: [
        'Reports'
      ]
    },
    {
      id: 4,
      title: 'HQZen Culture Page',
      description: 'Researched, designed, and developed a culture page that brings HQZen’s software development team and values to life.',
      video: '/videos/hqzen.mp4',
      bloglink:'/work/hqzen',
      tags: [
        'UI/UX'
      ]
    },
    {
      id: 5,
      title: 'Reach x GITEX 2025',
      description: 'Short description of the project.',
      video: '/videos/ayuayu.mp4',
      bloglink:'/work/gitex',
      tags: ['Social Media', 'Motion']
    },
    {
      id: 6,
      title: 'R08',
      description: 'Short description of the project.',
      video: '/videos/ayuayu.mp4',
      bloglink:'/work/r08',
      tags: ['Branding', 'Motion']
    },
    // ...
  ];
</script>

<section id="works" class="bg-neutral-50">
<div class="flex items-center pl-7 pr-7 lg:pl-30 lg:pr-30 ">
  <hr class="w-20 h-0.5 my-4 bg-[#FF6D29] border-0 rounded-sm md:my-10">
  <p class="pl-3 text-xl md:text-2xl sm:text-base font-light text-neutral-500">My Work</p>
</div>
  <div class="p-7 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-y-20 justify-center">
  
  {#each projects as project (project.id)}
    <a href={project.bloglink} class="flex flex-col gap-3">
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
        
      </a>
    {/each}
</div>
</section>
