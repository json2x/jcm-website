import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  state: () => ({
    darkMode: false,
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
