// export default Add
import React from 'react'
import {useState}from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Add(){
    const navigate=useNavigate()
const [movie,setMovie]=useState({
   movieName:"",
   movieReview:"",
})

const handleChange=(e)=>{
    setMovie(prev=>({...prev,[e.target.name]:e.target.value}))
}

const handleClick=async(e)=>{
    e.preventDefault()
    try{
        await axios.post('http://localhost:3001/api/insert',movie)  
        navigate('/')
    }catch(err){
        console.log(err)
    }
}
console.log (movie)
    return(
        <div className='form'>
            <h1>Add New Review</h1>
            <input type="text" placeholder='Name Here' onChange={handleChange} name="movieName"/>
            <input type="text" placeholder='Review Here' onChange={handleChange} name="movieReview"/>
        <button onClick={handleClick}>Add</button>
        </div>
    )
}
 export default Add