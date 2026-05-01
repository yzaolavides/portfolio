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
        'Sole designer across five subsidiaries, with 250+ projects spanning presentations, reports, motion graphics, and social media.',
        'Produced 190+ static and motion assets across LinkedIn, Instagram, X, and Facebook for corporate events, national holidays, and international campaigns.',
        'Designed 30+ executive pitch decks supporting client proposals and business development.',
        'Built the companys publication standards from scratch, from newsletter templates, reports, and handbooks.'
      ]
    },
     {
      id: 3,
      title: 'UI/UX Designer Intern',
      company: 'Cognith',
      date: '2024',
      bullets: [
      'Built industry-specific UI kits in Figma, standardising components across multiple client-facing web and mobile interfaces.',
      'Resolved front-end usability issues in a SaaS platform using Vue.js and Sass, and led a UI/UX case study with recommendations adopted by the product team.'
      ]
    },
    {
      id: 4,
      title: 'Web Design Intern',
      company: 'BPOSeats',
      date: '2023',
      bullets: [
      'Improved software user interaction flow by identifying and resolving front-end usability issues in the company’s SaaS platform using Vue.js and Sass.',
      'Led an in-depth UI/UX case study to analyze and improve SaaS website, resulting in actionable design recommendations adopted by the product team.'
      ]
    },
    {
      id: 5,
      title: 'Multimedia Designer',
      company: 'Freelance',
      date: '2020 – 2023',
      bullets: [
      'Delivered branding and print materials across aviation, tech, and community sectors, including an ongoing HSE safety communications series for an aviation maintenance company.',
      'Created motion and video content for corporate and live use, including an animated sponsor reel at Google DevFest Cebu and a nationwide onboarding video that scaled HR operations across a lending corporation’s branches'
      ]
    }
  ];
</script>

<div class="p-7 lg:p-30 flex flex-col md:flex-row gap-12 px-6 py-16">
  <!-- Left: Title -->
  <div class="md:w-2/5">
    <h2 class="text-3xl font-light top-8">Experience</h2>
  </div>

  <!-- Right: Accordion -->
  <div class="md:w-3/5">
    <Accordion flush>
      {#each experiences as exp (exp.id)}
        <AccordionItem>
          {#snippet header()}
            <span class="flex flex-col">
              <span class="text-xl font-normal text-neutral-700 dark:text-neutral-900">{exp.title} / {exp.company}</span>
              <span class="text-base font-light text-gray-500">{exp.date}</span></span>
          {/snippet}
          {#snippet arrowup()}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform="rotate(45)"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12.001 5v14.002m7.001-7H5"/></svg>
          {/snippet}
          {#snippet arrowdown()}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.001 5v14.002m7.001-7H5"/></svg>
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