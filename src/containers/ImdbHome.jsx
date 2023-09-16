
import * as React from 'react';
// import PrimarySearchAppBar from '../components/Header';
// import MovieCards from '../components/MovieCards';
import PhotoGallery from '../components/PhotoGallery';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: 'center',
  color: theme.palette.text.secondary,boxShadow:'none'
}));

export default function ResponsiveGrid() {
  return (
<>
             {/* <PrimarySearchAppBar /> */}


    <Box sx={{ flexGrow: 1 }}>
    <PhotoGallery />
      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{boxShadow:'none'}}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={12} md={4} key={index} >
            <Item><MovieCards /></Item>
          </Grid>
        ))} */}
      {/* </Grid> */}
    </Box>
</>
  );
}
