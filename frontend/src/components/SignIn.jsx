import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignInSchema } from "../utils/validationSchema";
import { Grid } from "@mui/material";
import AuthContext from "../context/AuthContext";

const defaultTheme = createTheme();

const SignIn = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = React.useState("");
  const authContext = React.useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;

    if (email && password) {
      setFeedback("Sign in successful! Redirecting to home page...");
      setTimeout(() => {
        authContext.login();
        navigate("/");
      }, 1500);
    } else {
      setFeedback("Please enter email and password.");
    }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{
        border: 'solid 1px #ccc',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
      }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In to your account
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
                  onChange={formik.handleChange}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {feedback && (
              <Typography color="success.main" variant="body2" align="center">
                {feedback}
              </Typography>
            )}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="text" onClick={() => navigate("/register")}>
                Don't have an account? Sign Up!
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
