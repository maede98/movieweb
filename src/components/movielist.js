import React from 'react';
import { Grid } from '@material-ui/core';
import Movieitem from './Movieitem';


const Movielist = ({ movie }) => {
    const ListOfMovies = movie.map((movie,id)=> <Movieitem key={id} movie={movie} /> )
    return (
        <Grid container spacing={10}>
            {ListOfMovies}
        </Grid>
    )

}

export default Movielist;