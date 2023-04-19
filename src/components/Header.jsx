import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
          Decode App
        </Typography>
      </AppBar>
    </Box>
  )
}