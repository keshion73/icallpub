<template>
<v-app>
  <Header></Header>  
  <SubHeader v-if="!$vuetify.breakpoint.xs"></SubHeader>
  <v-container fluid class="dist-wrap">
    <Modal @close="Modal = false" :icon="'icon01'" v-if="Modal" :title="'확인'">
      <p slot="mes">정말 로그아웃하시겠습니까?</p>
      <div slot="btn">
        <v-btn x-large class="btntxt">취소</v-btn>
        <v-btn x-large class="btnbg">확인</v-btn>
      </div>
    </Modal>
      <router-view></router-view>
  </v-container>
   <Footer></Footer>
</v-app>
</template>
<script>
import Header from './Header.vue';
import SubHeader from './SubHeader.vue';
import Footer from './Footer.vue';
import Modal from '../../components/Modal.vue';

export default {
  name: "page-layout",
  components: {
    Header,
    SubHeader,
    Footer,
   Modal
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>