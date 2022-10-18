<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->

  <div>
    <!-- sticky header -->
    <header class="sticky top-0 ..."><Navbar /></header>
    <!-- end sticky header -->
    <RouterView />
  </div>
  <Footer id="footer"/>
</template>
