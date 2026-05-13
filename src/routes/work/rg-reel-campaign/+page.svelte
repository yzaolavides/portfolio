<script>
  import CaseStudyHero from '/src/components/casestudy/CaseStudyHero.svelte';
  import CaseStudyMeta from '/src/components/casestudy/CaseStudyMeta.svelte';
  import CaseStudySection from '/src/components/casestudy/CaseStudySection.svelte';
//   import CaseStudyMedia from '/src/components/casestudy/CaseStudyMedia.svelte';
  import Footer from "/src/components/Footer.svelte";

  import SuggestedProjects from '/src/components/casestudy/Suggested.svelte';
  import { projects } from '$lib/data/projects.js';
  let themeColor = '#cf3339';
</script>

<title>Yzabel Olavides | Portfolio</title>

<div class="bg-[#CF3339] min-h-screen flex flex-col justify-end">
  <div class="bg-[#faf9f7] pl-5 pr-5 lg:pl-50 lg:pr-50 pt-12 pb-12">
    <CaseStudyHero
      title="Video Campaign Content System"
      description="Description"
    />
    <CaseStudyMeta
      client="Reach Group"
       role={['Graphic Designer']}
      timeline="May - December 2025"
      tools={['Photoshop']}
      color={themeColor}
    />
  </div>
</div>

<div class="bg-neutral-50">
<div class="pl-5 pr-5 lg:pl-50 lg:pr-50 lg:pt-12 lg:pb-12 text-neutral-500" style="letter-spacing: -0.02em">
<CaseStudySection title="Context" color={themeColor}>
  <p class="font-light text-2xl pb-1 text-neutral-600">Reach Group's five subsidiaries each operate in distinct industries, but share a common thread: staying ahead of industry trends and communicating that expertise to their audiences.</p>
<p class="leading-relaxed font-light">
    This project called for a year-long content system to support a recurring video campaign, where each reel spotlights a current trend and positions the relevant subsidiary as the go-to solution. 
The challenge was keeping everything visually cohesive under one Reach Group identity, while making each piece feel relevant to its specific topic. 
</p>
</CaseStudySection>

<CaseStudySection title="Outcome" color={themeColor}>
<p class="leading-relaxed font-light">
    I built and maintained a content system that ran consistently across a full year, developing the visual language for reel thumbnails, multi-format social assets, and emailers distributed to internal and external stakeholders across five business units. Every piece had to work together as a system while still feeling tailored to the video it represented.
</p>
</CaseStudySection>

<hr class="w-full h-px mt-8 mb-8 ml-4 mr-4 bg-neutral-200 border-0">

<CaseStudySection title="Deliverables" color={themeColor}>
<h5 class="mb-2 text-md font-medium tracking-tight">Reel Thumbnails</h5>
<p class="leading-relaxed font-light">
    Designed custom thumbnails for each video, developed to be visually relevant to the reel's topic while staying within the unified Reach Group identity. Each thumbnail was treated as its own small design problem.
</p>

<br><br>
<h5 class="mb-2 text-md font-medium tracking-tight">Multi-Format Social Assets</h5>
<p class="leading-relaxed font-light">
    Produced supporting social media graphics across formats to accompany each reel release, adapted for different platform requirements.
</p>

<br><br>
<h5 class="mb-2 text-md font-medium tracking-tight">Emailers</h5>
<p class="leading-relaxed font-light">
    Created emailers to announce each newly posted reel across all five subsidiaries, with the respective QR code for each, and timed closely to the reel's release.
</p>

</CaseStudySection>


<CaseStudySection title="Impact" color={themeColor}>
  <p class="leading-relaxed font-light">
    The campaign ran consistently for a full year across five business units, a content output that required both design range and operational discipline. 
<br><br>
The unified visual system gave Reach Group's subsidiaries a cohesive presence across social and email, while the thumbnail approach ensured each video had a distinct, topic-relevant entry point that held up in feed.

</p>
</CaseStudySection>

<CaseStudySection title="Learnings" color={themeColor}>
    <p class="leading-relaxed font-light">
        A year-long content system taught me things a one-off project never could:
    </p>
    <br>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="#71CFCC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" d="M21 7h-10.5M3 17h10.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s" values="14;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M10 7l4 4M10 7l4 -4M14 17l-4 4M14 17l-4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" to="0"/></path></g></svg>    
        </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Working alongside an external agency has its own rhythm</h5>
        <p class="leading-relaxed font-light">
            Picking up from a concept that someone else developed means I had to interpret and extend a vision, not just execute my own. Knowing how to work within that handoff was a skill worth building.
        </p>
        </div>
    </div>
    </div>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="#71CFCC"><path fill-opacity="0" stroke="#71CFCC" stroke-dasharray="66" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="66;0"/><animate fill="freeze" attributeName="fill-opacity" begin="2s" dur="0.3s" to="0.3"/></path><path d="M5 5h14v0h-14Z"><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.4s" to="M5 5h14v3h-14Z"/></path></g><g fill="none" stroke="#71CFCC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="4" stroke-dashoffset="4" d="M7 4v-2M17 4v-2"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" to="0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M7 11h10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" to="0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 15h7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" to="0"/></path></g></svg>    
        </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Deadlines don't move, so my workflow had to adapt</h5>
        <p class="leading-relaxed font-light">Event timelines are fixed, and with multiple assets running in parallel, knowing which deliverable needs to land first is just as important as executing it well. (It helps people from freaking out too!)</p>
        </div>
    </div>
    </div>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g stroke="#71CFCC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#71CFCC" fill-opacity="0" stroke-dasharray="54" d="M12 6h7c0.55 0 1 0.45 1 1v8c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="54;0"/><animate fill="freeze" attributeName="fill-opacity" begin="2.8s" dur="0.3s" to="0.3"/></path><g fill="none"><path d="M12 6h-8v-1c0 -0.55 0.45 -1 1 -1h5Z" opacity="0"><set fill="freeze" attributeName="opacity" begin="1.2s" to="1"/><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.4s" values="M12 6h-8v0c0 0 0.45 0 1 0h5Z;M12 6h-8v-1c0 -0.55 0.45 -1 1 -1h5Z"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 16v5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" to="0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M12 21h9M12 21h-9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.4s" to="0"/></path><path d="M10 20h4v2h-4Z" opacity="0"><set fill="freeze" attributeName="opacity" begin="2.4s" to="1"/><animate fill="freeze" attributeName="d" begin="2.4s" dur="0.4s" values="M12 21h0v0h0Z;M10 20h4v2h-4Z"/></path></g></g></svg>    
        </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Structuring my files like my life depends on it</h5>
        <p class="leading-relaxed font-light">
            With this many deliverables across different formats and audiences, a messy folder structure would have cost me time I didn’t have. A clear, consistent naming system from day one made everything easier to find, hand off, or revisit.
        </p>
        </div>
    </div>
    </div>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="none" stroke="#71CFCC" stroke-dasharray="48" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.25 14c0.89 3.45 4.02 6 7.75 6c4.42 0 8 -3.58 8 -8c0 -4.42 -3.58 -8 -8 -8c-2.39 0 -4.53 1.05 -6 2.71l-2 2.29"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="48;0"/></path><g fill="#71CFCC"><path stroke="#71CFCC" stroke-linecap="round" stroke-linejoin="round" d="M5.63 7.38l-2.13 -2.13l0 4.25l4.25 0Z" opacity="0" stroke-width="1"><set fill="freeze" attributeName="opacity" begin="1.2s" to="1"/><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.4s" values="M4 9l0 0l0 0l0 0Z;M5.63 7.38l-2.13 -2.13l0 4.25l4.25 0Z"/></path><circle cx="12" cy="12"><animate fill="freeze" attributeName="r" begin="1.6s" dur="0.4s" to="2"/></circle></g></svg>    
        </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Always have a backup</h5>
        <p class="leading-relaxed font-light">Hard drives fail at the worst times. My main SSD lagged and failed on me while I was editing during the event. Thankfully, I had the foresight to bring with me an extra hard drive just in case!</p>
        </div>
    </div>
    </div>


</CaseStudySection>


</div>
</div>

<SuggestedProjects {projects} current={1} />

<Footer />