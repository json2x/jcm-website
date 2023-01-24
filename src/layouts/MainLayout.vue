<style lang="scss">
.navlinks:hover {
  color: $accent;
  background-color: $primary;
}
</style>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <!-- <q-toolbar class="q-pa-none q-px-xl">
        <q-space />
        <q-btn stretch flat class="q-pa-lg q-mx-lg" label="Home" />
        <q-btn stretch flat class="q-pa-lg q-mx-lg" label="About" />
        <q-btn stretch flat class="q-pa-lg q-mx-lg" label="Contact" />
        <q-space />
      </q-toolbar> -->
      <j-toolbar :links="pages" mode="dark"></j-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useMyStore } from "../stores/myStore";

const store = useMyStore();
const pages = ref(["Home", "About", "Contact"]);
const currentPage = ref(null);
console.log(store);
</script>
