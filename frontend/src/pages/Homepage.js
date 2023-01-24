import React from 'react'
import axios from 'axios';
import {useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
const Homepage=()=>{
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        const fecthAllMovies=async()=>{
            try{
               const res=await axios.get('http://localhost:3001/reviews') 
               setMovie(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fecthAllMovies()
    },[])

    const handleDelete=async (id)=>{
        try{
            await axios.delete("http://localhost:3001/reviews/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Movies</h1>
            <div className='moives'>
                {movie.map(movie=>(
                    <div className='movies' key={movie.id}>
                        <h1>Movie Name</h1>
                        <p>{movie.movieName}</p>
                        <h1>Movie Review</h1>
                        <p>{movie.movieReview}</p>
                        <button className='delete' onClick={()=>handleDelete(movie.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/Add">Add New Review</Link>
            </button>
        </div>
    )
}
export default Homepage