<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-black">
      <q-toolbar class="">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar-title>
        <q-space />
        <q-btn stretch flat label="Home" />
        <q-separator dark vertical />
        <q-btn stretch flat label="About" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Contact" />
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
