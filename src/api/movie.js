import axios from 'axios';


export default axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params :{
        maxresult :6,
        API_KEY : '7a00dc759d7fa7b0dd5562f7431d6ced',
    },
});

