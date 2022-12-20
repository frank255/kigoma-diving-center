<template>
    <div class="px-4 py-16 mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex items-center justify-start  mb-4 rounded-full bg-teal-accent-400">
            <img class="w-16 h-16 m-2" src="../assets/settings.gif" alt="gear">
            <span class="text-3xl md:text-4xl md:font-extrabold text-[#A45C40]">Our Services</span>
          </div>
      <div class="grid gap-10 mb-16 border-b-2 p-4 border-gray-200 shadow-lg lg:grid-cols-2" v-for="service in services" :key="service.id">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
          <div class="max-w-xl mb-6">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             {{service.name}}
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
                 {{service.description}}
            </p>
          </div>
          <div>
            <a href="/" aria-label="" class="inline-flex p-3 rounded-full items-center font-semibold transition-colors duration-200 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Book Now
              <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <img
              class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              :src="service.media[0].preview_url"
              alt=""
            />
            <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"   :src="service.media[1].preview_url" alt="" />
          </div>
          <div class="px-3">
            <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"   :src="service.media[2].preview_url" alt="" />
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
export default {
  name: "Services",
  data() {
    return {
      services: [],
      errorMsg: "",
    };
  },
  mounted() {
    axios
      .get("http://kigoma-diving-center-backend.test/api/services")
      .then((response) => {
        console.log(response.data);
        this.services = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>

</style>