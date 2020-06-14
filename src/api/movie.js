import axios from 'axios';

export default axios.create({
    
    baseURL:'https://api.themoviedb.org/3/movie/550?api_key=7a00dc759d7fa7b0dd5562f7431d6ced',

    params: {
        part:'snippet',
        maxResult: 5,
        key: '7a00dc759d7fa7b0dd5562f7431d6ced'
    }
});
