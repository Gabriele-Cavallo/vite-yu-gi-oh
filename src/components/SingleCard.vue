<script>
    export default{
        name: 'SingleCard'
    }
</script>

<template>
    <section class="single-card">
        <img src="" alt="card">
        <h4>[card-name]</h4>
        <p>[card-archetype]</p>
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