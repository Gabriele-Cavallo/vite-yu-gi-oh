<script>
    import axios from 'axios';
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMainCardContainer from './components/AppMainCardContainer.vue';
    export default{
        components: {
            AppHeader,
            AppMainCardContainer
        },
        data(){
            return {
                store
            };
        },
        methods: {
            getCardApi() {
                axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then ((response) => {
                    store.cardsList = response.data.data;
                });
            }
        },
        mounted(){
            this.getCardApi();
        },
    }
</script>

<template>
    <AppHeader></AppHeader>
    <main>
        <AppMainCardContainer></AppMainCardContainer>
    </main>
</template>

<style  lang="scss">
  @use './style/generic';

</style>