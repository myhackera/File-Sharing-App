const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// cors
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
    // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
  }

PORT = process.env.PORT || 3000;

const getConnect = require('./config/db')
getConnect();

app.use(cors(corsOptions))
app.use(express.static('public'));
app.use(express.json());


// setting template Engine in views folder
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})