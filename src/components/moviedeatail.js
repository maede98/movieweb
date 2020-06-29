import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const Moviedeatail = ({movie}) => {

if(!movie) return <div>loading...</div>

    return (
        <React.Fragment>
            <Paper elevation={6} style={ {height:'70%'} } >
            <iframe frameBorder="0" height="100%" width="100%" title="movies" src="..." />
            </Paper>
            <Paper elevation={6} style={ {padding:'16px'} } >
            <Typography variant="h4"> {movie.title} - {movie.channelTitle} </Typography>
            <Typography variant="subtitle2"> {movie.description} </Typography>
            </Paper>
        </React.Fragment>
    )
}

export default Moviedeatail;
