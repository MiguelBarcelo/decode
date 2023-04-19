import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import FormControl from "@mui/material/FormControl"

export default function Form() {
  return (
    <form>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField 
              id="encoded-text" 
              label="Encoded text" 
              variant="outlined"
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Button variant="contained">Start</Button>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  )
}