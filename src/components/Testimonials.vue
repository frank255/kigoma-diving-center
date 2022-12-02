<template>
  <section id="testimonials" class="my-8">
    <div class=" container mx-auto  flex flex-col  items-center  pb-6 mb-4 md:p-10 md:px-12" >
      <h1
        class=" text-3xl sm:text-5xl font-semibold leading-none text-[#A45C40] text-center"
      >
        What our customers are saying about us
      </h1>
    </div>
    <figure class="mx-auto max-w-screen-md text-center mb-10"  v-for="comment in comments" :key="comment.id">
    <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"{{ comment.comment }}"</p>
    </blockquote>
    <figcaption class="flex justify-center items-center mt-6 space-x-3">
        <img class="w-10 h-10 rounded-full" src="src/assets/speech-bubble.gif" alt="profile picture">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">{{comment.fullname}}</cite>
            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{{ comment.title}}</cite>
        </div>
    </figcaption>
</figure>
  </section>
</template>

<script>
import axios from "axios";
import { comment } from "postcss";
export default {
  name: "Testimonials",
  data() {
    return {
      comments: [],
      errorMsg: "",
    };
  },
  mounted() {
    axios
      .get("http://kigoma-diving-center-backend.test/api/testimonials")
      .then((response) => {
        console.log(response.data);
        this.comments = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errorMsg = "testimonials not available";
      });
  },
};
</script>

<style>
</style>