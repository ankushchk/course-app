"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const admin_1 = __importDefault(require("./routes/admin"));
const user_1 = __importDefault(require("./routes/user"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = "3000";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/admin", admin_1.default);
app.use("/users", user_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
mongoose_1.default
    .connect("mongodb+srv://kush:OjjFMsWTGNnHrhRv@cluster0.criyabw.mongodb.net", {
    dbName: "courses",
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log("PORT:", port);
});
