<template>
 <!-- component -->
<section class="mt-10 pt-24 pb-6 bg-white">
    <div class="px-2 md:px-12 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center"
        data-aos="slide-up"
        data-aos-duration="1500"
        data-aos-delay="500"
        >
            <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Kigoma</span> <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Diving & Snorkling</span> <span>Center</span>
            </h1>
            <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              “Enter a magic underwater of African’s oldest and deepest freshwater
            lake,Meet inhabitant of Lake Tanganyika you will enjoy the fabulous
            clean water in the pristine environment ”</p>
            <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a href="/booking" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl sm:w-auto sm:mb-0">
                    Get Started
                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#aboutus" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    Learn More
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </a>
            </div>
        </div>
        <div class="w-full mx-auto mt-20 text-center md:w-10/12">
            <div class="relative z-0 w-full mt-8">
                <div class="relative overflow-hidden shadow-2xl">
                    <img class="object-fill w-full rounded-md" src="../assets/divers.jpeg">
                </div>
            </div>
        </div>
    </div>
</section>

  <!--******************-->
  <!-- <div class="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 -z-50">
    <div
      class="flex flex-col items-start w-full max-w-xl px-4 pt-20 mx-auto lg:px-8 lg:max-w-screen-xl"
    >
      <div
        class="mb-10 lg:my-40 lg:max-w-lg lg:pr-5"
        data-aos="slide-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="mb-4 flex flex-col items-center justify-center">
          <h2
            class="max-w-lg mb-6 font-sans text-2xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
          >
            Kigoma Diving & Snorkling<br class="hidden md:block" />
            <span class="text-[#A45C40] flex items-center justify-center"
              >Center</span
            >
          </h2>
          <p
            class="text-base flex items-center justify-center text-gray-700 md:text-lg"
          >
            “Enter a magic underwater of African’s oldest and deepest freshwater
            lake,Meet inhabitant of Lake Tanganyika you will enjoy the fabulous
            clean water in the pristine environment ”
          </p>
        </div>
        <div class="flex justify-center items-center md:flex-row">
          <a href="/booking">
            <button
              class="px-10 py-3 m-2 text-lg font-semibold rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
            >
              Book Now
            </button>
          </a>
        </div>
      </div>
    </div>
    <div
      class="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute -z-50 xl:px-0"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <img
        class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
        src="/src/assets/divers.jpeg"
        alt=""
      />
    </div>
  </div> -->
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 3s ease;
}
</style>
