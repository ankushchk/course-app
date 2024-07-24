import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { coursesState } from "./recoil/atoms";
import Navbar from "./Navbar";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CourseProps {
  id: string;
  title: string;
  description: string;
  imageLink: string;
  price: number;
}

const ShowCourses: React.FC = () => {
  const [courses, setCourses] = useRecoilState(coursesState);

  async function getCourses() {
    const res = await axios.get("https://api.alchemists.life/admin/courses/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = res.data;
    setCourses(data.courses);
  }

  useEffect(() => {
    getCourses();
  }, []);

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  return (
    <>
      <Navbar />
      <Typography
        variant="h4"
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        Your Courses 📕
      </Typography>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {courses.map((c) => (
          <Course
            key={c._id}
            id={c._id}
            title={c.title}
            description={c.description}
            imageLink={c.imageLink}
            price={c.price}
          />
        ))}
      </div>
    </>
  );
};

// Use the CourseProps interface for props
function Course({ id, title, description, imageLink, price }: CourseProps) {
  const navigate = useNavigate();
  console.log(id);

  const handleClick = () => {
    navigate(`/course/${id}`);
  };

  return (
    <div onClick={handleClick}>
      <Container component="main" maxWidth="xs" style={{ marginTop: "10px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imageLink}
              alt="course image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography color="primary">₹ {price}</Typography>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default ShowCourses;
