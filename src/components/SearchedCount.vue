<script>
import { store } from '../store.js';

export default{
    name: 'SearchedCount',
    data(){
        return{
            store
        }
    },
}
</script>

<template>
    <section class="counter-container">
        <h2 v-if="store.loading">Sono stati trovati: {{ store.cardsList.length }}  risultati</h2>
    </section>
</template>

<style scoped lang="scss">
section.counter-container{
    width: 100%;
    text-align: center;
}

</style>