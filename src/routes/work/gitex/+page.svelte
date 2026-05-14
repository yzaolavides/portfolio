<script>
  import CaseStudyHero from '/src/components/casestudy/CaseStudyHero.svelte';
  import CaseStudyMeta from '/src/components/casestudy/CaseStudyMeta.svelte';
  import CaseStudySection from '/src/components/casestudy/CaseStudySection.svelte';
  import CaseStudyMedia from '/src/components/casestudy/CaseStudyMedia.svelte';
  import SuggestedProjects from '/src/components/casestudy/Suggested.svelte';
  import { projects } from '$lib/data/projects.js';
  import Footer from "/src/components/Footer.svelte";

  let themeColor = '#00A29D';
</script>

<title>Yzabel Olavides | Portfolio</title>

<div class="bg-[#71CFCC] min-h-screen flex flex-col justify-end">
  <div class="flex-1 flex justify-center items-center px-8 md:px-20 lg:px-40">
  <img 
    src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778771334/gitex_d6zfq6.png" 
    alt="Quarterly Newsletter"
    class="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-xl object-contain"
  />
    </div>
  <div class="bg-[#faf9f7] pl-5 pr-5 lg:pl-50 lg:pr-50 pt-12 pb-12">
    <CaseStudyHero
      title="Reach x GITEX 2025"
      description="A full suite of event design assets built to carry Reach Group’s presence at GITEX 2025"
    />
    <CaseStudyMeta
      client="Reach Group"
       role={['Graphic Designer', 'Motion Graphic Designer']}
      timeline="September - October 2025"
      tools={['Illustrator', 'After Effects', 'Photoshop']}
      color={themeColor}
    />
  </div>
</div>

<div class="bg-neutral-50">
<div class="pl-5 pr-5 lg:pl-50 lg:pr-50 lg:pt-12 lg:pb-12 text-neutral-500" style="letter-spacing: -0.02em">
<CaseStudySection title="Context" color={themeColor}>
  <p class="font-light text-2xl pb-1 text-neutral-600">GITEX 2025 was a landmark moment for Reach Group, with it being one of the largest tech conferences in the world, and a high-visibility stage to showcase the group and its subsidiaries.</p>
<p class="leading-relaxed font-light">
    With an external agency brought in to lead the concept, my role was to execute the full suite of design deliverables across motion, digital, and print, ensuring everything that went out under Reach Group's name was cohesive, on-brand, and ready on time.
</p>
</CaseStudySection>

<CaseStudySection title="Outcome" color={themeColor}>
<p class="leading-relaxed font-light">
    As the in-house designer, I handled the production of most branded event assets, from pre-event social content and partner announcements to on-site LED screens and employee-facing collateral. The work spanned multiple formats and audiences, all tied together under a consistent visual direction leading up to and during the event.
</p>
</CaseStudySection>

<hr class="w-full h-px mt-8 mb-8 ml-4 mr-4 bg-neutral-200 border-0">

<CaseStudySection title="Deliverables" color={themeColor}>
<h5 class="mb-2 text-md font-medium tracking-tight">Animated Stories</h5>
<p class="leading-relaxed font-light">
    I produced a series of looping motion stories in the lead-up to GITEX, designed to work natively with Instagram's interactive features for added engagement.
</p>
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/video/upload/v1778771254/stories_xpwprn.mp4" type="video"/>

<br><br>
<h5 class="mb-2 text-md font-medium tracking-tight">Partner Announcements</h5>
<p class="leading-relaxed font-light">
    We rolled out social media announcement graphics for around 20 partners across the weeks leading up to the event, maintaining a consistent format while keeping each post visually distinct.
</p>

<br><br>
<h5 class="mb-2 text-md font-medium tracking-tight">Social Media Reel Covers and Emailers</h5>
<p class="leading-relaxed font-light">
    I designed reel covers, paired with their respective emailers to keep the team and external stakeholders informed and aligned ahead of the event.
</p>
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778772367/emailer_jwwmbb.jpg"/>

<br><br>
<h5 class="mb-2 text-md font-medium tracking-tight">LED Screen Animations</h5>
<p class="leading-relaxed font-light">
    I animated announcement visuals for the event's on-site LED screens, built to loop seamlessly in a live conference environment.    
</p>
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/video/upload/v1778771252/led_nfdbdy.mp4" type="video"/>
<br><br>
<h5 class="mb-2 text-md font-medium tracking-tight">LinkedIn Employee Template</h5>
<p class="leading-relaxed font-light">
    I created a customizable LinkedIn template set featuring each Reach Group subsidiary, allowing employees to drop in their photo and post that they were attending GITEX.
</p>
<CaseStudyMedia src="https://res.cloudinary.com/drsiasqzy/image/upload/v1778772367/linkedin_seggqa.jpg"/>
</CaseStudySection>


<CaseStudySection title="Impact" color={themeColor}>
  <p class="leading-relaxed font-light">
    Reach Group showed up to GITEX 2025 with a consistent, polished presence across every touchpoint, from the screens inside the venue to the content their employees were posting on LinkedIn. The partner announcement rollout built steady visibility in the weeks leading up to the event, and the employee template gave the brand organic reach without extra effort from the team.
</p>
<CaseStudyMedia
  layout="masonry"
  src={['https://res.cloudinary.com/drsiasqzy/image/upload/v1778772616/IMG_9721_w9niza.jpg', 'https://res.cloudinary.com/drsiasqzy/image/upload/v1778772943/JCDW0346_txxuxx.jpg', 'https://res.cloudinary.com/drsiasqzy/image/upload/v1778773290/IMG_9796_ump1r2.jpg']}
  caption="Me, very busy and serious during the event!"
/>
</CaseStudySection>

<CaseStudySection title="Learnings" color={themeColor}>
    <p class="leading-relaxed font-light">
        After a month of preparation and a week on the ground, I’ve learned a few key things:
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

<SuggestedProjects {projects} current={5} />

<Footer />