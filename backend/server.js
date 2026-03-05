require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt')
const rateLimit = require('express-rate-limit');
const path = require("path");


const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});

const getUserFromDatabase = async (username) => {
    if(username === process.env.DB_USER){
        const passwordHash = await bcrypt.hash(process.env.DB_PASS, 10)
        return {
            username: process.env.DB_USER,
            passwordHash: passwordHash
        }
    }
    return null
}

app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;
    const user = await getUserFromDatabase(username)
    if (user && await bcrypt.compare(password, user.passwordHash)) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.use(express.static(path.join(__dirname,"../frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});