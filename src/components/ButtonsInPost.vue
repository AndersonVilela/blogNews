<template>
  <div class="buttons">
    <NuxtLink to="/posts">Ver outros Posts</NuxtLink>
    <button type="button">
      <NuxtLink to="/">Voltar</NuxtLink>
    </button>
  </div>
</template>

<style lang="css" scoped>
.buttons {
  @apply w-full flex justify-end  items-center gap-2 mb-8 mr-10;
}

.buttons > a {
  @apply font-sans not-italic font-normal text-xs leading-6 text-blue-600;
}

.buttons > button {
  @apply w-[127px] h-10 rounded px-3 py-2  font-sans not-italic font-bold text-xs leading-6 text-gray-800 bg-[#e5e7eb];
}
</style>
