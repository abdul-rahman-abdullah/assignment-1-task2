const express= require('express');
const app =express();


app.use(express.static('public'));

app.use('/songs',require('./routes/songs'));


const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on PORT ${PORT}`));