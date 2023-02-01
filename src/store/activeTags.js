import { defineStore } from "pinia";

export const useCategoryStore = defineStore('categories', {
    state: () => ({
        categories: []
    }),
})
