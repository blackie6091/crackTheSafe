const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "../")))
app.use('/users', express.static(path.join(__dirname, "../src/")))
  
app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:8000`)
});