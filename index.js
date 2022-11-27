const express = require('express');
const session = require('express-session');
const passport = require('passport');
const database = require('./configs/db');
const authRouter = require('./routes/auth');
const taskRouter = require('./routes/task.routes');
const userRouter = require('./routes/user.routes');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json());




app.get('/logout', (req, res) => {
    req.logout();
    res.send('Goodbye!');
});




app.get('/', (req, res) => {
    return res.send({
        message: 'Welcome to my blog API',
        
    });
});




app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    database();
    console.log(`Listening on port http://localhost:${PORT}`);
});