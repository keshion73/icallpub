<template>
  <div class="init-wrap">
    <!-- <Modal :icon="'icon01'" :title="'확인'">
      <p slot="mes">비밀번호 최초 변경이 완료되었습니다.<br> 다시 로그인 해주세요.</p>
      <div slot="btn">
        <v-btn color="btncolor" x-large>확인</v-btn>
      </div>
    </Modal> -->
    <div class="init-cont">
      <p class="init-tit">최초 비밀번호 변경</p>
      <v-form action="">
        <h4>새 비밀번호</h4>
        <v-text-field outlined hide-details="auto"></v-text-field>
        <h4 style="margin-top: 20px;">비밀번호 확인</h4>
        <v-text-field outlined type="password" disabled hide-details="auto"></v-text-field>
        <!--새 비밀번호 필드 입력전 disabled-->
        <v-btn color="btncolor" x-large block>저장</v-btn>
      </v-form>
    </div>
    <div class="init-bg" v-if="!$vuetify.breakpoint.xs">
      <img src="@/assets/images/page/login/initpw-bg.png" alt="">
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from '../../views/layout/Footer'
  import Modal from '../../components/Modal.vue'
  export default {
    components: {
      Footer,
      Modal
    },
    data() {
      return {};
    },
  };
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/page/login/login.scss';
</style>