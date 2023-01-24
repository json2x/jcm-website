<template>
  <q-toolbar :class="toolbarClass">
    <q-space />
    <div class="row">
      <div v-for="link in links" :key="link" class="col">
        {{ link }}
      </div>
    </div>
    <q-space />
  </q-toolbar>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  mode: String,
});

const toolbarClass = computed(() => {
  let className = "q-pa-none";
  if (props.mode == "light") {
    className = className.concat(" ", "bg-white text-black");
  }

  if (props.mode == "dark") {
    className = className.concat(" ", "bg-black text-white");
  }

  return className;
});
</script>
