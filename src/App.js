import React from 'react';
import { Grid } from '@material-ui/core';
import movie from './api/movie';
import { Searchbar , Moviedeatail , Movielist} from './components';

class App extends React.Component{

    state = {
      movie:[],
      selectedmovie: null,
    }

    handleSubmit= async (searchword) => {
      const response = await movie.get('search',{
        params: {
          part:'snippet',
          maxResult: 5,
          key: '7a00dc759d7fa7b0dd5562f7431d6ced',
          q:searchword,
      }
      });

      this.setState({
        movie: response.data.items, selectedmovie: response.data.items[0]
      });
   
    }
    render(){
      const {selectedmovie , movie} = this.state;
      return(
         
          <Grid justify="center" container spacing={10}>
            <Grid item xs={12}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                <Searchbar onFormSubmit={this.handleSubmit} />
                </Grid>
                <Grid item xs={8}>
                 <Moviedeatail movie={selectedmovie} />
                </Grid>
                <Grid item xs={4}> 
                  <Movielist movie={movie} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      )
    }
}

export default App;
