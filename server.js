const express = require('express');

const app = express();

app.use(express.static('public'))

app.listen(process.env.PORT|| 3000, ()=>{
    console.log("All is ok");
})

app.get('/newpage', (req,res)=>{
    res.send("this is a new page");
})