import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '../components/NavBar/Navbar'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Flexmarket
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Loginpage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid justifyContent="center" container component="main" sx={{ height: '100vh' }}>

        <Grid position="absolute" item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
{/*             
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1">
                Enter your details
              </Typography>
            </Box> */}

            <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="fname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phno"
                label="Mobile Number"
                name="phno"
                type="tel"
                autoComplete="phno"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="cpassword"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item xs> 
                  <Link href="/login" variant="body2">
                  Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}