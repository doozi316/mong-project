<template>
    <div id="app">
        <!--  Logo  -->
        <Header/>

        <!--  NavBar  -->
        <NavBar/>

        <!-- Main View -->
        <b-container id="main">
            <router-view/>
        </b-container>

        <!-- Footer -->
        <Footer id="footer" />

    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    export default {
        name: 'App',
        components: {
            NavBar,
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    @import 'assets/styles/font.css';

    #app {
        font-family: 'NanumBarunGothic', sans-serif;
        display: flex;
        flex-direction: column;
        height: 100vh;

        #main {
            flex: 1 0 auto;
        }

        #footer {
            flex-shrink: 0;
        }
    }
</style>
