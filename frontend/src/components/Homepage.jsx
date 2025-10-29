import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Homepage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          mt: 8,
          border: "solid 1px #ccc",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        <Typography component="h1" variant="h3" gutterBottom>
          Welcome to my React User Registration App!
        </Typography>
        {isAuthenticated ? (
          <Typography variant="h6" color="text.secondary">
            You are logged in. You can now access protected content.
          </Typography>
        ) : (
          <>
            <Typography variant="h6" color="text.secondary">
              This is the homepage. Please log in or register to continue.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                sx={{ mr: 2 }}
                onClick={() => navigate("/signin")}
              >
                Sign In
              </Button>
              <Button variant="outlined" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Homepage;
