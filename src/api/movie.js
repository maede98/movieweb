import axios from 'axios';


export default axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/550?api_key=7a00dc759d7fa7b0dd5562f7431d6ced',
    params :{
        API_KEY : '7a00dc759d7fa7b0dd5562f7431d6ced',
    },
});

