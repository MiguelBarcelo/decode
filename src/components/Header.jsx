import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <AppBar position='static' sx={{ marginBottom: '20px' }}>
      <Toolbar>
        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
          Decode App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}