<script>
    import AppHeader from './components/AppHeader.vue';
    import AppMainCardContainer from './components/AppMainCardContainer.vue';
    export default{
        components: {
            AppHeader,
            AppMainCardContainer
        }
    }
</script>

<template>
    <AppHeader></AppHeader>
    <main>
        <AppMainCardContainer></AppMainCardContainer>
    </main>
</template>

<style  lang="scss">
  @use './style/generic';

</style>