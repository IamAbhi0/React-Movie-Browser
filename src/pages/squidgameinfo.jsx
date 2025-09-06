import { useLoaderData } from "react-router-dom"
import { Navbar } from "./navbar"
import { Star } from 'lucide-react'
import { RiMovie2Fill } from "react-icons/ri";

export const SquidGameInfo=()=>{

    const gamedata=useLoaderData()
    console.log(gamedata);
    

    return (
        <>
        <Navbar/>
 <div className="absolute flex flex-row gap-[45vw] left-[20vw] mt-[1vh] " >
            <div>
                <h1  className="text-2xl font-ramabhadra" >{gamedata.Title}</h1>
            </div>
            <div className="flex flex-row" >
                <span><Star color="#ede502" /></span>
                <span className="font-ramabhadra"  >{gamedata.imdbRating}</span>
                <span className="opacity-0" > " " </span>
                <span> | </span>
                <span className="opacity-0" > " " </span>
                <span className="font-ramabhadra" >{gamedata.imdbVotes}</span>
                 
            </div>
            </div>

<div>
        <div className="w-[88vw] mt-[6vh] h-[68vh] rounded-lg flex flex-row gap-[10vw] m-auto bg-sky-300/20 backdrop-blur-md border border-sky-200/30 rounded-x " >

            <div>
            <span>
                <img   className="p-10 left-[5vw] mt-[1vh] relative rounded-lg  w-[25vw] h-[68vh]" src={`${gamedata.Poster}`} alt="" srcset="" />
            </span>
            </div>
            <div>
               <span>
               <iframe  className=" rounded shadow-lg relative mt-[5.5vh]" width="780" height="480" src="https://www.youtube.com/embed/ULi6SmLifVg?si=Lvq6SnTcxvbW9M31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               </span>
            </div>
        </div>

 </div>

<div className="flex flex-col items-start bg-sky-300/20 backdrop-blur-md border border-sky-200/30 rounded-xl w-[88vw] mx-auto p-6 space-y-4 hover:border-sky-400 transition-all duration-300">
  <h2 className="text-2xl font-semibold text-sky-800">Overview</h2>
  
  <p className="text-base leading-relaxed text-gray-900">
    {gamedata.Plot}
  </p>

  <div className="flex flex-col text-gray-800 sm:flex-row sm:items-center sm:gap-6">
    <p className="text-base">
      <span className="font-medium text-sky-700"> Genre:</span> {gamedata.Genre}
    </p>
    <p className="text-base">
      <span className="font-medium text-sky-700"> Actors:</span> {gamedata.Actors}
    </p>
  </div>
</div>




        {/* <div>
            <h1>{gamedata.Title}</h1>
            <h3>{gamedata.Plot}</h3>
        </div> */}
        </>
    )
}