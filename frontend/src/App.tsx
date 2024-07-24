import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./components/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";
import Register from "./components/Register";
import ShowCourses from "./components/ShowCourses";
import CourseDetail from "./components/CourseDetail";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<CreateCourse />} />
          <Route path="/courses" element={<ShowCourses />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
