<script>
  import { Footer, FooterCopyright, FooterIcon } from "flowbite-svelte";
  import { Signature } from "$lib/components/spell/signature";
  import { AnimatedGridPattern } from "$lib/components/magic/animated-grid-pattern";
    import { cn } from "$lib/utils";
</script>



<div class="relative min-h-screen bg-neutral-900 flex flex-col justify-between">
<div class="absolute inset-0 z-0 overflow-hidden">
	<AnimatedGridPattern
		numSquares={20}
		maxOpacity={0.5}
		duration={3}
		repeatDelay={0.5}
		class={cn(
			"mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
			"inset-x-0 inset-y-[-30%] h-[118%] skew-y-0"
		)}
	/>
</div>
  <!-- Top: text -->
  <div class="z-10 pl-7 pt-10 sm:pt-20 md:pt-20 lg:pt-20 lg:pl-20 lg:pr-20">
    <div class="font-normal tracking-tighter text-5xl md:text-6xl lg:text-5xl sm:pt-4 md:leading-normal lg:leading-20 -tracking-10 text-neutral-50">
      <span class="quote">Trained in tech,</span> 
      <div class="rounded-2xl pl-2">
        <Signature class="" text="shaped by design." fontSize={20} color="#FF6D29" />
    </div>
    </div>
  </div>

  <!-- Bottom: footer -->
   
  <div class="pl-7 pr-7 bg-neutral-900">
      <div class="flex justify-end">
    <a href="mailto:yza.olavides@gmail.com"> <span class="font-normal text-neutral-50 text-2xl pb-2 pr-7 inline-flex items-center gap-2 hover:text-neutral-500 transition duration-300 ease-in-out">Get in touch <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg></span></a>
    </div>
    <Footer footerType="socialmedia" class="bg-neutral-900">
      <hr class="my-6 border-neutral-600 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="coded by Yzabel Olavides." class="text-neutral-400"/>
        <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
          <FooterIcon href="https://www.linkedin.com/in/myolavides/" target="_blank">
            <i class="fa-brands fa-linkedin-in text-neutral-400"></i>
          </FooterIcon>
          <FooterIcon href="https://github.com/yzaolavides" target="_blank">
            <i class="fa-brands fa-github text-neutral-400"></i>
          </FooterIcon>
        </div>
      </div>
    </Footer>
  </div>
</div>

<style>
    .quote {
        font-family: 'Atkinson Hyperlegible', sans-serif;
        letter-spacing: -0.05em;
    }
</style>