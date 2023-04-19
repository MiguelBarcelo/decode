import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import CodeIcon from "@mui/icons-material/Code"

export default function Footer() {
  return (
    <Paper sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0
    }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Miguel Barceló" icon={<CodeIcon />} />
      </BottomNavigation>
    </Paper>
  )
}