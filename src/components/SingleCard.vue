<script>
    export default{
        name: 'SingleCard',
        props:{
            singleCard: Object,
        }
    }
</script>

<template>
    <section class="single-card">
        <img src="" alt="card">
        <h4>{{ singleCard.name }}</h4>
        <p>{{ singleCard.archetype }}</p>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
.single-card{
            margin: 10px 5px;
            width: calc((100% / 5) - 10px);
            background-color: $primary-color;
            height: 400px;
            text-align: center;
        }

</style>