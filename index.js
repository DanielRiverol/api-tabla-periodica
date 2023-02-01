require('dotenv').config();
const express = require("express");
const app = express();

app.set('PORT', process.env.PORT|| 4000)

app.get('/',(req,res)=>{
    res.json({"message": "Estás en el index"})
})
app.listen(app.get('PORT'),()=> console.log(`Server running on port http://localhost:${app.get('PORT')}`))