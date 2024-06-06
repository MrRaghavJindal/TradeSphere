const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/E-Commerce")

require('dotenv').config();
const name = process.env.name;
const password = process.env.password;
const dbname = process.env.dbname;
mongoose.connect(`mongodb+srv://${name}:${password}@${dbname}.niy3xwt.mongodb.net/?retryWrites=true&w=majority&appName=${dbname}`)