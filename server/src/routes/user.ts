import express from "express";
import { User, Course } from "../db";
import jwt from "jsonwebtoken";
import { SECRET } from "../middleware/auth";
import { authenticateJwt } from "../middleware/auth";
import { AuthenticatedRequest } from "../types/types";
import { signupInput } from "@ankushch12/common/dist";

const router = express.Router();

// User routes
router.post("/signup", async (req, res) => {
  const parsedInput = signupInput.safeParse(req.body);
  if (!parsedInput.success) {
    const formattedErrors = parsedInput.error.issues
      .map((issue) => {
        return `${issue.path.join(".")} - ${issue.message}`;
      })
      .join(", ");

    res.json({
      error: formattedErrors,
    });
    return;
  }

  const { username, password } = parsedInput.data;

  try {
    const user = await User.findOne({ username });
    if (user) {
      res.status(403).json({ message: "User already exists" });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ username, role: "user" }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "User created successfully", token });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const parsedInput = signupInput.safeParse(req.body);
  if (!parsedInput.success) {
    const formattedErrors = parsedInput.error.issues
      .map((issue) => {
        return `${issue.path.join(".")} - ${issue.message}`;
      })
      .join(", ");

    res.json({
      error: formattedErrors,
    });
    return;
  }

  const { username, password } = parsedInput.data;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: "user" }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/courses", authenticateJwt, async (req, res) => {
  try {
    const courses = await Course.find({ published: true });
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post(
  "/courses/:courseId",
  authenticateJwt,
  async (req: AuthenticatedRequest, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (course) {
        const user = await User.findOne({ username: req.user.username });
        if (user) {
          user.purchasedCourses.push(course._id);
          await user.save();
          res.json({ message: "Course purchased successfully" });
        } else {
          res.status(403).json({ message: "User not found" });
        }
      } else {
        res.status(404).json({ message: "Course not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.get(
  "/purchasedCourses",
  authenticateJwt,
  async (req: AuthenticatedRequest, res) => {
    try {
      const user = await User.findOne({ username: req.user.username }).populate(
        "purchasedCourses"
      );
      if (user) {
        res.json({ purchasedCourses: user.purchasedCourses || [] });
      } else {
        res.status(403).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default router;
