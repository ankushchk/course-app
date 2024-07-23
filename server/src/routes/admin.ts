import express from "express";
import { Course, Admin } from "../db";
import jwt from "jsonwebtoken";
import { SECRET } from "../middleware/auth";
import { AuthenticatedRequest } from "../types/types";
import { authenticateJwt } from "../middleware/auth";
import { z } from "zod";
import { signupInput, loginInput } from "@ankushch12/common/dist";

const router = express.Router();

router.get("/me", authenticateJwt, async (req: AuthenticatedRequest, res) => {
  try {
    const admin = await Admin.findOne({ username: req.user.username });
    if (!admin) {
      return res.status(403).json({ msg: "Admin doesn't exist" });
    }
    res.json({ username: admin.username });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

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
    const admin = await Admin.findOne({ username });
    if (admin) {
      return res.status(403).json({ message: "Admin already exists" });
    } else {
      const obj = { username, password };
      const newAdmin = new Admin(obj);
      await newAdmin.save();
      const token = jwt.sign({ username, role: "admin" }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Admin created successfully", token });
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
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username, role: "admin" }, SECRET, {
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

router.post("/courses", authenticateJwt, async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json({ message: "Course created successfully", courseId: course.id });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/courses/:courseId", authenticateJwt, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.courseId,
      req.body,
      { new: true }
    );
    if (course) {
      res.json({ message: "Course updated successfully" });
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/courses", authenticateJwt, async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
