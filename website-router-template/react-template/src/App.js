import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import './App.css'
import { createTheme } from '@mui/material/styles';

import {
  Routes, Route
} from 'react-router-dom'
import { Container } from "@mui/material";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import Contact from "./components/Contact/Contact";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App;
