<template>
    <b-container :fluid="isFluid" class="px-0">
        <b-navbar toggleable="sm" :style="{backgroundColor: navBg}">
            <router-link class="navbar-brand" v-if="navLogo" to="/">
                <b-img src="@/assets/logo.png" :alt="title" :style="navLogoStyle"/>
            </router-link>

            <b-navbar-toggle target="nav-collapse">
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav :class="getNavAlign()">
                    <b-nav-item
                        v-for="menu in menuList"
                        :key="menu.label"
                    >
                        <router-link :style="navLabelStyle" class="nav-label" :to="menu.path">{{ menu.label }}</router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
    import {NAV_BAR_CONFIG} from '../config/UiConfig.js';
    import {APP_INFO} from '../config/UiConfig.js';
    import {MENU_CONFIG} from "../config/MenuConfig";

    export default {
        name: 'NavBar',
        data() {
            return {
                // APP_INFO
                title: APP_INFO.title,

                // NAV_BAR_CONFIG
                isFluid: NAV_BAR_CONFIG.isFluid,
                navLogo: NAV_BAR_CONFIG.navLogo,
                navLogoStyle: NAV_BAR_CONFIG.navLogoStyle,
                navBg: NAV_BAR_CONFIG.navBg,
                navAlign: NAV_BAR_CONFIG.navAlign,
                navTextStyle: NAV_BAR_CONFIG.navTextStyle,

                // MENU_CONFIG
                menuList: MENU_CONFIG.menuList
            }
        },
        computed: {
            navLabelStyle() {
                return {
                    '--text-color': this.navTextStyle.color,
                    '--text-color--hover': this.navTextStyle.colorHover,
                }
            }
        },
        methods: {
            getNavAlign() {
                if (this.navAlign === 'right')
                    return 'ml-auto';
                else if (this.navAlign === 'left')
                    return 'mr-auto';
                else if (this.navAlign === 'center')
                    return 'mx-auto';
            },
        }
    }
</script>

<style lang="scss" scoped>
    .nav-label {
        color: var(--text-color);
    }
    .nav-label:hover {
        color: var(--text-color--hover);
    }
</style>
