<template>
<v-app>
  <Header></Header>
  
  <v-container fluid class="dist-wrap">
      <router-view></router-view>
  </v-container>
</v-app>
</template>
<script>
import Header from './Header.vue';
// import AppBarBlurAuth from "@/components/AppBarBlurAuth";
import { FadeTransition } from "vue2-transitions";

export default {
  name: "page-layout",
  components: {
   Header
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>