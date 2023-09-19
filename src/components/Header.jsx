import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { flexGrow } from './MaterialMakeStyle';
import './style.css'

export default function Header() {
  return (
    <Box sx={flexGrow}>
      <AppBar position='static' color='success' className='app-border-radius'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={flexGrow} className='text-algin'>
            Top Actors List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
