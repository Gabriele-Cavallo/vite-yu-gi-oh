import { reactive } from "vue";

export const store = reactive({
    cardsList: [],
    loading: false,
    searchedArchetype: [],
    filteredArchetype: '',
});