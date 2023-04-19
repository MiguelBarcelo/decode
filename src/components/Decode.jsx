import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

export default function Decode() {
  return (
    <Box sx={{ marginTop: '20px' }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Decoded text
              </Typography>
              <Typography variant="body1">
                ...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}