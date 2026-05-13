<script>
  import CaseStudyHero from '/src/components/casestudy/CaseStudyHero.svelte';
  import CaseStudyMeta from '/src/components/casestudy/CaseStudyMeta.svelte';
  import CaseStudySection from '/src/components/casestudy/CaseStudySection.svelte';
  import CaseStudyMedia from '/src/components/casestudy/CaseStudyMedia.svelte';
  import Footer from "/src/components/Footer.svelte";

  import SuggestedProjects from '/src/components/casestudy/Suggested.svelte';
  import { projects } from '$lib/data/projects.js';
  let themeColor = '#cf3339';
</script>

<title>Yzabel Olavides | Portfolio</title>

<div class="bg-[#d3d3d3] min-h-screen flex flex-col justify-end">
    <div class="flex-1 flex justify-center items-center px-8 md:px-20 lg:px-40">
  <img 
    src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778682638/sm_header_fjii9x.png" 
    alt="Social Media Reels"
    class="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-xl object-contain"
  />
    </div>
  <div class="bg-[#faf9f7] pl-5 pr-5 lg:pl-50 lg:pr-50 pt-12 pb-12">
    <CaseStudyHero
      title="Seasonal Greetings & Holiday Campaigns"
      description="Designed branded holiday greeting across multiple formats and occasions, produced for a regional corporate audience."
    />
    <CaseStudyMeta
      client="Reach Group"
       role={['Graphic Designer', 'Motion Graphic Designer']}
      timeline="February - December 2025"
      tools={['Photoshop', 'Illustrator', 'After Effects']}
      color={themeColor}
    />
  </div>
</div>

<div class="bg-neutral-50">
<div class="pl-5 pr-5 lg:pl-50 lg:pr-50 lg:pt-12 lg:pb-12 text-neutral-500" style="letter-spacing: -0.02em">
<CaseStudySection title="Context" color={themeColor}>
  <p class="font-light text-2xl pb-1 text-neutral-600">Throughout my time at Reach Group, I was responsible for designing and producing branded holiday and occasion greetings across the calendar year.</p>
<p class="leading-relaxed font-light">
    From Ramadan and Eid to Emirati Women's Day, National Flag Day, and more, each occasion called for a cohesive visual package that felt celebratory and on-brand, without a detailed brief to work from. 

The prompt was typically just the occasion itself. The creative direction, format adaptation, and delivery were mine to own.
</p>
</CaseStudySection>

<CaseStudySection title="Outcome" color={themeColor}>
<p class="leading-relaxed font-light">
    I produced multi-format greeting packages across several occasions in 2025: animated for socials, structured for event templates, and polished enough for company-wide email signature deployment.

This resulted in a consistent visual language for seasonal communication that could be turned around reliably each time.

</p>
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778680158/sm_outcome_kuj8pe.png"></CaseStudyMedia>
</CaseStudySection>

<hr class="w-full h-px mt-8 mb-8 ml-4 mr-4 bg-neutral-200 border-0">

<CaseStudySection title="Deliverables" color={themeColor}>
<h5 class="mb-2 text-md font-medium tracking-tight">Animated Social Media Greetings</h5>
<p class="leading-relaxed font-light">
    Designed custom thumbnails for each video, developed to be visually relevant to the reel's topic while staying within the unified Reach Group identity. Each thumbnail was treated as its own small design problem.
</p>
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/video/upload/v1778681427/sm_animation_c8pagh.mp4" type="video"/>

<br><br>
<h5 class="mb-2 text-md font-medium tracking-tight">Multi-Format Social Assets</h5>
<p class="leading-relaxed font-light">
    Produced supporting social media graphics across formats to accompany each event greeting, adapted for different platform requirements such as company announcement printout, company-wide email signatures, and Whatsapp greeting.

<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778680166/sm_eidfitr_jwki3m.jpg" />
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778680163/sm_hijri_tsuncu.jpg" />
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778680164/sm_eidadha_is33ex.jpg" />
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778680160/sm_mothers_j3fbez.jpg" />
</p>

</CaseStudySection>


<CaseStudySection title="Learnings" color={themeColor}>
    <p class="leading-relaxed font-light">
        A a multi-format greeting campaign taught me things a one-off project never could:
    </p>
    <br>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="#686868"><path fill-opacity="0" stroke="#686868" stroke-dasharray="66" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="66;0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.8s" dur="0.3s" to="0.3"/></path><path d="M6 2h12v0h-12ZM6 22h12v0h-12Z"><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.4s" to="M6 2h12v3h-12ZM6 22h12v-3h-12Z"/></path></g><path fill="none" stroke="#686868" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8h2M10 8v2M14 16h-2M14 16v-2"><animate fill="freeze" attributeName="stroke-dashoffset" begin="2.3s" dur="0.4s" to="0"/></path></svg>
        </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Design from the start with flexibility in mind</h5>
        <p class="leading-relaxed font-light">
            An animated reel and a landscape email graphic aren't the same canvas, but they need to feel like they came from the same place. Building assets with format adaptability in mind from the first frame saves time and keeps the work coherent across every output.
        </p>
        </div>
    </div>
    </div>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#686868" fill-opacity="0" d="M5 8.5l7 -5.5l7 5.5v12.5h-4v-8l-1 -1h-4l-1 1v8h-4v-12.5Z"><animate fill="freeze" attributeName="fill-opacity" begin="3s" dur="0.3s" to="0.3"/></path><g fill="none" stroke="#686868" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="18" d="M4.5 21.5h15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="18;0"/></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M4.5 21.5v-13.5M19.5 21.5v-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.6s" to="0"/></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M2 10l10 -8l10 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.8s" to="0"/></path><path stroke-dasharray="26" stroke-dashoffset="26" d="M9.5 21.5v-9h5v9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="1.2s" to="0"/></path></g></svg>
        </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Brand guidelines are the floor, not the ceiling</h5>
        <p class="leading-relaxed font-light">
            Following the brand system is the baseline. The real work is finding room within it to make each occasion feel distinct, and not just templated. Seasonal design is one of the few spaces where personality can show through without breaking consistency.
        </p>
        </div>
    </div>
    </div>

    <div class="bg-white block p-6 mb-4 rounded-2xl shadow-sm hover:bg-neutral-100">
    <div class="flex items-start gap-4 lg:pl-2">
        <span class="text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><defs><mask id="SVGxu7cudPR"><path fill="#fff" fill-opacity="0" stroke="#fff" stroke-dasharray="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="56;0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.3s" to="0.3"/></path><path d="M12 14c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0Z" transform="rotate(-100 12 14)"><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.4s" to="M16 14c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 4 -14 4 -14c0 0 4 11.79 4 14Z"/><animateTransform attributeName="transform" begin="1.6s" dur="12s" keyTimes="0;0.08;0.2;0.28;0.36;0.44;0.52;0.6;0.68;0.76;0.84;0.92;1" repeatCount="indefinite" type="rotate" values="-100 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14"/></path></mask></defs><g fill="#686868"><path d="M0 0h24v24H0z" mask="url(#SVGxu7cudPR)"/><path d="M14 14c0 1.1 -0.9 2 -2 2c-1.1 0 -2 -0.9 -2 -2c0 -1.1 2 -10 2 -10c0 0 2 8.9 2 10Z" opacity="0" transform="rotate(-100 12 14)"><set fill="freeze" attributeName="opacity" begin="1.2s" to="1"/><animate fill="freeze" attributeName="d" begin="1.2s" dur="0.4s" values="M12 14c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0Z;M14 14c0 1.1 -0.9 2 -2 2c-1.1 0 -2 -0.9 -2 -2c0 -1.1 2 -10 2 -10c0 0 2 8.9 2 10Z"/><animateTransform attributeName="transform" begin="1.6s" dur="12s" keyTimes="0;0.08;0.2;0.28;0.36;0.44;0.52;0.6;0.68;0.76;0.84;0.92;1" repeatCount="indefinite" type="rotate" values="-100 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14"/></path></g></svg>
        </span>
        <div>
        <h5 class="mb-2 text-xl font-medium tracking-tight text-heading leading-8">Minimal briefs means I had to set my own standards</h5>
        <p class="leading-relaxed font-light">When the only prompt is the occasion itself, I became the creative director, the art director, and the designer all at once. That meant defining what good looks like before I start, and holding myself to it every time.</p>
        </div>
    </div>
    </div>


</CaseStudySection>


</div>
</div>

<SuggestedProjects {projects} current={1} />

<Footer />