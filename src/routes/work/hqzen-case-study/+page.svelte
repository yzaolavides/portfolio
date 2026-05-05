<script>
  import CaseStudyHero from '/src/components/casestudy/CaseStudyHero.svelte';
  import CaseStudyMeta from '/src/components/casestudy/CaseStudyMeta.svelte';
  import CaseStudySection from '/src/components/casestudy/CaseStudySection.svelte';
  import CaseStudyMedia from '/src/components/casestudy/CaseStudyMedia.svelte';

  let themeColor = '#2890FF';
</script>

<title>Yzabel Olavides | Portfolio</title>

<div class="bg-[{themeColor}] min-h-screen flex flex-col justify-end">
  <div class="bg-[#faf9f7] pl-5 pr-5 lg:pl-50 lg:pr-50 pt-12 pb-12">
    <CaseStudyHero
      title="HQZen Culture Page"
      description="Researched, designed, and developed a culture page that brings HQZen's software development team and values to life."
    />
    <CaseStudyMeta
      client="BPOSeats"
       role={['UI/UX Designer', 'Frontend Developer']}
      timeline="July - August 2023"
      tools={['Figma', 'Vue.js', 'HTML5', 'Sass']}
      color={themeColor}
    />
  </div>
</div>

<div class="bg-neutral-50">
<div class="pl-5 pr-5 lg:pl-50 lg:pr-50 pt-12 pb-12 text-neutral-500" style="letter-spacing: -0.02em">
<CaseStudySection title="Context" color={themeColor}>
  <p class="font-light text-2xl pb-1 text-neutral-600">As HQZen grew as BPOSeats' flagship SaaS product, the need to communicate who they are became more pressing.</p>
<p class="leading-relaxed font-light">Their website had no dedicated space for culture, values, or the people behind the product, making it harder to attract the right talent, build trust with clients, and establish a distinct brand identity. The goal was to design and develop a culture page that filled that gap, authentically.</p>
</CaseStudySection>

<CaseStudySection title="Outcome" color={themeColor}>
  <p class="leading-relaxed font-light">As a web design intern, I took this project from research all the way through to a live, deployed page, handling UX research, UI design, and frontend implementation. The result was a fully built culture page that showcases HQZen's team, work principles, and company environment through a minimal, brand-aligned layout that feels native to their existing product experience.</p>
</CaseStudySection>
<!-- <hr class="h-px bg-neutral-300 border-0 mt-8 mb-8 ml-4 mr-4"> -->

<div class="inline-flex items-center justify-center w-full">
    <hr class="w-full h-px mt-8 mb-8 ml-4 mr-4 bg-neutral-200 border-0">
    <span class="absolute px-3 font-base text-neutral-300 -translate-x-1/2 bg-[#faf9f7] left-1/2" style="letter-spacing: 10%;">KEY STAGES</span>
</div>

<CaseStudySection title="Empathize" color={themeColor}>
    <p class="leading-relaxed font-light">The project followed a modified design thinking process, with an added Implementation phase to take designs all the way to a live, deployed page.</p>
    <br>
    <p class="leading-relaxed font-light">I started with desk research to understand why culture pages matter, how they shape employer branding, attract talent, and set expectations for both candidates and clients. Additionally, I also framed the problem into a How Might We question, to help in further ideation. </p>
    <blockquote class="p-4 my-4 border-s-4 bg-[#EEF7FE]/75" style="border-color: {themeColor}; color:{themeColor};">
        <p class="text-xl italic font-medium leading-relaxed text-({themeColor})">"How might we effectively communicate the company’s software development team’s culture that attracts both talent and clients?"</p>
    </blockquote>

    <p class="leading-relaxed font-light">From there, my co-intern and I ran a user survey targeting both internal team members and external audiences. With 21 respondents and a tight timeline, the sample was small but actionable, and it surfaced clear patterns in what different audiences expected to find on a culture page.</p>
</CaseStudySection>

<CaseStudySection title="Define and Design" color={themeColor}>
    <p class="leading-relaxed font-light">Survey responses shaped a user persona and empathy map, which guided both content decisions and layout priorities.</p>
    <br>
    <p class="leading-relaxed font-light">
        From there, I built out the information architecture, mapped the page sections, and moved quickly from low-fidelity sketches to high-fidelity mockups in Figma, incorporating HQZen's existing design system throughout.
    </p>
    <br>
    <p class="leading-relaxed font-light">Responsiveness was factored in from the start, with mockups designed across desktop, tablet, and mobile breakpoints. Designs were then coded and deployed live via GitHub Pages.</p>
    <CaseStudyMedia src="/images/hqzen/hqzen_responsive.jpg" />
</CaseStudySection>

<CaseStudySection title="Final Design" color={themeColor}>
    <p class="leading-relaxed font-light">
        The final design balances storytelling with structure, featuring employee highlights, workspace visuals, and the team's work principles. A minimal layout lets HQZen's brand colors and typography carry the tone, making the page feel like a natural extension of the product.
    </p>
    <br>
</CaseStudySection>

<CaseStudySection title="Learnings" color={themeColor}>
    <p class="leading-relaxed font-light">
        Looking back, these were the moments that shaped how I think about design:
    </p>
    <br>


    <div class="bg-neutral-50 block p-6 mb-4 rounded-2xl rounded-base shadow-sm hover:bg-neutral-100">
        <h5 class="mb-2 lg:pl-6 text-xl font-semibold tracking-tight text-heading leading-8">Scope decisions pragmatically</h5>
        <p class="leading-relaxed font-light lg:pl-6">Working with a limited timeline and a small research pool taught me to move forward with what I had, rather than wait for perfect conditions.</p>
    </div>

    <div class="bg-neutral-primary-soft block p-6 mb-4 rounded-2xl rounded-base shadow-sm hover:bg-neutral-100">
        <h5 class="mb-2 lg:pl-6 text-xl font-semibold tracking-tight text-heading leading-8">Iteration, iteration, iteration...</h5>
        <p class="leading-relaxed font-light lg:pl-6">Layout decisions rarely land on the first try. This project pushed me to keep exploring arrangements until the structure actually served the content.</p>
    </div>

    <div class="bg-neutral-primary-soft block p-6 mb-4 rounded-2xl rounded-base shadow-sm hover:bg-neutral-100">
        <h5 class="mb-2 lg:pl-6 text-xl font-semibold tracking-tight text-heading leading-8">Creating down-to-earth designs  </h5>
        <p class="leading-relaxed font-light lg:pl-6">Wearing both the designer and developer hat meant I had to stay honest with myself. If I couldn't build it well, it wasn't a good design.</p>
    </div>


</CaseStudySection>

</div>
</div>
