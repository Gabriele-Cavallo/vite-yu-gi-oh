<script>
    export default{
        name: 'Loader',    
    }
</script>

<template>
    <!-- Componente mostrato a schermo in attesa che tutte le card siano state 
        scaricate dell'API regolato dalla variabile loading in store.js -->
    <h2>LOADING....</h2>
</template>

<style scoper lang="scss">
h2{
    color: white;
    font-weight: bold;
    font-size: 35px;
    text-align: center;
}

</style>