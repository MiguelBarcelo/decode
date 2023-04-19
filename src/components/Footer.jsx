import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import CodeIcon from "@mui/icons-material/Code"

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Miguel Barceló" icon={<CodeIcon />} />
      </BottomNavigation>
    </Box>
  )
}