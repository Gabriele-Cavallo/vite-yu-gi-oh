<script>
    export default{
        name: 'AppMainCardContainer'
        
    }
</script>

<template>
    <section class="card-container d-flex jst-cntr">
        <div class="card-wrapper d-flex d-wrap">
            
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