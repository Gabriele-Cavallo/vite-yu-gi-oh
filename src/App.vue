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
            // Funzione che esegue la chiamata ad Axios per la generazione delle carte da mostrare
            getCardApi() {
                // Parametri base che voglio passare all' URL
                const queryParams = {
                    num: 20,
                    offset: 0,
                };
                // Se non viene scelto nessun archetipo faccio eseguire una chiamta ad Axios senza aggiunta di parametri 
                if(store.filteredArchetype === '') {
                    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
                    params: queryParams
                    })
                    .then ((response) => {
                        this.store.cardsList = response.data.data;
                        this.store.loading = true;
                    });
                // Altrimenti se viene selezionato un archetipo dalla Select allora aggiungo l'archetipo alla chiamata
                }else if(store.filteredArchetype !== ''){
                    queryParams.archetype = store.filteredArchetype;
                }
                axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
                    params: queryParams
                })
                .then ((response) => {
                    store.cardsList = response.data.data;
                    store.loading = true;
                });
            },
            // Funzione che esegue una chiamata ad Axios per scaricare la lista degli archetipi
            getArchetypeApi(){
                axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then((response) => {
                    store.searchedArchetype = response.data;
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
        <!-- Componente in ascolto dell'$emit per eseguire nuovamente la chiamta API e 
            generare le card da mostrare in pagina -->
        <SearchArchetypeFilter @filterCards="getCardApi"></SearchArchetypeFilter>
        <AppMainCardContainer></AppMainCardContainer>
    </main>
</template>

<style  lang="scss">
  @use './style/generic';

</style>