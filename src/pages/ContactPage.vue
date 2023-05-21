<template>
  <q-page class="flex flex-center light-gradient">
    <q-card class="my-card q-mb-lg">
      <q-card-section>
        <div class="row q-mb-md">
          <div class="col text-subtitle1 text-weight-medium">
            Send me an email at
          </div>
        </div>
        <div class="row q-gutter-md">
          <div class="col-auto">
            <q-avatar
              size="60px"
              font-size="32px"
              color="teal"
              text-color="white"
              icon="mail"
            />
          </div>
          <div class="col">
            <p class="text-h6 q-mt-md">jcmitconsulting@gmail.com</p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
});
</script>
