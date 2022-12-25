<template>
  <div v-if="post">
    <div
      class="px-4 py-16 m-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div
            class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"
          >
            <img src="/src/assets/open-book.gif" alt="" srcset="" />
          </div>
          <div class="max-w-xl mb-6">
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              {{ post.title }}
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              {{ post.content }}
            </p>
          </div>
          <div class="mt-6">
            <router-link
              to="/booking"
              class="rounded-full border-2 border-black p-3"
            >
              Book Now
            </router-link>
          </div>
          <router-link to="/news">
            <div
              class="mt-2 flex items-center justify-center w-12 h-16 mb-4 rounded-full"
            >
              <img src="/src/assets/left-arrow.gif" alt="" srcset="" />
            </div>
          </router-link>
        </div>
        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <img
              class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              :src="post.media[0].preview_url"
              alt=""
            />
            <img
              class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              :src="post.media[1].preview_url"
              alt=""
            />
          </div>
          <div class="px-3">
            <img
              class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              :src="post.media[2].preview_url"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    axios
      .get("https://kigomadivingcenter.x10.mx/api/posts/" + this.id)
      .then((response) => {
        console.log(response.data);
        this.post = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errorMsg = "testimonials not available";
      });
  },
};
</script>

<style></style>
