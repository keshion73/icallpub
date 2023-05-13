<template>
  <v-app class="bg-white">
    <v-main class="auth-pages">
      <div class="header-auth position-relative border-radius-xl min-vh-100">
        <v-container class="py-0">
          <v-row>
            <v-col lg="4" md="7" class="d-flex flex-column">
              <fade-transition :duration="200" origin="center top" mode="out-in">
                <!-- your content here -->
                <router-view></router-view>
              </fade-transition>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>
<script>
// import AppBarBlurAuth from "@/components/AppBarBlurAuth";
import { FadeTransition } from "vue2-transitions";

export default {
  name: "page-layout",
  components: {
    // AppBarBlurAuth,
    FadeTransition,
  },
  data() {
    return {};
  },
};
</script>
