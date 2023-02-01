<script setup>
import './style.scss'
import { ref } from 'vue'
import { useCategoryStore } from '@/store/activeTags'
const tags = ref([
    {
        id: 1,
        categories: 'Сайты'
    },
    {
        id: 2,
        categories: 'Верстка'
    },
    {
        id: 3,
        categories: 'Тильда'
    },
    {
        id: 4,
        categories: 'Очень большой текст'
    },
    {
        id: 5,
        categories: 'Веб разработка'
    },
    {
        id: 6,
        categories: '123'
    },
])
const storeCategory = useCategoryStore();
const isActivedTagsFilter = ref(false);
function isActivedFilter() { isActivedTagsFilter.value = !isActivedTagsFilter.value }
</script>
<template>
<div class="filters">
    <div class="filters__search">
        <button class="search__btn">
            <img src="@/assets/img/search.png">
        </button>
        <input class="search__input" type="text">
    </div>
    <div class="filters__tags">
        <a href="#!" @click="isActivedFilter" 
        :class="{'tags__all': true, 'active': !isActivedTagsFilter}">Все</a>
        <a href="#!" v-for="tag in tags"
        @click="isActivedFilter" 
        :class="{'tag': true, 'active': isActivedTagsFilter}"> {{ tag.categories }}</a>
    </div>
</div>
</template>