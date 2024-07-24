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
  const [user, setUser] = useRecoilState<User | null>(userState);
  const navigate = useNavigate();

  async function getAdminRouteMe() {
    const token = localStorage.getItem("token");
    if (token && token !== "null") {
      try {
        const apiUrl = "https://api.alchemists.life/admin/me";
        const res = await axios.get(apiUrl, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = res.data;
        if (data.username) {
          console.log("Setting auth status and user");
          setAuthStatus(true);
          setUser({ username: data.username });
          localStorage.setItem(
            "user",
            JSON.stringify({ username: data.username })
          );
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    }
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    console.log("Saved User from localStorage:", savedUser);
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      console.log("Parsed User Data:", userData);
      setUser(userData);
      setAuthStatus(true);
    } else {
      getAdminRouteMe();
    }
  }, []);

  // Handle user logout
  const handleLogout = () => {
    console.log("Logging out user");
    localStorage.setItem("token", "null");
    localStorage.removeItem("user");
    setAuthStatus(false);
    setUser(null);
    navigate(0);
  };

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
              <Button color="error" variant="contained" onClick={handleLogout}>
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
