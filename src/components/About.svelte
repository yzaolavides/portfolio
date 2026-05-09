<script>
  import { Accordion, AccordionItem } from 'flowbite-svelte';
  
  const experiences = [
    {
      id: 1,
      title: 'Graphic Designer',
      company: 'Launch',
      date: 'Present',
      bullets: [
      'Designed executive presentations and strategic decks for a government client, translating complex data into clear visual narratives for senior stakeholders.',
      'Partnered with consultants to shape slide messaging, ensuring design always served the story.',
      'Maintained strict brand standards across all deliverables under tight deadlines.'
        ]
    },
    {
      id: 2,
      title: 'Graphic Designer',
      company: 'Reach',
      date: '2025',
      bullets: [
        'Designed 250+ projects across social media, print, and events.',
        'Maintained visual brand consistency of projects and communication assets across five subsidiaries.',
        'Produced motion and static content for marketing campaigns, supporting client acquisition efforts.',
        'Partnered with cross-functional teams to align creative output with business goals.'
      ]
    },
     {
      id: 3,
      title: 'UI/UX Designer Intern',
      company: 'Cognith',
      date: '2024',
      bullets: [
      'Designed UI kits and web/mobile interfaces in Figma, improving design workflow efficiency.',
      'Collaborated with developers and clients to deliver visually consistent, high-performing digital solutions.',
      'Applied user-centered design principles to enhance usability and streamline user journeys.'
      ]
    },
    {
      id: 4,
      title: 'Web Design Intern',
      company: 'BPOSeats',
      date: '2023',
      bullets: [
      'Conducted a UI/UX case study and delivered actionable design improvements for a SaaS website.',
      'Designed and developed a company culture webpage, optimized front-end performance with Vue.js and Sass'
      ]
    },
    {
      id: 5,
      title: 'Multimedia Designer',
      company: 'Freelance',
      date: '2020 – 2023',
      bullets: [
      'Created branding and marketing materials for diverse clients, ensuring cohesive visual identity across print and digital.',
      'Produced motion graphics and video content from concept to delivery, used for corporate and live event use.',
      ]
    }
  ];
</script>

<section id="about" class="bg-neutral-50">

<div class="p-7 lg:pl-20 lg:pr-20 flex flex-col md:flex-row gap-12 px-6 py-16" id="about">
  <!-- Left: Title -->
  <div class="sticky md:w-3/7">
  <div class="flex items-center pb-3">
  <hr class="w-20 h-0.5 my-4 bg-[#FF6D29] border-0 rounded-sm md:my-10">
  <p class="pl-3 text-xl md:text-2xl sm:text-base font-light text-neutral-500">About Me</p>
</div>
    <span class="pl-3 pb-3 md:pb-4 text-4xl md:text-5xl sm:text-3xl font-medium">Yzabel Olavides</span>
    <p class="pt-3 pr-8 font-light text-base text-neutral-500 md:pt-4 sm:pt-4 sm:pr-20">I’m a designer with a background in development, creating work that lives at the intersection of corporate, tech, design, and everything in between.
      <br><br>Whether I’m designing interfaces, shaping brand visuals, or animating motion content, I love bringing structure and creativity together to craft meaningful digital experiences.
     <br><br> When I’m not designing, you’ll find me behind my film camera or cheering on football and Formula 1.</p>
  </div>

  <!-- Right: Accordion -->
  <div class="md:w-4/7">
    <Accordion flush>
      {#each experiences as exp (exp.id)}
        <AccordionItem>
          {#snippet header()}
            <span class="flex flex-col">
              <span class="text-xl font-normal text-neutral-700 hover:text-[#FF6D29] active:text-[#FF6D29] transition duration-300 ease-in-out">{exp.title} / {exp.company}</span>
              <span class="text-base font-light text-gray-500">{exp.date}</span></span>
          {/snippet}
          {#snippet arrowup()}
            <svg class="transition-transform duration-300 rotate-45" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12.001 5v14.002m7.001-7H5"/>
            </svg>
          {/snippet}
          {#snippet arrowdown()}
            <svg class="transition-transform duration-300 rotate-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12.001 5v14.002m7.001-7H5"/>
            </svg>
          {/snippet}
          <ul class="list-disc pl-4 font-light space-y-1 text-gray-600 leading-relaxed">
            {#each exp.bullets as bullet, i (i)}
              <li>{bullet}</li>
            {/each}
          </ul>
        </AccordionItem>
      {/each}
    </Accordion>
  </div>
</div>
</section>
