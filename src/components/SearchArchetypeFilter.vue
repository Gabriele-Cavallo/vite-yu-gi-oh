<script>
import { store } from '../store.js';

export default{
    name: 'SearchArchetypeFilter',
    data (){
        return{
            store,
        }
    },
}
</script>

<template>
    <section class="archetype-filter">
        <label for="archetype-select">Scegli l'archetipo</label>
        <select @change="$emit('filterCards')" v-model="store.filteredArchetype" id="archetype-select">
            <option value="default"></option>
            <option v-for="archetype in store.searchedArchetype" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </section>
</template>

<style scoped lang="scss">
section.archetype-filter{
    padding: 20px 0;
    *{
        margin-right: 10px;
        padding: 10px;
    }
}
</style>