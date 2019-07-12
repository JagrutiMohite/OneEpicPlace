<template>
    <div id="app">

        <!-- Page Header -->
        <Header ref="Header"></Header>

        <!-- Page -->
        <router-view/>

        <!-- Page Footer -->
        <Footer ref="Footer"></Footer>

    </div>
</template>

<style lang="scss">
    //Bootstrap
    @import "../node_modules/bootstrap/scss/bootstrap.scss";
    @import "/dist/css/bootstrap.min.css";
    //Fonts
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    @import url('https://fonts.googleapis.com/css?family=Quicksand');
</style>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        components: {
            Header,
            Footer
        }
    }
</script>
