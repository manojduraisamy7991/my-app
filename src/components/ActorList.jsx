/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Grid } from '@mui/material';
import ActorCard from './ActorCard';
import {apiEndPoint, headers} from '../helper/fetchUtils';
import { hidden } from './MaterialMakeStyle';

const ActorList = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isEmpty,setisEmpty] =  useState(false)

  useEffect(() => {
    getActors();
  }, [page]);

  const getActors = async () => {
    try{
    const response = await fetch(`${apiEndPoint+page}&limit=10`, {headers});
    const jsonData = await response.json();
    setData(prevData => [...prevData, ...jsonData.data]);
    if(jsonData.data.length ===0)setisEmpty(true)
    }catch(error){
      console.log( error,'Something Went Wrong')
    }
  };

  return (
    <Grid>
      <Box sx={hidden}>
        <InfiniteScroll
          dataLength={data.length}
          next={() => setPage(prevPage => prevPage + 1)}
          hasMore={true}
          loader={<h4 className='text-algin'>{ isEmpty ? 'Has no more actor.' : 'Actor Loading...' }</h4> }
          endMessage={<p>No more actor</p>}
        >
          {data.map(user => (
            <ActorCard data={user} key={user.id}/>
          ))}
        </InfiniteScroll>
      </Box>
    </Grid>
  );
};

export default ActorList;

