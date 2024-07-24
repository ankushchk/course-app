import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "./recoil/atoms";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { User } from "../types/types";

const Landing: React.FC = () => {
  const [user, setUser] = useRecoilState<User | null>(userState);
  const navigate = useNavigate();

  async function getAdminRouteMe() {
    const token = localStorage.getItem("token");
    if (token && token !== "null") {
      try {
        const res = await axios.get("http://localhost:3001/admin/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        if (data.username) {
          setUser({ username: data.username });
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }
  }

  useEffect(() => {
    getAdminRouteMe();
  }, []);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome Back! 🤩
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            We provide top-notch online courses designed to help you achieve
            your goals. Our expertly crafted courses are accessible, engaging,
            and packed with valuable content.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Come and Join NOW!!
          </Typography>
          {user ? (
            <Button
              onClick={() => navigate("/courses")}
              variant="contained"
              color="success"
            >
              View Purchased Courses
            </Button>
          ) : (
            <div></div>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default Landing;
