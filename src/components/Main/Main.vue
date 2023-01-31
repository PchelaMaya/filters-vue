<script setup>
import { ref } from 'vue'
import './style.scss'
const boardItems = ref([
    {
        avatar: 'src/assets/img/avatar-1.png',
        icon: 'src/assets/img/icons-micro.png',
        data: '30.01.2023',
        time: '20',
        title: 'Аудиочат #41',
        subtitle: 'Еженедельный аудиочат с командой Krona',
        tags: ''
    },
    {
        avatar: 'src/assets/img/avatar-2.png',
        icon: 'src/assets/img/icons-text.png',
        data: '23.01.2023',
        time: '65',
        title: 'Вдохновение и разбор сайтов | Тренируем насмотренность #3',
        subtitle: 'Продолжаем рубрику с разбором классных сайтов и вдохновляемся разными фишечками, а заодно тренируем',
        tags: ''
    },
    {
        avatar: 'src/assets/img/avatar-3.png',
        icon: 'src/assets/img/icons-video.png',
        data: '30.12.2022',
        time: '5',
        title: 'Красивое оформление в Ноушен',
        subtitle: 'Создаём из обычной страницы рай для визуала',
        tags: ''
    },
    {
        avatar: 'src/assets/img/avatar-1.png',
        icon: 'src/assets/img/icons-text.png',
        data: '10.01.2022',
        time: '20',
        title: 'Практикум по фестивальным сайтам. Вычитка текста и картинок',
        subtitle: 'На данном практикуме обсудили, как можно вычитывать текст, чтобы сделать его интересным, как можно визуализировать текст',
        tags: ''
    },
    {
        avatar: 'src/assets/img/avatar-2.png',
        icon: 'src/assets/img/icons-video.png',
        data: '10.01.2022',
        time: '20',
        title: 'Практикум по фестивальным сайтам. Вычитка текста и картинок',
        subtitle: 'На данном практикуме обсудили, как можно вычитывать текст, чтобы сделать его интересным',
        tags: ''
    },
])
</script>
<template>
    <div class="board">
        <div class="board__item" v-for="boardItem in boardItems">
            <div class="item__content">
                <div class="item__avatar" :style="{ backgroundImage: `url(${boardItem.avatar})`}"></div>
                <div class="item__icon" :style="{ backgroundImage: `url(${boardItem.icon})`}"></div>
                <div class="item__times">
                    <p class="item__data">{{ boardItem.data }}</p>
                    <p class="item__time">{{ boardItem.time }} минут</p>
                </div>
            </div>
            <div class="item__text">
                <h2 class="item__text-title">{{ boardItem.title }}</h2>
                <p class="item__text-subtitle">{{ boardItem.subtitle }}</p>
            </div>
        </div>

    </div>
</template>