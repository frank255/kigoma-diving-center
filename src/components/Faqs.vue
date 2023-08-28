<template>
  <div
    id="faqs"
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p
            class="inline-block px-3 py-px mb-4 text-3xl sm:text-5xl font-semibold tracking-wider text-[#A45C40] uppercase rounded-full bg-teal-accent-400"
          >
            FAQS
          </p>
        </div>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="70326c9b-4a0f-429b-9c76-792941e326d5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span class="relative">These</span>
          </span>
          Are the frequently asked questions by our customers
        </h2>
      </div>
    </div>
    <div class="max-w-screen-xl sm:mx-auto">
      <div
        class="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="space-y-8">
          <div>
            <p class="mb-4 text-xl font-medium">Where are we located?</p>
            <p class="text-gray-700">
              The Kigoma Diving and snorkeling center is located in Kigoma
              region ,Tanzania near the Kigoma power station Within Aqualodge
              compound.
            </p>
          </div>
          <div>
            <p class="mb-4 text-xl font-medium">How is it accessible?</p>
            <p class="text-gray-700">
              Both ways, you can take a flight from other parts of the world to
              Kigoma Airport, followed by a 45-minute ride or drive to
              Aqualodge, where our office is located.
            </p>
          </div>
          <div>
            <p class="mb-4 text-xl font-medium">
              Possible to book both accommodation and diving/snorkeling
              experience?
            </p>
            <p class="text-gray-700">
              Certainly, once you provide us with your anticipated arrival date
              and your travel plans, our team will be delighted to assist in
              organizing everything for your visit.
            </p>
          </div>
        </div>
        <div class="space-y-8">
          <div>
            <p class="mb-4 text-xl font-medium">
              How I can pay/mode of payment?
            </p>
            <p class="text-gray-700">
              Currently, only cash payments are accepted.In near future
              MasterCard,Visa and American Experess will be offered.
            </p>
          </div>
          <div>
            <p class="mb-4 text-xl font-medium">
              Do I need to bring the Diving or Snorkeling gear?
            </p>
            <p class="text-gray-700">
              Not necessarily,we have plenty of gear for you to enjoy your water
              activities,however we are flexible for you to bring and use your
              own gears as far as they are in good working conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
export default {
  name: "Faqs",
};
</script>

<style></style>
