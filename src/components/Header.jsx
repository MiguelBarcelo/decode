import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Header() {
  return (
    <AppBar position='static' sx={{ marginBottom: '20px' }}>
      <Toolbar>
        <LockOpenIcon sx={{ mr: 1 }} />
        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
          Decode App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}