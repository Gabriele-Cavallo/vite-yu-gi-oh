<script>
    import { store } from '../store.js';
    import SingleCard from './SingleCard.vue';
    export default{
        name: 'AppMainCardContainer',
        components: {
            SingleCard,
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
            <SingleCard v-for="card in store.cardsList" :singleCard = "card"></SingleCard>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
section{
    background-color: $primary-color;
    padding: 60px 0;
    .card-wrapper{
        width: 80%;
        background-color: white;
        padding: 40px 20px;
    }
}

</style>