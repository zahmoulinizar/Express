const express = require('express')
const app = express()
const chektime = require('./middleware')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(chektime)


app.get('/' , (req , res)=>{
    res.render('Home')
})
app.get('/services' , (req , res)=>{
    res.render('Services')
})
app.get('/contact' , (req , res)=>{
    res.render('Contact')
})


app.listen(4000)