/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Grid } from '@mui/material';
import Blogs from './Blogs';
import {apiEndPoint} from '../helper/fetchUtils';


const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isEmpty,setisEmpty] =  useState(false)

  const fetchData = async () => {
    const response =   await fetch(`${apiEndPoint+page}` 
    
    // await fetch(`${apiEndPoint+page}&limit=10`
    , {
      headers: {
        'app-id': '6505e1370c3ef6842c2c19bd',
      },
    });
    const jsonData = await response.json();
    setData(prevData => [...prevData, ...jsonData.nodes]);
    if(jsonData.data.length ===0)setisEmpty(true)
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Grid>
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <InfiniteScroll
          dataLength={data.length}
          next={() => setPage(prevPage => prevPage + 1)}
          hasMore={true}
          loader={<h4 style={{textAlign:'center'}}>{isEmpty?'Has no more data.':'Post Loading...'}</h4>}
          endMessage={<p>No more items</p>}
        >
          {data.map(user => (
            <Blogs data={user.node}/>
          ))}
        </InfiniteScroll>
      </Box>
    </Grid>
  );
};

export default InfiniteScrollComponent;

