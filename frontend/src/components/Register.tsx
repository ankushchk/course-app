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
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://api.alchemists.life/admin/signup", {
        username: email,
        password: password,
      });
      const data = res.data;
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/add");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      const response = error.response?.data;
      if (response?.error) {
        setError(response.error);
      } else if (response?.message) {
        setError(response.message);
      } else {
        setError("An unexpected error occurred.");
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
          Register To access Courses 😇
        </Typography>
        <Card style={{ width: "400px" }}>
          <CardContent>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleRegister}
            >
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
                value={email}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
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
              >
                Register
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Login"}
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

export default Register;
