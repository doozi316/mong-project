<template>
    <div id="app">
        <!--  Logo  -->
        <Header />

        <!--  NavBar  -->
        <NavBar class="sky-blue-border" />

        <!-- Main View -->
        <b-container class="red-border">
            <router-view/>
        </b-container>

        <!-- Footer -->
        <Footer />
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
    #app {
        .red-border {
            border: 1px solid red;
        }

        .sky-blue-border {
            border: 1px solid #80feff;
        }
    }
</style>
