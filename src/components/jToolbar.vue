<style lang="scss">
div.link {
  display: inline;
}

div.link a {
  text-decoration: none;
  color: black;
}

div.link a:hover {
  color: $accent;
  text-decoration: underline;
  text-decoration-thickness: 0.3rem;
  cursor: pointer;
}
</style>

<template>
  <q-toolbar :class="toolbarClass">
    <q-space class="gt-sm" />
    <div class="q-mr-md gt-sm">
      <div
        v-for="link in links"
        :key="link"
        class="col-auto q-mx-md text-h5 link"
      >
        <a :href="link.href">
          {{ link.label }}
        </a>
      </div>
    </div>
    <div class="q-mr-dm lt-md">
      <q-btn flat round color="primary" text-color="accent" icon="menu" />
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
  let className = "q-pa-md justify-end";
  if (props.mode == "light") {
    className = className.concat(" ", "bg-white text-black");
  }

  if (props.mode == "dark") {
    className = className.concat(" ", "bg-black text-white");
  }

  return className;
});
</script>
