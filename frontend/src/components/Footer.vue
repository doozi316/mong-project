<template>
    <div class="container-fluid px-0">
        <footer class="text-center text-lg-start" :class="getFooterTheme()">
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">{{ title }}</h5>
                        <p>
                            {{ description }}
                        </p>
                    </div>
                    <div
                        class="col-lg-3 col-md-6 mb-4 mb-md-0"
                        v-for="(link, idx) in links"
                        :key="idx"
                    >
                        <h5 class="text-uppercase">{{ link.title }}</h5>
                        <ul class="list-unstyled mb-0">
                            <li
                                v-for="(item, i) in link.items"
                                :key="i"
                            >
                                <a :href="item.url" class="text-white">{{ item.label }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © {{ getCurYear() }} Copyright:
                <a class="text-white" :href="`https://${domain}/`">{{ domain }}</a>
            </div>
        </footer>
    </div>
</template>

<script>
    import {FOOTER_CONFIG} from '../config/UiConfig.js';
    import {APP_INFO} from '../config/UiConfig.js';

    export default {
        data() {
            return {
                // APP_INFO
                title: APP_INFO.title,
                domain: APP_INFO.domain,

                // FOOTER_CONFIG
                footerTheme: FOOTER_CONFIG.footerTheme,
                description: FOOTER_CONFIG.description,
                links: FOOTER_CONFIG.links,
            }
        },
        methods: {
            getCurYear() {
                return new Date().getFullYear();
            },
            getFooterTheme() {
                if (this.footerTheme === 'dark')
                    return 'bg-dark text-white';
                else if (this.footerTheme === 'secondary')
                    return 'bg-secondary text-white';
                else if (this.footerTheme === 'light')
                    return 'bg-light text-secondary'
            }
        }
    }
</script>

<style scoped>

</style>
