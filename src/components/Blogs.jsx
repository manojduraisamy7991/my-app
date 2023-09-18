import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  maxWidth: 500,
  elevation:0,
  boxShadow:'none'
  
}));


export default function Blogs(props) {
const {title, field_photo_image_section, last_update} = props.data;
  return (
    <Item className='card' sx={{ my: 1, mx: 'auto', p: 0 }}>
              <Stack spacing={2} direction="row">
                <Stack>
                  <CardMedia
                    component="img"
                    sx={{ width: 181, height: 150, borderRadius: 8 }}
                    image={field_photo_image_section}
                    alt="Live from space album cover"
                  />
                </Stack>
                <Stack sx={{ minWidth: 0 }}>
                  <Typography noWrap variant='h6'>{title}</Typography>
                  <Typography noWrap variant='h7'>{last_update}</Typography>
                </Stack>
              </Stack>
            </Item>
  );
}
