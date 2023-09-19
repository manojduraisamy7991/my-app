import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const flexGrow = { flexGrow: 1 }
const hidden = { flexGrow: 1, overflow: 'hidden' }
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  maxWidth: 500,
  elevation:0,
}));
const itemMainStyle = { my: 1, mx: 'auto', p: 0 ,  borderRadius:'23px'}
const cardWH = { width: 181, height: 150, borderRadius: 6 }
const minWidth =  { minWidth: 0 }

export {flexGrow,hidden,Item, itemMainStyle, cardWH, minWidth}