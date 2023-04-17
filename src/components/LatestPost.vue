
<template>
  <div class="latest-post">
    <Loading  v-if="isLoading"/>

    <div class="header-post" v-else="isLoading">
      <span>{{ formatingData(post?.created_at) }} - Última Postagem...</span>
      <h1>
        {{ post?.title }}
      </h1>
    </div>
    <article class="post-content" v-html="transformHtml(post?.body)"></article>
    <div class="buttons">
      <NuxtLink to="/posts">Ver Outros Posts</NuxtLink>
        <button type="button"> <NuxtLink :to="`/posts/post/${post?.slug}`" >Continuar Lendo</NuxtLink></button>
    </div>
    <TheFooter />
  </div>
</template>

<style lang="css" scoped>
.latest-post {
  @apply w-6/12 h-full flex items-center justify-start flex-col p-10 max-lg:w-full;
}
.header-post {
  @apply flex flex-col p-10 pb-0  max-lg:w-full max-lg:p-0;
}

.header-post > span {
  @apply font-sans not-italic font-normal text-sm leading-[112%] text-gray-500;
}

.header-post > h1 {
  @apply font-sans not-italic font-bold text-4xl leading-[112%] text-gray-800  max-lg:text-3xl;
}

.buttons {
  @apply w-full flex justify-end  items-center gap-2 mb-8;
}

.buttons > a {
  @apply font-sans not-italic font-normal text-xs leading-6 text-blue-600;
}

.buttons > button {
  @apply w-[127px] h-10 rounded px-3 py-2  font-sans not-italic font-bold text-xs leading-6 text-gray-800 bg-[#e5e7eb];
}
.post-content {
  @apply h-[70vh] w-full font-sans prose overflow-hidden max-xl:prose-sm max-lg:prose-sm;
}

</style>

<script lang="ts" setup>
import TheFooter from './TheFooter.vue';
import { ref, onMounted } from 'vue';
import Post from "../models/Post";
import PostService from "../services/PostService";
import transformHtml from '../utils/transformHtml';
import formatingData from '../utils/formatingData';
import Loading from './Loading.vue';
import { booleanLiteral } from '@babel/types';

const post = ref<Post>();
let isLoading = true;

async function fetchPost(): Promise<void> {
  new PostService().getDetailsLatestPost().then((response) => post.value = response)
}

onMounted(() => {
  fetchPost();
  isLoading = false;
})

</script>