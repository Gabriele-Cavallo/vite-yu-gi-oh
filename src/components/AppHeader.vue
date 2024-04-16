<script>
    export default{
        name: 'AppHeader'
    }
</script>

<template>
    <header>
        <!-- Sezione header che contiene logo e titolo -->
        <div class="title d-flex algn-cntr">
            <img src="../assets/img/yugioh-logo.png" alt="logo">
            <h1>Yu-Gi-Oh Api</h1>
        </div>
    </header>
</template>

<style scoped lang="scss">

header{
    max-height: 100px;
    padding: 0 40px;
    .title{
        gap: 20px;
        img{
            height: 80px;
        }
        h1{
            font-size: 40px;
        }
    }
}

</style>