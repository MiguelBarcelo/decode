// Components
import Header from './components/Header'
import Form from './components/Form'
import Decode from './components/Decode'
import Footer from './components/Footer'
// MUI 
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
// mui fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ width: '800px' }}>
        <Form />
        <Decode />
        <Footer />
      </Container>
    </>
  )
}

export default App
