<template>
<div>
    <h1>Listado de Posts</h1> 
    <ul>
        <li v-for="post in posts" :key="post.id">
        <router-link :to="{name: 'detail', params: {id: post.id}}">{{ post.title }}</router-link>
        </li>
    </ul>
</div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService';
import { onMounted } from "vue";

const postService = new PostService()
const posts = postService.getPosts()

onMounted(async() => {   
    await postService.fetchAll()
})
   
</script>

<style scoped>

</style>
