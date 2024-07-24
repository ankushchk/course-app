import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authState, userState } from "./recoil/atoms";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { User } from "../types/types";

const Navbar: React.FC = () => {
  const [authStatus, setAuthStatus] = useRecoilState(authState);
  const [user, setUser] = useRecoilState<User | null>(userState); // Updated state to match type
  const navigate = useNavigate();

  async function getAdminRouteMe() {
    const token = localStorage.getItem("token");
    if (token && token !== "null") {
      const res = await axios.get("http://localhost:3000/admin/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = res.data;
      if (data.username) {
        setAuthStatus(true);
        setUser({ username: data.username });
        localStorage.setItem("user", JSON.stringify({ username: data.username }));
      }
    }
  }

  // Load user data from localStorage when the component mounts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setAuthStatus(true);
    } else {
      getAdminRouteMe();
    }
  }, []);

  // Handle user logout
  const handleLogout  = () =>  {
    localStorage.setItem("token", "null");
    localStorage.removeItem("user");
    setAuthStatus(false);
    setUser(null);
    navigate(0);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            component="div"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Courses
          </Typography>
          {authStatus ? (
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ margin: "auto", padding: "auto" }}
              >
                Welcome! <b>{user?.username}</b>
              </Typography>
              <Button
                color="error"
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Container
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "10px",
              }}
            >
              <Button
                color="success"
                variant="contained"
                onClick={() => navigate("/login")}
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              <Button
                color="success"
                variant="contained"
                style={{ marginRight: "10px" }}
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Container>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
