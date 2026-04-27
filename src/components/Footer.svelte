<script lang="ts">
  import { Footer, FooterCopyright, FooterIcon } from "flowbite-svelte";
</script>

<Footer footerType="socialmedia">

  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="coded by Yzabel Olavides." />
    <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
      <FooterIcon href="https://www.linkedin.com/in/myolavides/" target="_blank">
        <i class="fa-brands fa-linkedin-in"></i>
      </FooterIcon>
      <FooterIcon href="https://github.com/yzaolavides" target="_blank">
        <i class="fa-brands fa-github"></i>
      </FooterIcon>
    </div>
  </div>
</Footer>