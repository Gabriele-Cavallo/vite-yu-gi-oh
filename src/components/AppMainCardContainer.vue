<script>
    import { store } from '../store.js';
    import Loader from './Loader.vue'
    import SingleCard from './SingleCard.vue';
    import SearchedCount from './SearchedCount.vue';

    export default{
        name: 'AppMainCardContainer',
        components: {
            SingleCard,
            Loader,
            SearchedCount,
        },
        data() {
            return {
                store,
            };
        }
        
    }
</script>

<template>
    <section class="card-container d-flex flex-col jst-cntr algn-cntr">
        <div class="card-wrapper d-flex d-wrap">
            <div class="top-banner">
                <SearchedCount></SearchedCount>
                <Loader v-if="!store.loading"></Loader>
            </div>
            <SingleCard v-for="card in store.cardsList" :key="card.id" :singleCard = "card"></SingleCard>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
section{
    &.card-container{
        background-color: $primary-color;
        padding: 80px 0;
    }
    .card-wrapper{
        width: 80%;
        background-color: white;
        padding: 40px 20px;
        .top-banner{
            width: calc(100% - 10px);
            padding: 30px 0;
            background-color: black;
            margin: 0 5px;
        }
    }
}

</style>