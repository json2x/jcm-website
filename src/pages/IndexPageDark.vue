<style lang="scss">
.image-container {
  position: relative;
  width: 200px;
  height: 170px;
}
.red-cog {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.black-cog {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.logo-accent {
  color: $accent;
}
.rotating-image-clockwise {
  animation: cloclwise 10s linear infinite;
}
.dark-page {
  background-color: $secondary;
}
.dark-gradient {
  background-image: linear-gradient(
    rgba(18, 18, 18, 0.9),
    rgba(255, 255, 255, 0.1)
  );
}

@keyframes cloclwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotating-image-counterClockwise {
  animation: counterCloclwise 10s linear infinite;
}

@keyframes counterCloclwise {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>

<template>
  <div class="dark-page">
    <q-page class="flex flex-center dark-gradient">
      <div class="brand-container">
        <div class="image-container q-mx-auto">
          <img
            alt="JCMITCONSULTING logo"
            src="~assets/gear-red.svg"
            class="red-cog rotating-image-clockwise"
            style="width: 100px; height: 100px"
          />
          <img
            alt="JCMITCONSULTING logo"
            src="~assets/gear-white.svg"
            class="black-cog rotating-image-counterClockwise"
            style="width: 120px; height: 120px"
          />
        </div>
        <h3 class="q-mt-md q-mb-none text-white text-weight-medium">
          JCM<span class="logo-accent">IT</span>CONSULTING
        </h3>
        <div class="text-subtitle1 text-white" style="text-align: right">
          automate your business
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
