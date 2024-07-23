"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const auth_2 = require("../middleware/auth");
const dist_1 = require("@ankushch12/common/dist");
const router = express_1.default.Router();
router.get("/me", auth_2.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield db_1.Admin.findOne({ username: req.user.username });
        if (!admin) {
            return res.status(403).json({ msg: "Admin doesn't exist" });
        }
        res.json({ username: admin.username });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedInput = dist_1.signupInput.safeParse(req.body);
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
        const admin = yield db_1.Admin.findOne({ username });
        if (admin) {
            return res.status(403).json({ message: "Admin already exists" });
        }
        else {
            const obj = { username, password };
            const newAdmin = new db_1.Admin(obj);
            yield newAdmin.save();
            const token = jsonwebtoken_1.default.sign({ username, role: "admin" }, auth_1.SECRET, {
                expiresIn: "1h",
            });
            res.json({ message: "Admin created successfully", token });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedInput = dist_1.signupInput.safeParse(req.body);
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
        const admin = yield db_1.Admin.findOne({ username, password });
        if (admin) {
            const token = jsonwebtoken_1.default.sign({ username, role: "admin" }, auth_1.SECRET, {
                expiresIn: "1h",
            });
            res.json({ message: "Logged in successfully", token });
        }
        else {
            res.status(403).json({ message: "Invalid username or password" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.post("/courses", auth_2.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = new db_1.Course(req.body);
        yield course.save();
        res.json({ message: "Course created successfully", courseId: course.id });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.put("/courses/:courseId", auth_2.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield db_1.Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
        if (course) {
            res.json({ message: "Course updated successfully" });
        }
        else {
            res.status(404).json({ message: "Course not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.get("/courses", auth_2.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield db_1.Course.find({});
        res.json({ courses });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
exports.default = router;
