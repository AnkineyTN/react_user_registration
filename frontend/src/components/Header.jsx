import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            RegistrationApp
          </Link>
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          {isAuthenticated ? (
            <>
              <Typography sx={{ mr: 2, alignSelf: "center" }}>
                Welcome!
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link
                  to="/signin"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Sign In
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/signup"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
