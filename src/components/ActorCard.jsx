import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Item, itemMainStyle, cardWH, minWidth } from './MaterialMakeStyle';

export default function ActorCard(props) {

  const {picture, firstName,lastName, title} = props.data;
  
  return (
    <Item className='card' sx={itemMainStyle} key={props.key}>
              <Stack spacing={2} direction="row">
                <Stack>
                  <CardMedia
                    component="img"
                    sx={cardWH}
                    image={picture}
                    alt="Live from space album cover"
                  />
                </Stack>
                <Stack sx={minWidth}>
                  <Typography noWrap variant='h6'>{title+'. '+firstName}</Typography>
                  <Typography noWrap variant='h7'>{lastName}</Typography>
                </Stack>
              </Stack>
    </Item>
  );
}
