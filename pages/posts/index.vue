<template>
  <div class="posts-container">
    <SideWelcome />
    <div>
      <h1>Blog</h1>
      <ul class="articles">
        <li class="article">
          <NuxtLink :to="`/posts/post/${latestCard?.slug}`">
            <span>{{ formatingData(latestCard?.created_at) }} - Útima postagem</span>
            <strong>{{ latestCard?.title }}</strong>
          </NuxtLink>
        </li>
        <li class="article" v-for="card in cards">
          <NuxtLink :to="`/posts/post/${card.slug}`">
            <span>{{ formatingData(card.created_at) }}</span>
            <strong>{{ card.title }}</strong>
          </NuxtLink>
        </li>
      </ul>
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideWelcome from "~/src/components/SideWelcome.vue";
import TheFooter from "~/src/components/TheFooter.vue";
import { ref, onMounted } from "vue";
import SlugService from "~/src/services/SlugService";
import Card from "~/src/models/Card";
import formatingData from "~/src/utils/formatingData";


const latestCard = ref<Card>();
const cards = ref<Card[]>([]);

async function fetchPost(): Promise<void> {

  await new SlugService().getCards().then((response) => {
    cards.value = response;
  })

  cards.value.shift();

  new SlugService().getLatestCard().then((response) => {
    latestCard.value = response
  })

}

onMounted(() => {
  fetchPost();
})

</script>

<style lang="css" scoped>
.posts-container {
  @apply w-screen h-screen flex max-lg:flex-col;
}
.posts-container > div  {
  @apply p-10 h-full;
}
.posts-container > div > h1 {
  @apply not-italic font-bold text-4xl leading-[112%] text-gray-800  mb-12 font-sans;
}

.articles {
  @apply flex flex-col gap-6 h-5/6;
}

.articles > .article {
  @apply w-[41.375rem] cursor-pointer ;
}

.articles > .article > a  {
  @apply flex flex-col ;
}
.articles > .article > a > span {
  @apply not-italic font-normal text-sm leading-[112%] text-gray-500 font-sans;
}

.articles > .article > a > strong {
  @apply not-italic font-bold text-4xl leading-[112%] text-gray-800 font-sans;

}
</style>
