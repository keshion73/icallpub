<template>
    <v-app>
        <Lnb :drawer="drawer" :sidebarColor="sidebarColor" :sidebarTheme="sidebarTheme">
        </Lnb>
        <v-main>
            <!-- <app-bar-auth background="transparent" has-bg linkColor="white">
            </app-bar-auth> -->
            <Header></Header>
            <app-bar v-if="$route.name != 'Main'" background="bg-transparent" has-bg @drawer-toggle="drawer = $event"
                :toggle-active="drawer" :navbarFixed="navbarFixed" @toggleSettingsDrawer="toggleSettingsDrawer"></app-bar>
            <!-- <div @click="drawer = false" v-if="drawer" class="position-absolute drawer-state"></div>
            <app-bar-auth background="transparent" has-bg linkColor="white">
            </app-bar-auth>
            <app-bar v-if="$route.name != 'Profile'" background="bg-transparent" has-bg @drawer-toggle="drawer = $event"
                :toggle-active="drawer" :navbarFixed="navbarFixed"
                @toggleSettingsDrawer="toggleSettingsDrawer"></app-bar>
            <app-bar v-else-if="$route.name == 'Profile'" background="bg-default" has-bg
                @drawer-toggle="drawer = $event" :toggle-active="drawer"></app-bar>
            <app-bar v-else background="primary" linkColor="rgba(0,0,0,.6)" @drawer-toggle="drawer = $event"
                :toggle-active="drawer"></app-bar> -->
            <!-- <Content></Content> -->
            <fade-transition :duration="200" origin="center top">
                <!-- your content here -->
                <router-view></router-view>
            </fade-transition>
            <Footer></Footer>
            <settings-drawer :showSettingsDrawer="showSettingsDrawer" @toggleSettingsDrawer="toggleSettingsDrawer"
                @updateSidebarColor="updateSidebarColor" @updateSidebarTheme="updateSidebarTheme"
                @toggleNavbarPosition="toggleNavbarPosition">
            </settings-drawer>
        </v-main>
    </v-app>
</template>
    
<script>
import Header from './Header.vue';
import Lnb from './Lnb.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';
import Drawer from "@/components/Drawer.vue";
import AppBarAuth from "@/components/AppBarAuth";
import AppBar from "@/components/AppBar.vue";
import SettingsDrawer from "@/components/Widgets/SettingsDrawer.vue";
import { FadeTransition } from "vue2-transitions";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
    if (hasElement(className)) {
        new PerfectScrollbar(`.${className}`);
    } else {
        // try to init it later in case this component is loaded async
        setTimeout(() => {
            initScrollbar(className);
        }, 100);
    }
}

export default {
    components: {
        Header,
        Content,
        Footer,
        Drawer,
        AppBarAuth,
        AppBar,
        SettingsDrawer,
        Lnb,
        FadeTransition
    },
    computed: {
    },
    mounted() {
        this.initScrollbar();
    },
    created() {
        window.addEventListener('beforeunload', this.unLoadEvent);
    },
    beforeUnmount() {
        window.removeEventListener('beforeunload', this.unLoadEvent);
    },
    data() {
        return {
            drawer: null,
            showSettingsDrawer: false,
            sidebarColor: "success",
            sidebarTheme: "dark",
            navbarFixed: false,
            msg: 'Welcome to Your Vue.js App',
        }
    },
    methods: {
        initScrollbar() {
            let isWindows = navigator.platform.startsWith("Win");
            if (isWindows) {
                initScrollbar("sidenav");
            }
        },
        toggleSettingsDrawer(value) {
            this.showSettingsDrawer = value;
        },
        updateSidebarColor(value) {
            this.sidebarColor = value;
        },
        updateSidebarTheme(value) {
            let siblings = event.target.closest("button").parentElement.children;
            for (var i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove("bg-gradient-default");
                siblings[i].classList.add("btn-outline-default");
            }
            event.target.closest("button").classList.add("bg-gradient-default");
            event.target.closest("button").classList.remove("btn-outline-default");
            this.sidebarTheme = value;
        },
        toggleNavbarPosition(value) {
            this.navbarFixed = value;
        },
    }
}
</script>
<style lang="scss" scoped>
main::v-deep {
    .v-main__wrap {
        min-height: 100%;
        padding-bottom: 40px;
    }
}
</style>