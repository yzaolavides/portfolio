<script>
  import { Accordion, AccordionItem } from 'flowbite-svelte';

  const experiences = [
    {
      id: 1,
      title: 'Senior Designer — Acme Corp',
      date: '2022 - Present',
      description: 'Designed end-to-end product experiences across web and mobile, collaborating with cross-functional teams.'
    },
    {
      id: 2,
      title: 'UI/UX Designer — Studio XYZ',
      date: '2020 - 2022',
      description: 'Led visual design for client campaigns, brand systems, and digital publications.'
    }
  ];
</script>

<div class="p-7 lg:p-30 flex flex-col md:flex-row gap-12 px-6 py-16">
  <!-- Left: Title -->
  <div class="md:w-2/5">
    <h2 class="text-3xl font-light sticky top-8">Experience</h2>
  </div>

  <!-- Right: Accordion -->
  <div class="md:w-3/5">
    <Accordion flush>
      {#each experiences as exp (exp.id)}
        <AccordionItem>
          <span slot="header" class="flex flex-col">
            <span class="font-semibold">{exp.title}</span>
            <span class="text-sm text-gray-500">{exp.date}</span>
          </span>
          <p class="text-gray-600 leading-relaxed">{exp.description}</p>
        </AccordionItem>
      {/each}
    </Accordion>
  </div>
</div>