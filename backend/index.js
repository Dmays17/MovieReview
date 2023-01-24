const express=require('express')
const app= express()
const mysql2=require('mysql2')
const bodyParser=require('body-parser')
const cors= require('cors')

const db=mysql2.createConnection({
    
    host:'localhost',
    port:'3306',
    user:'root',
    password:'DDDm3max',
    database:'cruddatabase'
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('hello World')
})

app.get('/reviews',(req,res)=>{
    const reviewQ="SELECT * FROM movie_reviews"
    db.query(reviewQ,(err,data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})

app.post('/api/insert',(req,res)=>{

    const reviewQ= 
     "INSERT INTO movie_reviews (`movieName`,`movieReview`) VALUES (?)"
    
     const values=[
        req.body.movieName,
        req.body.movieReview,
    ]
    db.query(reviewQ,[values],(err,data)=>{
        if(err)return res.json(err)
        return res.json("Review was made")
        
    })  
})

app.delete('reviews/:id',(req,res)=>{
    const movieId=req.params.id
    const reviewQ="DELETE FROM movie_reviews WHERE id = ?"
    db.query(reviewQ,[movieId],(err,data)=>{
        if(err)return res.json(err)
        return res.json('Movie has been deleted')
    })

})

app.listen(3001,()=>{
    console.log("running on port 3001")
})