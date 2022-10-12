<script setup>
import Services from "../components/Services.vue";
import Aboutus from "../components/Aboutus.vue";
import Contacts from "../components/Contacts.vue";
import Faqs from "../components/Faqs.vue";
import Team from "../components/Team.vue";
import Testimonials from "../components/Testimonials.vue";


</script>
<template>
	<section id="home" class="bg-[url('./src/assets/diver.jpeg')] bg-cover bg-center">
		<div class="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
				<h1 class="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-red-400">Kigoma Diving & Snorkling center</h1>
				<p class="mt-6 mb-8 text-2xl sm:mb-12 xl:max-w-3xl dark:text-green-300">"We Provide You With an Opportunity to go where few People have gone Before"!</p>
				<div class="flex flex-wrap justify-center">
					<button type="button" class="px-10 py-3 m-2 text-lg font-semibold rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:text-gray-50">Book Now</button>
				</div>
			</div>
	</section>
  <Services id="services"/>
  <Aboutus id="aboutus"/>
  <Team id="team"/>
  <Testimonials id="testimonials"/>
  <Contacts id="contacts"/>
  <Faqs id="faqs"/>
</template>