import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export default function Form() {
  return (
    <Paper elevation={0}>
      <form>
        <TextField 
          id="encoded-text" 
          label="Encoded text" 
          variant="outlined"
        ></TextField>
        <Button variant="contained">Decode</Button>
      </form>
    </Paper>
  )
}