import { useContext } from "react"
// Context
import DecodeContext from "../context/DecodeContext"
// MUI
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import FormControl from "@mui/material/FormControl"

export default function Form() {

  const { 
    encodeText, 
    setEncodeText, 
    setDecodeText 
  } = useContext(DecodeContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Implement decode function
    setDecodeText({test});
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField 
              id="encoded-text" 
              label="Encoded text" 
              variant="outlined"
              value={encodeText}
              onChange={(event) => setEncodeText(event.target.value)}
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