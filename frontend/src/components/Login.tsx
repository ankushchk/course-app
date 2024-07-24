import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
} from "@mui/material";
import Navbar from "./Navbar.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://api.alchemists.life/admin/login", {
        username: email,
        password: password,
      });

      const { token } = res.data;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/add");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const data = err.response.data;
        if (data.error) {
          setError(data.error); // Set the error message
        } else if (data.message) {
          setError(data.message);
        } else {
          setError("An unexpected error occurred.");
        }
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="xs" style={{ marginTop: "100px" }}>
        <Typography
          variant="h5"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          Login to admin dashboard
        </Typography>
        <Card style={{ width: "400px" }}>
          <CardContent>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
