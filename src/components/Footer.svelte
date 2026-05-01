<script lang="ts">
  import { Footer, FooterCopyright, FooterIcon } from "flowbite-svelte";
  import { Signature } from "$lib/components/spell/signature";
</script>



<div class="min-h-screen bg-neutral-900 flex flex-col justify-between">
  <!-- Top: text -->
  <div class="pl-7 pt-10 sm:pt-20 md:pt-20 lg:pt-20 lg:pl-20 lg:pr-20">
    <div class="font-normal tracking-tighter text-5xl md:text-6xl lg:text-5xl sm:pt-4 md:leading-normal lg:leading-20 -tracking-10 text-neutral-50">
      <span class="quote">Trained in tech,</span> 
      <div class="rounded-2xl pl-2">
        <Signature class="" text="shaped by design." fontSize={20} color="#FF6D29" />
    </div>
    </div>
  </div>

  <!-- Bottom: footer -->
  <div class="pl-7 pr-7 bg-neutral-900">
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