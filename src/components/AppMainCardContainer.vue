<script>
    import { store } from '../store.js';
    import Loader from './Loader.vue'
    import SingleCard from './SingleCard.vue';
    export default{
        name: 'AppMainCardContainer',
        components: {
            SingleCard,
            Loader
        },
        data() {
            return {
                store,
            };
        }
        
    }
</script>

<template>
    <section class="card-container d-flex jst-cntr">
        <div class="card-wrapper d-flex d-wrap">
            <div class="top-banner">
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
            padding: 50px 0;
            background-color: black;
            margin: 0 5px;
        }
    }
}

</style>