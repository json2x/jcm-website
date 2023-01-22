<style lang="scss">
.navlinks:hover {
  color: $accent;
  background-color: $primary;
}
</style>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-black">
      <q-toolbar class="q-pa-none q-pl-md q-pr-lg">
        <!-- <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar-title> -->
        <q-space />
        <q-btn stretch flat class="q-pa-lg text-h6 navlinks" label="Home" />
        <q-separator dark vertical />
        <q-btn stretch flat class="q-pa-lg text-h6" label="About" />
        <q-separator dark vertical />
        <q-btn stretch flat class="q-pa-lg text-h6" label="Contact" />
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
