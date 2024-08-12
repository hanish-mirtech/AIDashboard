import React from 'react';
import { Typography, Container } from '@mui/material';

const NotAuthorised = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" color="error" gutterBottom>
        Access Denied
      </Typography>
      <Typography variant="body1">
        Please provide a valid token to access the library.
      </Typography>
    </Container>
  );
};

export default NotAuthorised;
