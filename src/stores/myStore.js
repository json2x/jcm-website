import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  state: () => ({
    darkMode: false,
    rightDrawerOpen: false,
    counter: 0,
  }),

  getters: {},

  actions: {
    // increment() {
    //   this.counter++;
    // },

    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});
