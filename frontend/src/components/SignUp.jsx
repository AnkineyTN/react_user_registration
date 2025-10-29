import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useFormik } from 'formik';
import { SignupSchema } from '../utils/validationSchema'; 
import { useRegisterUser } from '../hooks/useAuth';

const defaultTheme = createTheme();

const SignUp = () => {
  const mutation = useRegisterUser();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  const customFormikHandleChange = (e) => {
    if (mutation.isError) {
      mutation.reset();
    }
    formik.handleChange(e);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{
        border: 'solid 1px #ccc',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create new account!
          </Typography>
          
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item size={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={customFormikHandleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item size={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formik.values.password}
                  onChange={customFormikHandleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
            </Grid>
            {mutation.isError && (
              <Typography color="error" align="center" sx={{ mt: 2 }}>
                {mutation.error.response?.data?.message || mutation.error.message || 'An error occurred during registration.'}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? 'Signing up...' : 'Sign up'}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;