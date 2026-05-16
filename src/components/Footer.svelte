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
		maxOpacity={0.35}
		duration={2}
		repeatDelay={0.5}
		class={cn(
			"mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
			"inset-x-0 inset-y-[-10%] h-[90%] skew-y-0"
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
   
  <div class="z-20 pl-7 pr-7">
      <div class="flex justify-end">
    <a href="mailto:yza.olavides@gmail.com" aria-label="Send an email to yza.olavides@gmail.com"> <span class="font-normal text-neutral-50 text-2xl pb-2 pr-7 inline-flex items-center gap-2 hover:text-neutral-500 transition duration-300 ease-in-out">Get in touch <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg></span></a>
    </div>
    <Footer footerType="socialmedia" class="bg-neutral-900">
      <hr class="my-6 border-neutral-600 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="coded by Yzabel Olavides." class="text-neutral-400"/>
        <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
          <FooterIcon href="https://www.linkedin.com/in/myolavides/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#efefef" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
            </svg>
          </FooterIcon>
          <FooterIcon href="https://github.com/yzaolavides" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#efefef" d="M5.884 18.653c-.3-.2-.558-.455-.86-.816a51 51 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.095c-2.968-.726-4.648-2.64-4.648-6.396c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.124 1.937.17 3.415 1.096a11.7 11.7 0 0 1 2.687-.308c.912 0 1.819.104 2.684.308c1.477-.933 2.614-1.227 3.422-1.096q.128.02.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.878.19 1.38c0 .665-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.958c-1.14.227-1.984-.532-1.984-1.525l.002-.447l.005-.705c.005-.707.008-1.337.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.333 4.336-1.482 4.336-4.66c0-.955-.312-1.744-.913-2.404A1 1 0 0 1 17.2 6.19c.166-.414.236-.957.095-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135a9.6 9.6 0 0 0-2.592-.349c-.89 0-1.772.118-2.592.35a1 1 0 0 1-.829-.134c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.045c-.597.655-.913 1.458-.913 2.404c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.202 1.177.545 1.748c-.193.168-.43.732-.43 1.364v3.15c0 .985-.834 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.661-.088-2.254-.485" />
            </svg>

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