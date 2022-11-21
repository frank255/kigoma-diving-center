<template>
  <div class="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 -z-50">
    <div
      class="
        flex flex-col
        items-start
        w-full
        max-w-xl
        px-4
        pt-20
        mx-auto
        lg:px-8 lg:max-w-screen-xl
      "
    >
      <div
        class="mb-10 lg:my-40 lg:max-w-lg lg:pr-5"
        data-aos="slide-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="mb-4 flex flex-col items-center justify-center">
          <h2
            class="
              max-w-lg
              mb-6
              font-sans
              text-2xl
              md:text-4xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-4xl sm:leading-none
            "
          >
            Kigoma Diving & Snorkling<br class="hidden md:block" />
            <span class="text-[#A45C40] flex items-center justify-center"
              >Center</span
            >
          </h2>
          <p
            class="
              text-base
              flex
              items-center
              justify-center
              text-gray-700
              md:text-lg
            "
          >
            “Enter a magic underwater of African’s oldest and deepest freshwater
            lake,Meet inhabitant of Lake Tanganyika you will enjoy the fabulous
            clean water in the pristine environment ”
          </p>
        </div>
        <div class="flex justify-center items-center md:flex-row">
          <button
            type="button"
            class="
              px-10
              py-3
              m-2
              text-lg
              font-semibold
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-fuchsia-500
              dark:text-gray-50
            "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
    <div
      class="
        inset-y-0
        right-0
        w-full
        max-w-xl
        px-4
        mx-auto
        lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute
        -z-50
        xl:px-0
      "
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <img
        class="
          object-cover
          w-full
          h-56
          rounded
          shadow-lg
          lg:rounded-none lg:shadow-none
          sm:h-96
          lg:h-full
        "
        src="/src/assets/divers.jpeg"
        alt=""
      />
    </div>
  </div>
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