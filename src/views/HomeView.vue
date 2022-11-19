<script setup>
import Services from "../components/Services.vue";
import Aboutus from "../components/Aboutus.vue";
import Contacts from "../components/Contacts.vue";
import Faqs from "../components/Faqs.vue";
import Team from "../components/Team.vue";
import Testimonials from "../components/Testimonials.vue";
import Hero from "../components/Hero.vue";

</script>
<template>
	<Hero/>
  <Services id="services"/>
  <Aboutus id="aboutus"/>
  <Team id="team"/>
  <Testimonials id="testimonials"/>
  <Contacts id="contacts"/>
  <Faqs id="faqs"/>
</template>