const express = require('express');
const path = require('path');
const router = express.Router();




router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'about.html'))
   ;
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'))
   
});

router.get('/services', (req, res) => {

    res.send('Our services include...');
});

router.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.end(`Hello ${name}`);
});

module.exports = router;
