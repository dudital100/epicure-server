const mongoose = require('mongoose');
const url = process.env.DB_HOST;
const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
};

mongoose 
    .connect(url, options)
    .then(() => console.log('Connected to DB'))
    .catch((err:any) => console.log(`connection error: ${err}`));