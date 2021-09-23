<template>
  <div>
    <nuxt-link to="/jokes">Back To Jokes</nuxt-link>
    <h2>{{ joke }}</h2>
    <hr>
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import {getJokeById} from "./../../../api/jokes";
export default {
  data() {
    return {
      joke: {}
    };
  },
  created() {
    const fetchApi = async () => {
        let _id = this.$route.params.id
        const res = await getJokeById(_id);
        this.joke = res.joke;
    }
    fetchApi();
  }
};
</script>

<style>
</style>