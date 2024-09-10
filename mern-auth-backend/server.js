const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3001;
const JWT_SECRET = "your_jwt_secret_key"; 


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/Login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));


const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const User = mongoose.model("User", userSchema);

const fileSchema = new mongoose.Schema({
    name: String,
    type: String,
    path: String,
    uploadedAt: { type: Date, default: Date.now }
});

const File = mongoose.model("File", fileSchema);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.post("/upload", upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        const newFile = new File({
            name: req.file.originalname,
            type: req.file.mimetype,
            path: req.file.path
        });

        await newFile.save();
        res.send("File uploaded successfully!");
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).send("Internal server error");
    }
});


app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("Email already exists.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).send("User created successfully");
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).send("Internal server error");
    }
});

// Route for login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send("Invalid email or password");
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.send("Success");
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).send("Internal server error");
    }
});

// Route for getting user info
app.get("/user", async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send("Unauthorized");
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).send("Unauthorized");
        }

        res.json({ user });
    } catch (err) {
        console.error("Get user error:", err);
        res.status(500).send("Internal server error");
    }
});

// Route for logout
app.post("/logout", (req, res) => {
    res.clearCookie('token');
    res.send("Logged out");
});

// Start the server
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});