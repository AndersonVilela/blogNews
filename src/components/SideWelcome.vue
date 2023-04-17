<template>
  <div class="left">
    <div class="quotes">
      <p class="quoting">// Faça como um programador. Quando tudo</p>
      <p class="quoting">// está errado e confuso, apague tudo e</p>
      <p class="quoting">// recomece do zero.!</p>
    </div>
    <div class="profile-content">
      <img src="../../assets/images/profile2.png" alt="profile" />
      <div>
        <strong>Anderson Vilela</strong>
        <span>Frontend Developer</span>
      </div>
    </div>
    <div class="about-content">
      <p class="abouting">
        2022 inicio de um sonho e de um life style que mudou a minha percapção
        do mundo, obrigado programação
      </p>
      <p class="abouting">nos games possa ser que me encontre como m4qu14v3l</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>

<style lang="css" scoped>
.left {
  @apply w-6/12 h-full bg-[#F3F4F6]  max-lg:w-full flex-col flex justify-center pl-16;
}

.left > .quotes {
  @apply mb-7;
}
.left .quotes > .quoting {
  @apply not-italic font-normal text-xs leading-[112%] flex items-center text-emerald-600 font-sans;
}
.left > .profile-content {
  @apply flex items-center gap-3 mb-12;
}
.left > .profile-content > img {
  @apply w-[88px] h-[88px] border-gray-800 border-2 border-solid rounded-[999px];
  filter: drop-shadow(0px 7px 9px rgba(0, 0, 0, 0.12));
}

.left > .profile-content > div {
  @apply flex flex-col;
}
.left > .profile-content > div > strong {
  @apply not-italic font-bold text-3xl leading-[112%] text-gray-800 font-sans;
}

.left > .profile-content > div > span {
  @apply italic font-normal text-xs leading-[112%] text-gray-500 font-sans;
}
.left .about-content {
  @apply w-80;
}
.left > .about-content > .abouting {
  @apply italic font-normal text-sm leading-5 text-gray-500;
}
</style>
