<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="overfow-hidden">
    <!-- sticky header -->
    <header class="fixed top-0 left-0 right-0 w-full"><Navbar /></header>
    <!-- end sticky header -->
    <RouterView />
  </div>
  <Footer id="footer" />
</template>
