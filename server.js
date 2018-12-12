const express = require('express');

const app = express();

app.use(express.static('public'))

app.listen(process.envPORT|| 3000, ()=>{
    console.log("All is ok");
})

app.get('/newpage', ()=>{
    res.send("this is a new page");
})