<template>
  <h3 class="flex mt-40 items-center">
    <span aria-hidden="true" class="grow bg-gray-200 rounded h-0.5"></span>
    <span class="text-lg font-medium mx-3">Our Recent Activities</span>
    <span aria-hidden="true" class="grow bg-gray-200 rounded h-0.5"></span>
  </h3>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div
        class="overflow-hidden transition-shadow duration-300 bg-white rounded"
        v-for="post in posts"
        :key="post.id"
      >
        <img
          :src="post.media[0].preview_url"
          class="object-fill w-full h-64 rounded"
          alt=""
        />
        <div class="py-5">
          <router-link
            :to="{ name: 'IndividualNews', params: { id: post.id } }"
          >
            <p class="text-2xl font-bold leading-5">{{ post.title }}</p>
          </router-link>
          <p class="mt-4 text-gray-700 truncate">
            {{ post.content }}
          </p>
          <router-link
            :to="{ name: 'IndividualNews', params: { id: post.id } }"
            class="text-sm font-medium text-blue-400"
          >
            read more
          </router-link>

          <p class="mb-2 text-xs font-semibold text-gray-600 mt-3">
            Posted &nbsp; {{ post.created_at }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "News",
  data() {
    return {
      posts: [],
      errorMsg: "",
    };
  },
  mounted() {
    axios
      .get("http://kigomadivingcenter.x10.mx/api/posts")
      .then((response) => {
        console.log(response.data);
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
