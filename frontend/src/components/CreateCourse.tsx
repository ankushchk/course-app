import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Button,
} from "@mui/material";
import Navbar from "./Navbar";
import axios from "axios";

const CreateCourse: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleAddCourse = async () => {
    // e.preventDefault();
    await axios.post(
      "http://api.alchemists.life/admin/courses",
      {
        title: title,
        description: description,
        imageLink: imgURL,
        price: price,
        published: new Date(),
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    alert("course added!");
  };

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="xs" style={{ marginTop: "50px" }}>
        <Typography
          variant="h5"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          Add a new Course 🚀
        </Typography>
        <Card style={{ width: "400px" }}>
          <CardContent>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                type="text"
                fullWidth
                name="Course Name"
                label="Course Name"
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Description"
                label="Description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Image URL"
                label="Image URL"
                type="text"
                onChange={(e) => setImgURL(e.target.value)}
              />
              <TextField
                type="number"
                margin="normal"
                required
                fullWidth
                name="Price"
                label="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAddCourse}
              >
                Add Course
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default CreateCourse;
