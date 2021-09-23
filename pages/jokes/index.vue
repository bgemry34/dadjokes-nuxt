<template>
   <div>
       <SearchJoke v-on:searchJoke="searchJoke" />
       <p>Jokes:</p>
       <div v-for="joke in jokes" :key="joke.id">
           <Joke :joke="joke" :id="joke.id" />
       </div>
   </div>
</template>

<script>
import {fetchJokes} from '../../api/jokes'
export default {
    data(){
        return{
            jokes:[]
        }
    },
    head(){
        return{
            title:'Dad jokes',
            meta:[
                {
                    hid:"description",
                    name:"description",
                    content:"Best place to get corny dad joke"
                }
            ]
        }
    },
    methods:{
        async searchJoke(search = ''){
            const res = await fetchJokes(search);
            this.jokes = res.results
        }
    },
    created(){
        const fetchApi = async () =>{
            const res = await fetchJokes();
            if(res.status == 200)
            this.jokes = res.results
        }
        fetchApi();
    }
}
</script>

<style>

</style>