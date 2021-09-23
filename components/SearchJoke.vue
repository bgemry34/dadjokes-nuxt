<template>
  <div>
      <label for="">Search joke:</label>
      <input class="search-joke-form" type="text"
      value=""
      v-model="search"
      placeholder="Insert to find joke...."
      v-on:input="toSearch"
      />
  </div>
</template>

<script>
import {debounce} from 'lodash';

export default {
    data(){
        return{
            search:''
        }
    },
    methods:{
        toSearch: debounce(function (){
            this.$emit('searchJoke', this.search);
        }, 1500),
    }
}
</script>

<style>
    .search-joke-form{
        width: 100%;
        font-size: 1.25rem;
    }
    .search-joke-form:-moz-placeholder {
        margin: 5px;
    }
    .search-joke-form::placeholder{
        padding: 5px;
    }
</style>