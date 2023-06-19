import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or send it to the server
    console.log(formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container sx={{ marginTop: '5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
 }}>
      <Box>
        <Typography
          sx={{
            fontSize: '3rem',
            textAlign: 'center',
            '@media (max-width: 442px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          Ota yhteyttä!
        </Typography>
        </Box>
        <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '2rem',
          marginBottom: '2rem',
          width: '100%',
          maxWidth: '30rem',
        }}
      >
        <TextField
          label="Nimi"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Sähköposti"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Kirjoita viesti..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          marginBottom: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}
        >
          Lähetä!
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
