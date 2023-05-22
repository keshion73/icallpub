<template>
  <v-app-bar :height="60">
    <div class="hd-wrap">
      <div class="hd-cont">
        <div class="logo">
          <img src="@/assets/images/icalllogo.svg" alt=""><span>대리점</span>
        </div>
        <div class="gnb" v-if="!$vuetify.breakpoint.xs">
          <p @mouseenter="drawer = true">가입자 현황</p>
          <p @mouseenter="drawer = true">충전</p>
          <p @mouseenter="drawer = true">게시판</p>
          <p @mouseenter="drawer = true">내정보</p>
        </div>
        <div :class="[{'active':drawer},'all-menu']" @click="drawer = !drawer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <v-navigation-drawer v-if="!$vuetify.breakpoint.xs" v-model="drawer" absolute width="100%" height="auto" temporary hide-overlay>
      <div class="sub-menu">
        <v-list v-for="(submenu,index) in submenu" :key="'submenu' + index">
          <v-list-item v-for="(item,index) in submenu.item" :key="'item' + index">
            {{item.title}}
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-navigation-drawer v-if="$vuetify.breakpoint.xs" v-model="drawer" absolute width="250px" height="100vh" hide-overlay right>
      <div class="mem-info"> 
         <SubHeader></SubHeader>
      </div>
      <div class="sub-menu">
         <v-list-group
        v-for="(item, i) in submenu"
        :key="i"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(subItem, j) in item.item"
          :key="j"
          :to="subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ subItem.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      </div>
    </v-navigation-drawer>
  </v-app-bar>
</template>
<script>
  import AppBarAuth from "@/components/AppBarAuth";
  import AppBar from "@/components/AppBar.vue";
  import Drawer from "@/components/Drawer.vue";
import SubHeader from './SubHeader.vue';
  export default {
    components: {
      AppBarAuth,
      AppBar,
      Drawer,
      SubHeader
    },
    mounted() {},

    data() {
      return {
        drawer: false,
        submenu: [{
            title: '가입자 현황',
            item: [{
                title: '개통 정보',
                to: '/',
              },
              {
                title: '개통 현황',
                to: '/'
              }
            ]
          },
          {
            title: '충전',
            item: [{
                title: '충전',
                to: '/',
              },
              {
                title: '충전 내역 조회',
                to: '/'
              }
            ]
          },
          {
            title: 'USIM',
            item: [{
                title: 'USIM 요청',
                to: '/',
              },
              {
                title: 'USIM 요청 내역',
                to: '/'
              }
            ]
          },
          {
            title: '내정보',
            item: [{
                title: '마이페이지',
                to: '/',
              },
              {
                title: '비밀번호 변경',
                to: '/'
              },
              {
                title: '예치금 환불요청',
                to: '/'
              },
              {
                title: '예치금 환불요청내역',
                to: '/'
              }
            ]
          },
        ],
      }
    },
    methods: {

    },
    watch: {
    },
  }
</script>