import { Navbar } from "./navbar"
import { Movies } from "./movies"

import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { use, useEffect } from "react";
import { Star } from 'lucide-react'
import { FaPlay } from 'react-icons/fa6';

async function Moviedata(){
    const {movieId}=useParams()
    
        const movie=await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=6ac272c1`)
        
        const wednesday= movie.json()
        // console.log(wednesday);
        return wednesday
    
}


export const WednesdayMovie= ()=>{
    
        
    const weddata=useLoaderData()

    const WednesdayDetails=weddata.wednesday
    console.log(WednesdayDetails);
    
     
     
    
    return(
        <>
            <Navbar/>
            <div >
{/* 
 <h1>{wednesday.Title}</h1> */}
                
            <div className="w-full bg-center bg-cover h-[90vh]">
                <img  className="object-cover w-full h-[90vh] rounded-lg blur-sm " src="/poster001.jpg" alt="" srcset="" />
            </div>

            <div>
                <h1 className="absolute text-6xl font-bold text-white left-[10vw] top-[65vh]" >{WednesdayDetails.Title}</h1>
                <span  className="flex flex-row gap-10">
                    
                <h3 className="absolute text-1xl font-bold text-white left-[10vw] top-[75vh]"   ><Star color="#ede502" />         </h3>
                <h3 className="absolute text-1xl font-bold text-white left-[12vw] top-[75vh]"   > {WednesdayDetails.imdbRating}     |      </h3>
                <h3 className="absolute text-1xl font-bold text-white left-[15vw] top-[75vh]"  >{WednesdayDetails.imdbVotes} </h3>
                <h3 className="absolute text-1xl font-bold text-white left-[20vw] top-[75vh]"  >{WednesdayDetails.Genre}</h3>
                <h3 className="absolute text-1xl font-bold text-white left-[31vw] top-[75vh]"  >- 2022 </h3>
                
                </span>
                
                <h5 className="absolute text-1xl font-thin text-white left-[10vw] top-[80vh] w-[37vw] whitespace-normal opacity-65" >{WednesdayDetails.Plot}</h5>


            
                <div className=" absolute text-xl font-bold text-white left-[10vw] top-[88vh] flex flex-row gap-7 ">
  <NavLink>
    <button className="flex flex-row items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg">
      <FaPlay className="text-lg" />
      Play Now
    </button>
  </NavLink>

  
 <NavLink  to={`/squidgame/${WednesdayDetails.imdbID}`}>
    <button className="flex flex-row items-center justify-center gap-2 px-4 py-2 font-thin text-white  border border-white rounded-lg w-[8vw] h-[5vh] bg-opacity-50 ">
      Trailer
    </button>
  </NavLink>
</div>



                {/* <div className="absolute text-1xl font-bold text-white left-[10vw] top-[88vh]" >
                    <NavLink>
                        
                        <button className="flex flex-row gap-2 text-white bg-blue-500 w-[7vw] h-[4vh] rounded-lg px-4 items-center " > <FaPlay/>  Play Now</button></NavLink>
                    
                </div> */}
            </div>
    
            <div>
                <div className="mt-10" >
                    <ul  className="w-[55vw] flex flex-row gap-20 m-auto " >
                        <li><button className="w-[7vw] h-[5vh] bg-black  text-white rounded-lg cursor-pointer" >Action</button></li>
                        <li><button className="w-[7vw] h-[5vh] bg-black  text-white rounded-lg cursor-pointer" >Comedy</button></li>
                        <li><button className="w-[7vw] h-[5vh] bg-black  text-white rounded-lg cursor-pointer" >Romance</button></li>
                        <li><button className="w-[7vw] h-[5vh] bg-black  text-white rounded-lg cursor-pointer" >Horror</button></li>
                        <li><button className="w-[7vw] h-[5vh] bg-black  text-white rounded-lg cursor-pointer" >Sci-Fi</button></li>
                    </ul>
                </div>
            </div>
    <Movies/>
            <div>
                <div >
                    
                </div>
                
            </div>
            </div>
            </>
    )



}