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
            </Paper>
        </React.Fragment>
    )
}

export default Moviedeatail;
