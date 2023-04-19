<template>
  <div class="app-container">
    
    <SideWelcome />
    <LatestPost />
  </div>
</template>
<style lang="css" scoped>
.app-container {
  @apply w-screen h-screen flex max-lg:flex-col;
}


</style>

<script lang="ts" setup>
import LatestPost from "~/src/components/LatestPost.vue";
import SideWelcome from "~/src/components/SideWelcome.vue";

</script>
