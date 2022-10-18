<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <!-- sticky header -->
    <header class="sticky top-0 ..."><Navbar /></header>
    <!-- end sticky header -->
    <RouterView />
  </div>
  <Footer id="footer" />
</template>
