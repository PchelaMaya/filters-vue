<script setup>
import './style.scss'
import { ref } from 'vue'
const tags = ref([
    {
        id: 1,
        name: 'Сайты'
    },
    {
        id: 2,
        name: 'Верстка'
    },
    {
        id: 3,
        name: 'Тильда'
    },
    {
        id: 4,
        name: 'Очень большой текст'
    },
    {
        id: 5,
        name: 'Веб разработка'
    },
    {
        id: 6,
        name: '123'
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
        <div class="tag" v-for="tag in tags">
            <p class="tag__text"> {{ tag.name }}</p>
        </div>
    </div>
</div>
</template>