<template>
  <div class="slug-container">
    <SideWelcome />
    <div class="right">
      <article class="post-content" v-html="transformHtml(post?.body)"></article>
      <ButtonsInPost />
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideWelcome from "~/src/components/SideWelcome.vue";
import PostService from "../../../src/services/PostService";
import Post from "~/src/models/Post";
import { ref, onMounted } from "vue";
import transformHtml from "~/src/utils/transformHtml";
import TheFooter from "~/src/components/TheFooter.vue";
import ButtonsInPost from "~/src/components/ButtonsInPost.vue";

const post = ref<Post>();

async function fetchPost() {
  const { path } = useRoute();
  const slug = path.split('/');

  new PostService().getOnlyPost(slug[slug.length -1]).then((response) => {
    post.value = response;
  })

}

onMounted(() => {
  fetchPost();
})





onMounted(() => {

})

</script>

<style lang="css" scoped>

.slug-container {
  @apply  w-screen h-screen flex max-lg:flex-col ;
}
.slug-container > .right {
  @apply w-6/12 h-full flex items-center justify-start flex-col p-10 max-lg:w-full ;
}
.post-content {
  @apply w-full font-sans prose overflow-y-auto  max-xl:prose-sm max-lg:prose-sm ;

}

</style>