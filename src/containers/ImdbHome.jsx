
import * as React from 'react';
import PhotoGallery from '../components/PhotoGallery';

export default function ResponsiveGrid() {
  return (
          <>
         <PhotoGallery />
          </>
  );
}
    {/* <Stack spacing={2} direction="row" style={{ borderRadius:11,  textAlign: 'inherit',}}>
         <CardMedia
        component="img"
        sx={{ width: 181, height:150 , borderRadius:8}}
        image={img}
        alt="Live from space album cover"
      />
          <Box sx={{ maxWidth: 400 }}>
          <Typography variant='h5' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{message}</Typography>
          <Typography variant='h6' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{message}</Typography>
        </Box>
        </Stack> */}