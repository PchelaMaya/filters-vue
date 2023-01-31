<script setup>
import './style.scss'
import { ref } from 'vue'
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
        <a href="#!" class="tags__all">Все
            <img class="tags__all--img" src="@/assets/img/close.png">
        </a>
        <div class="tag" v-for="tag in tags">
            <a href="#!" class="tag__text"> {{ tag.categories }}</a>
        </div>
    </div>
</div>
</template>