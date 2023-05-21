<template>
  <div class="sub-header">
        <div class="container d-flex">
          <v-breadcrumbs>
            <v-breadcrumbs-item
              to="/dashboard"
              active-class="active-breadcrumb"
            >
              <img src="@/assets/images/common/icon-home.svg" alt="">
            </v-breadcrumbs-item>
            <li><v-icon color="#399FC7">fa-chevron-right</v-icon></li>
            <v-breadcrumbs-item>
              {{ $route.meta.groupName }}
            </v-breadcrumbs-item>
          </v-breadcrumbs>
          <div class="sub-hd-info d-flex">
            <div class="d-flex">
              <p class="mark">잔액</p>
             <p><span class="font-weight-bolder">7,200 </span>원</p>
            </div>
            <div class="d-flex">
              <p class="mark">전용계좌</p>
             <p class="font-weight-bold">79606702902101</p>
             <button><img src="@/assets/images/common/icon-copy.svg" alt=""></button>
             <p>카카오뱅크 / (주)아이콜모바일</p>
            </div>
            <div class="d-flex">
              <p class="mark">USIM</p>
              <p><span>LG U+</span>23</p>
              <p><span>SKT</span>23</p>
              <p><span>KT</span>23</p>
            </div>
            <div class="d-flex">
              <p class="mark">담당자</p>
              <p class="font-weight-bold">010.1234.1234  (예자인)</p>
            </div>
            <div class="d-flex">
              <img src="@/assets/images/common/icon-people.svg" alt="">
              <p class="font-weight-bold">Yesign</p>
              <button>로그아웃</button>
            </div>
          </div>
        </div>        
      </div>
</template>
<script>
import Lnb from './Lnb.vue';
import AppBar from "@/components/AppBar.vue";
export default {
  components: {
    Lnb,
      AppBar
    },
    mounted() {
    },
    
    data() {
        return {
        }
    },
     methods: {
  },
  watch: {
  },
}
</script>