<template>
  <div class="sub-header">
    <div class="container d-flex">
      <v-breadcrumbs>
        <v-breadcrumbs-item to="/dashboard" active-class="active-breadcrumb">
          <img src="@/assets/images/common/icon-home.svg" alt="">
        </v-breadcrumbs-item>
        <li>
          <v-icon color="#399FC7">fa-chevron-right</v-icon>
        </li>
        <v-breadcrumbs-item>
          {{ $route.meta.groupName }}
        </v-breadcrumbs-item>
      </v-breadcrumbs>
      <div class="sub-hd-info d-flex">
        <div class="d-flex">
          <div class="d-flex">
            <p class="mark">잔액</p>
            <p><span class="font-weight-bolder">7,200 </span>원</p>
            <button><img src="@/assets/images/common/icon-re.svg" alt=""
                style="margin-left: 4px;vertical-align: middle;"></button>
          </div>
          <button class="logout-btn" v-if="$vuetify.breakpoint.xs">로그아웃</button>
        </div>
        <div class="d-flex bank">
          <p class="mark">전용계좌</p>
          <div class="d-flex">
            <p class="font-weight-bold" style="display: inline-block">79606702902101</p>
            <button><img src="@/assets/images/common/icon-copy.svg" alt=""></button>
            <p>카카오뱅크</p>
          </div>
        </div>
        <div class="d-flex">
          <p class="mark">USIM</p>
          <p><span>LG U+</span>23</p>
          <p><span>SKT</span>23</p>
          <p><span>KT</span>23</p>
        </div>
        <div class="d-flex">
          <p class="mark">담당자</p>
          <p class="font-weight-bold">예자인 010-1234-1234</p>
        </div>
        <div class="d-flex">
          <p class="mark">대리점</p>
          <p class="font-weight-bold">IC1800000, 바이셀폰</p>
        </div>
        <button class="logout-btn" v-if="!$vuetify.breakpoint.xs" @click="Modal=true">로그아웃</button>
      </div>
    </div>
    <Modal @close="Modal = false" v-if="Modal" :icon="'icon01'" :title="'확인'">
      <p slot="mes">정말 로그아웃하시겠습니까?</p>
      <div slot="btn">
        <v-btn x-large class="btntxt">취소</v-btn>
        <v-btn x-large class="btnbg">확인</v-btn>
      </div>
    </Modal>
  </div>
</template>
<script>
  import Lnb from './Lnb.vue';
  import AppBar from "@/components/AppBar.vue";
  import Modal from '../../components/Modal.vue'
  export default {
    components: {
      Lnb,
      AppBar,
      Modal
    },
    mounted() {},

    data() {
      return {
        Modal: false
      }
    },
    methods: {},
    watch: {},
  }
</script>