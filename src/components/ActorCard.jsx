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
}));

export default function ActorCard(props) {
  const {picture, firstName,lastName, title} = props.data;
  return (
    <Item className='card' sx={{ my: 1, mx: 'auto', p: 0 ,  borderRadius:'23px'}}>
              <Stack spacing={2} direction="row">
                <Stack>
                  <CardMedia
                    component="img"
                    sx={{ width: 181, height: 150, borderRadius: 6 }}
                    image={picture}
                    alt="Live from space album cover"
                  />
                </Stack>
                <Stack sx={{ minWidth: 0 }}>
                  <Typography noWrap variant='h6'>{title+'. '+firstName}</Typography>
                  <Typography noWrap variant='h7'>{lastName}</Typography>
                </Stack>
              </Stack>
    </Item>
  );
}
