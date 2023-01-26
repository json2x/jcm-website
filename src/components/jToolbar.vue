<style lang="scss">
div.links {
  margin: 0;
  padding: 0;
}

h5.link {
  display: inline;
}

h5.link:hover {
  color: $accent;
  text-decoration: underline;
  text-decoration-thickness: 0.3rem;
  cursor: pointer;
}
</style>

<template>
  <q-toolbar :class="toolbarClass">
    <q-space />
    <div class="q-mr-md">
      <div class="links">
        <h5 v-for="link in links" :key="link" class="q-mx-md link">
          {{ link }}
        </h5>
      </div>
    </div>
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
  let className = "q-pa-md";
  if (props.mode == "light") {
    className = className.concat(" ", "bg-white text-black");
  }

  if (props.mode == "dark") {
    className = className.concat(" ", "bg-black text-white");
  }

  return className;
});
</script>
