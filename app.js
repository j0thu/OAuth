const express = require('express');
const authRoutes = require('./routes/authRoutes');
const passportSetyp = require('./config/passport-setup')

const app = express();

//Set up view engine
app.set('view engine','ejs');

//Set Up Routes
app.use('/auth', authRoutes);



//Home Route
app.get('/', (req, res)=>{
    res.render('home');
})

app.listen(3000, ()=>{
    console.log('Server running on PORT 3000');
})

