<style lang="scss">
.navlinks:hover {
  color: $accent;
  background-color: $primary;
}
</style>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <j-toolbar :links="pages" :mode="mode"></j-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <q-item
        v-for="page in pages"
        :key="page"
        clickable
        tag="a"
        :href="page.href"
      >
        <q-item-section>
          <q-item-label>{{ page.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useMyStore } from "../stores/myStore";

const store = useMyStore();
const { darkMode, rightDrawerOpen } = storeToRefs(store);

const pages = ref([
  { label: "Home", href: "/" },
  { label: "About Me", href: "/#/aboutme" },
  { label: "Contact", href: "/#/contact" },
]);
const currentPage = ref(null);

darkMode.value = false;

const mode = computed(() => {
  if (store.darkMode) {
    return "dark";
  }

  return "light";
});

console.log(darkMode.value);
</script>
