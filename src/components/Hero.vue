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
                <span>Kigoma</span> <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Diving & Snorkeling</span> <span>Center</span>
            </h1>
            <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              “Enter a magic underwater of African’s oldest and deepest freshwater
            lake,Meet inhabitant of Lake Tanganyika you will enjoy the fabulous
            clean water in the pristine environment”</p>
            <!-- <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a href="/booking" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl sm:w-auto sm:mb-0">
                    Get Started
                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#aboutus" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    Learn More
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </a>
            </div> -->
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
