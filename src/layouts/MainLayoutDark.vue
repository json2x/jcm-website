<style lang="scss">
.navlinks:hover {
  color: $accent;
  background-color: $primary;
}
</style>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar class="q-pa-none q-px-xl bg-black text-white">
        <q-space />
        <q-btn stretch flat class="q-pa-lg" label="Home" />
        <q-btn stretch flat class="q-pa-lg" label="About" />
        <q-btn stretch flat class="q-pa-lg" label="Contact" />
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const pages = ref(["Home", "About", "Contact"]);
const currentPage = ref(null);
</script>
