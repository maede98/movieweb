import React from 'react';

import {Paper, TextField} from '@material-ui/core';


class Searchbar extends React.Component{
   state = {
       searchword:'',
   }

   handleChange = (event) => {
       this.setState({searchword: event.target.value });
   }

   handleSubmit = (event) => {
       const {searchword} = this.state;
       const {onFormSubmit} = this.props;

       onFormSubmit(searchword);

       event.preventDefault();

   }


    render(){
        return(
           <Paper elevation={6} style={{padding:'25px'}}>
               <form onSubmit={this.handleSubmit}>
                   <TextField fullwidth label="you can search here..." onChange={this.handleChange}/>
               </form>
           </Paper>
        )
    }
}

export default Searchbar;