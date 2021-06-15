<template>
    <div>
        <b-container class="text-center">
            <router-link v-if="headerImg" to="/">
                <b-img src="../assets/logo.png" :alt="title"/>
            </router-link>
        </b-container>
    </div>
</template>

<script>
    import {APP_INFO, MAIN_HEADER_CONFIG} from '../config/UiConfig.js'

    export default {
        data() {
            return {
                // APP_INFO
                title: APP_INFO.title,
                logoPath: APP_INFO.logoPath,

                // MAIN_HEADER_CONFIG
                headerImg: MAIN_HEADER_CONFIG.headerImg,
            }
        }
    }
</script>

<style scoped>

</style>
