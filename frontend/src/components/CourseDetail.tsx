import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { coursesState } from "./recoil/atoms";
import { courseByIdState } from "./recoil/selector";
import { Course } from "../types/types";
import Navbar from "./Navbar";
import {
  Card,
  CircularProgress,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetail: React.FC = () => {
  const [courses, setCourses] = useRecoilState(coursesState);
  let { courseId } = useParams<{ courseId: string }>();
  // Ensure courseId is defined before using it
  const course = courseId
    ? useRecoilValue(courseByIdState(courseId))
    : undefined;

  useEffect(() => {
    async function getCourses() {
      const res = await axios.get("http://api.alchemists.life/admin/courses/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setCourses(res.data.courses);
    }
    getCourses();
  }, [setCourses]);

  // const course = getCourseById(courseId);

  // let course = null;
  // for (let i = 0; i < courses.length; i++) {
  //   if (courses[i]._id === courseId) [(course = courses[i])];
  // }

  if (!course) {
    return <CircularProgress />;
  }

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        {course ? (
          <CourseCard course={course} />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Typography>Course ID not Found!</Typography>
          </div>
        )}
        <UpdateCourseCard
          courses={courses}
          course={course}
          setCourses={setCourses}
        />
      </div>
    </>
  );
};

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <Container style={{ paddingTop: "10px" }}>
      <Card
        style={{
          display: "flex",
          margin: "auto",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="450"
            image={course.imageLink}
            alt={course.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Rs. {course.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

interface UpdateCourseCardProps {
  course: Course;
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

function UpdateCourseCard({
  course,
  courses,
  setCourses,
}: UpdateCourseCardProps) {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [price, setPrice] = useState<number>(course.price);
  const [imgURL, setImgURL] = useState(course.imageLink);

  useEffect(() => {
    setTitle(course.title);
    setDescription(course.description);
    setPrice(course.price);
    setImgURL(course.imageLink);
  }, [course]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    await axios.put(
      "http://api.alchemists.life/admin/courses/" + course._id,
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

    const updatedCourses = [...courses];
    const index = updatedCourses.findIndex((c) => c._id === course._id);
    if (index !== -1) {
      updatedCourses[index] = {
        ...course,
        title,
        description,
        imageLink: imgURL,
        price,
      };
    }
    setCourses(updatedCourses);
  }

  return (
    <div>
      <Container component="main" maxWidth="xs" style={{ marginTop: "50px" }}>
        <Typography
          variant="h5"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          Update Course
        </Typography>
        <Card style={{ width: "400px" }}>
          <CardContent>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={title}
                label="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={description}
                label="Description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={imgURL}
                label="Image Url"
                type="text"
                onChange={(e) => setImgURL(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={price}
                label="Price"
                type="number"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleUpdate}
              >
                Update Course
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default CourseDetail;
