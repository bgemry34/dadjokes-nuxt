
import axios from 'axios';

export const fetchJokes = async (search = '') => {
    try{
        const res = await axios.get(`https://icanhazdadjoke.com/search?term=`+search, {
            headers: {
                Accept: "application/json"
            }
            });
        const {data} = res;
        return data;
    }catch(error){  
        return [];
    }
}

export const getJokeById = async (id = '') => {
    try{
        const res = await axios.get(`https://icanhazdadjoke.com/j/`+id, {
            headers: {
                Accept: "application/json"
            }
            });
        const {data} = res;
        return data;
    }catch(error){  
        return [];
    }
}
