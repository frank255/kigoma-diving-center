<template>
  <div class=" sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
    <Hero />
    <Services />
    <Aboutus />
    <Team />
    <Testimonials />
    <Contacts />
    <Faqs />
  </div>
</template>
<script setup>
import Services from "../components/Services.vue";
import Aboutus from "../components/Aboutus.vue";
import Contacts from "../components/Contacts.vue";
import Faqs from "../components/Faqs.vue";
import Team from "../components/Team.vue";
import Testimonials from "../components/Testimonials.vue";
import Hero from "../components/Hero.vue";
</script>