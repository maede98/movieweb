import React from 'react';

import { Grid } from '@material-ui/core';
import movie from './api/movie';

import {searchbar,moviedeatail} from './components';


class App extends React.Component{

    render(){
      return(
         
          <Grid justify="center" container spacing={16}>
            <Grid item xs={12}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                <searchbar></searchbar>
                </Grid>
                <Grid item xs={8}>
                 <moviedeatail></moviedeatail>
                </Grid>
                <Grid item xs={4}> 
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      )
    }
}

export default App;
