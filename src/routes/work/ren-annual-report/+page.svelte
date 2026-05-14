<script>
  import CaseStudyHero from '/src/components/casestudy/CaseStudyHero.svelte';
  import CaseStudyMeta from '/src/components/casestudy/CaseStudyMeta.svelte';
  import CaseStudySection from '/src/components/casestudy/CaseStudySection.svelte';
  import CaseStudyMedia from '/src/components/casestudy/CaseStudyMedia.svelte';
  import SuggestedProjects from '/src/components/casestudy/Suggested.svelte';
  import { projects } from '$lib/data/projects.js';
  import Footer from "/src/components/Footer.svelte";

  let themeColor = '#CF3339';
</script>

<title>Yzabel Olavides | Portfolio</title>

<div class="bg-[#d3d3d3] min-h-screen flex flex-col justify-end">
  <div class="flex-1 flex justify-center items-center px-8 md:px-20 lg:px-40">
  <img 
    src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778769563/header_bpwq4k.png" 
    alt="Quarterly Newsletter"
    class="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-xl object-contain"
  />
    </div>


  <div class="bg-[#faf9f7] pl-5 pr-5 lg:pl-50 lg:pr-50 pt-12 pb-12">
    <CaseStudyHero
      title="Quarterly Newsletter"
      description="Designed and produced the group-wide newsletter featuring company updates, event highlights, and internal achievements."
    />
    <CaseStudyMeta
      client="Reach Group"
       role={['Graphic Designer', 'Layout Editor']}
      timeline="October 2025"
      tools={['InDesign']}
      color={themeColor}
    />
  </div>
</div>

<div class="bg-neutral-50">
<div class="pl-5 pr-5 lg:pl-50 lg:pr-50 lg:pt-12 lg:pb-12 text-neutral-500" style="letter-spacing: -0.02em">
<CaseStudySection title="Context" color={themeColor}>
  <p class="font-light text-2xl pb-1 text-neutral-600">Reach Group had no internal newsletter before this.</p>
<p class="leading-relaxed font-light">
    As the company grew and its subsidiaries expanded, the need for a unified communications channel became clear: something that could carry company news, updates, and stories across all five business units in a consistent, professional format. There was no precedent to follow, and the brief was essentially: build it.
</p>
</CaseStudySection>

<CaseStudySection title="Outcome" color={themeColor}>
<p class="leading-relaxed font-light">
    As the designer responsible for the inaugural edition, I established the foundational layout system for Reach Group's quarterly newsletter, a bilingual publication distributed in PDF format across all five subsidiaries.
<CaseStudyMedia src="/videos/newsletter.mp4" type="video"/>
</p>
</CaseStudySection>

<hr class="w-full h-px mt-8 mb-8 ml-4 mr-4 bg-neutral-200 border-0">

<CaseStudySection title="Key Stages" color={themeColor}>
<h5 class="mb-2 text-md font-medium tracking-tight">Establishing the Layout System</h5>
<p class="leading-relaxed font-light">
    With no existing template to reference, I started by defining the paragraph and characters styles and design language for the newsletter, and ensuring it felt native to Reach Group's brand while being functional enough to accommodate varied content each quarter.
</p>

<br><br>
<h5 class="mb-2 text-md font-medium tracking-tight">Bilingual Typesetting</h5>
<p class="leading-relaxed font-light">
    The English and Arabic versions required fully mirrored layouts, built and managed in Adobe InDesign. This meant every design decision, like column structure, image placement, spacing, had to be considered in both directions simultaneously. 
Managing right-to-left Arabic typesetting alongside left-to-right English in InDesign was one of the more technically demanding aspects of the project.

</p>
</CaseStudySection>


<CaseStudySection title="Impact" color={themeColor}>
  <p class="leading-relaxed font-light">
    Reach Group's first newsletter gave the company a professional, unified channel for internal and external communications, which was something that hadn't existed before. The bilingual format ensured it was accessible across the company's full audience, and the foundational layout system meant future editions had a solid, replicable structure to build from.
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778769562/mockup_ncjrap.jpg" />

</p>
</CaseStudySection>

<CaseStudySection title="Learnings" color={themeColor}>
    <p class="leading-relaxed font-light">
    The quick turn-around time was a bit brutal, but I've learnt a few things:
    </p>
    <br>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g stroke="#686868" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#686868" fill-opacity="0" stroke-dasharray="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1s" values="40;0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.3s" to="0.3"/></path><path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M10.5 13.5l-7.5 7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" to="0"/></path></g></svg>
        </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Finding alif</h5>
        <p class="leading-relaxed font-light">
            I can read Arabic, but typing it was a different story. Spending an hour tracking down a single character on an Arabic keyboard mid-production was a lesson in preparing for the technical side of a brief, not just the creative one. Next time, the keyboard layout gets figured out before the file gets opened.
        </p>
        </div>
    </div>
    </div>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g stroke="#686868" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#686868" fill-opacity="0.3" d="M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><animate fill="freeze" attributeName="d" dur="0.8s" values="M20 5v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z;M22 3v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"/></path><path fill="none" d="M10 6h8M10 10h8M10 14h5M2 6v15c0 0.55 0.45 1 1 1h15"><animate fill="freeze" attributeName="d" dur="0.8s" values="M8 8h8M8 12h8M8 16h5M4 5v14c0 0.55 0.45 1 1 1h14;M10 6h8M10 10h8M10 14h5M2 6v15c0 0.55 0.45 1 1 1h15"/></path></g></svg> </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Layout for change, not just content</h5>
        <p class="leading-relaxed font-light">Amendments to stories and copy kept coming in throughout production, a result of pulling content from multiple teams on a deadline. Building layouts with enough flexibility to absorb last-minute changes without breaking the whole design became less of a nice-to-have and more of a survival skill</p>
        </div>
    </div>
    </div>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
       <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="#686868" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="18" d="M10 20v-16M10 20v-2c0 -2.76 2.24 -5 5 -5h4"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1s" values="18;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M19 13l-3 -3M19 13l-3 3M10 4l-3 3M10 4l3 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" to="0"/></path></g></svg> </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Version control is non-negotiable</h5>
        <p class="leading-relaxed font-light">
            With a publication this size, across two languages and five subsidiaries, knowing exactly which file is the latest, the approved, and the final is critical. One wrong version going out is one too many.
        </p>
        </div>
    </div>
    </div>
    
</CaseStudySection>


</div>
</div>

<SuggestedProjects {projects} current={3} />

<Footer />