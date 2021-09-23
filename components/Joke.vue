<template>
    <div class="joke-container">
        <nuxt-link :to="'/jokes/' + id">
        <p>{{joke.joke}}</p>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props:["joke", "id"]
}
</script>

<style>
 .joke-container{
     padding: 5px;
     border: 1px solid #95a5a6;
     margin: 10px 0px;
 }
</style>