<template>
  <div class="footer-container">
   
    <ul class="links">
      <li>
        <a href="https://github.com/AndersonVilela">Github</a>
      </li>
      <li>
        <a href="https://twitter.com/LUCA7374">Twitter</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/anderson-vilela-239071232/">Linkedin</a>
      </li>
      <li>
        <a href="https://www.instagram.com/_lucas_vilela/">Instagram</a>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.footer-container {
  @apply w-full flex flex-row justify-center items-center   h-[34px] pt-4 pb-0  px-3 border-t border-solid max-lg:px-2 ;
}



.footer-container > .links {
  @apply flex items-center justify-center gap-3 ;
}

.footer-container > .links > li > a {
  @apply font-sans not-italic font-normal text-xs leading-[112%] text-gray-500;
}
</style>
