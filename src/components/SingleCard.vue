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
        <img :src="singleCard.card_images[0].image_url_small" alt="card">
        <h4>{{ singleCard.name }}</h4>
        <p v-if="singleCard.archetype">{{ singleCard.archetype }}</p>
        <p v-else>{{ singleCard.type }}</p>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
.single-card{
            margin: 0 5px 10px;
            width: calc((100% / 5) - 10px);
            background-color: $primary-color;
            max-height: 600px;
            text-align: center;
            *{
                margin-bottom: 20px;
            }
            img{
                width: 100%;
                max-height: 500px;
            }
            h4{
                color: white;
                font-weight: bold;
                font-size: 20px;
                text-transform: uppercase;
            }
            p{
                font-size: 20px;
            }
        }

</style>