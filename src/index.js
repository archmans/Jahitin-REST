require('dotenv').config();
const PORT = 4000;
const express = require('express');
const cors = require('cors');

const usersRoutes = require('./routes/users');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const manageRoutes = require('./routes/manage');
const verifyRoutes = require('./routes/verifyAuth');
const logoutRoutes = require('./routes/logout');
const subscriptionRoutes = require('./routes/subscription');

const middlewareLogRequest = require('./middleware/logs');
const middlewareAuth = require('./middleware/authValidation');
const upload = require('./middleware/multer');

const app = express();
app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());
app.use(express.static('public/images'));
app.use("/verify", verifyRoutes);
app.use("/users", usersRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/manage", middlewareAuth, manageRoutes);
app.use("/logout", middlewareAuth, logoutRoutes);
app.use("/subscription", subscriptionRoutes);

app.post("/upload", upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload success',
    })
})
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});