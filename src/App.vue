<script>
    import axios from 'axios';
    import { store } from './store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMainCardContainer from './components/AppMainCardContainer.vue';
    import SearchArchetypeFilter from './components/SearchArchetypeFilter.vue';

    export default{
        components: {
            AppHeader,
            AppMainCardContainer,
            SearchArchetypeFilter,
        },
        data(){
            return {
                store
            };
        },
        methods: {
            getCardApi() {
                const queryParams = {
                    num: 20,
                    offset: 0,
                };
                axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
                    params: queryParams
                })
                .then ((response) => {
                    store.cardsList = response.data.data;
                    store.loading = true;
                });
            },
            getArchetypeApi(){
                axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then((response) => {
                    store.searchedArchetype = response.data;
                    console.log('archetype' , response.data);
                })
            }
        },
        mounted(){
            this.getCardApi();
            this.getArchetypeApi();
        },
    }
</script>

<template>
    <AppHeader></AppHeader>
    <main>
        <SearchArchetypeFilter></SearchArchetypeFilter>
        <AppMainCardContainer></AppMainCardContainer>
    </main>
</template>

<style  lang="scss">
  @use './style/generic';

</style>