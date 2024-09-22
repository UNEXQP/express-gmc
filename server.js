const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRoutes');

app.use(express.static('public'));
function checkWorkingHours(req, res, next) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();
    
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next(); // Continue to the requested route
    } else {
        res.send('The website is only available during working hours (Monday to Friday, 9am to 5pm).');
    }
}

app.use(checkWorkingHours)

// Use the router for your routes
app.use('/', userRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
