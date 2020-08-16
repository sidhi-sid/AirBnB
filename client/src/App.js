import React from 'react';
import './App.css';
import Button from './component/button';
import Header from './component/header';
import { Grid , Typography} from '@material-ui/core';

import PictureCard from './component/pictureCard';
function App() {
  return (
    <div>
    <Header/>
    <Grid style={{ marginLeft:25, marginRight:25 }}>
        <Grid container style={{ marginTop:40 }}>
        <Grid item xs={12} sm={6} md={6}>
        <Typography style={styles.title}  variant={"h2"}>
          You don't need to go far to find what matters.
        </Typography>
        </Grid>
        </Grid>
    <Grid container spacing={2} style={{marginTop:20}}>
      <Grid item sm={3}>
        <PictureCard title={"Nearby Getaways"} description={"qwerty"}/>
      </Grid>
      <Grid item sm={3}>
        <PictureCard title={"Online Experience"}/>
      </Grid>
      <Grid item sm={3}>
        <PictureCard title={"Entire Homes"}/>
      </Grid>
      <Grid item sm={3}>
        <PictureCard/>
      </Grid>
    </Grid>
    </Grid>
    </div>   
  );
};

const styles={
  title: {
    color: "#3f51b5",
},
};





export default App;
