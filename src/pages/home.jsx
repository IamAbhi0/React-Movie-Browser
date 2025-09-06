import { Navbar } from "./navbar"
import { Movies } from "./movies"
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaPlateWheat } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { Star } from 'lucide-react'
import { NavLink } from "react-router-dom";
import { FaPlay } from 'react-icons/fa6';



export const Home=()=>{

    const bbdata=useLoaderData()
    console.log(bbdata);
    

    
    return(
        <>
        <Navbar/>
        <div >

<div className="relative w-full h-[90vh]">
  {/* Background Image */}
  <img
    className="object-cover w-full h-[90vh] rounded-lg blur-sm"
    src="./poster0003.jpg"
    alt="poster"
  />

  {/* Overlay Icons */}
  <div className="absolute left-0 right-0 flex justify-between px-6 transform -translate-y-1/2 top-1/2">
    <button>
      <FaAngleDoubleLeft className="w-8 h-8 text-white transition-all duration-300 opacity-75 hover:text-sky-400" />
    </button>
    <button>
      <FaAngleDoubleRight className="w-8 h-8 text-white transition-all duration-300 opacity-75 hover:text-sky-400" />
    </button>
  </div>

  <div>
    <h1 className="absolute  right-0 flex justify-between px-6 text-6xl font-bold text-white transform -translate-y-1/2 top-[62vh] left-[8vw] " >{bbdata.breakingBad.Title}</h1>

    <span  className="flex flex-row gap-10">
                    
                <h3 className="absolute text-1xl font-bold text-white left-[9.5vw] top-[68vh]"   ><Star color="#ede502" />         </h3>
                <h3 className="absolute text-1xl font-bold text-white left-[12vw] top-[68vh]"   > {bbdata.breakingBad.imdbRating}     |      </h3>
                <h3 className="absolute text-1xl font-bold text-white left-[15vw] top-[68vh]"  >{bbdata.breakingBad.imdbVotes} </h3>
                <h3 className="absolute text-1xl font-bold text-white left-[20vw] top-[68vh]"  >{bbdata.breakingBad.Genre}</h3>
                <h3 className="absolute text-1xl font-bold text-white left-[31vw] top-[68vh]"  >- 2008 </h3>
                
                </span>

                
    
  </div>

  <span className=" absolute text-1xl font-thin text-white left-[8vw] top-[73vh] w-[37vw] whitespace-normal opacity-65" >
    {bbdata.breakingBad.Plot}
  </span>
  
                <div className=" absolute text-xl font-bold text-white left-[9.5vw] top-[82vh] flex flex-row gap-7 ">
  <NavLink>
    <button className="flex flex-row items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg">
      <FaPlay className="text-lg" />
      Play Now
    </button>
  </NavLink>

  
 <NavLink  to={`/squidgame/${bbdata.breakingBad.imdbID}`}>
    <button className="flex flex-row items-center justify-center gap-2 px-4 py-2 font-thin text-white  border border-white rounded-lg w-[8vw] h-[5vh] bg-opacity-50 ">
      Trailer
    </button>
  </NavLink>
</div>

</div>



            
        {/* <div className="w-full bg-center bg-cover h-[90vh]">
            <img  className="object-cover w-full h-[90vh] rounded-lg blur-sm " src="./poster01.jpg" alt="" srcset="" />
        </div>

        <div className="flex flex-row gap-[88vw] m-auto w-[88vw] absolute b-[30vh] " >
            <span>
               <FaAngleDoubleLeft  className="w-10 h-10 text-white" />
            </span>
            <span>
                <FaAngleDoubleRight/>
            </span>
        </div> */}

        <div>
          <div className="mt-10" > <ul className="w-[55vw] flex flex-row gap-20 m-auto " > <li><button className="w-[7vw] h-[5vh] bg-black text-white rounded-lg cursor-pointer" >Action</button></li> <li><button className="w-[7vw] h-[5vh] bg-black text-white rounded-lg cursor-pointer" >Comedy</button></li> <li><button className="w-[7vw] h-[5vh] bg-black text-white rounded-lg cursor-pointer" >Romance</button></li> <li><button className="w-[7vw] h-[5vh] bg-black text-white rounded-lg cursor-pointer" >Horror</button></li> <li><button className="w-[7vw] h-[5vh] bg-black text-white rounded-lg cursor-pointer" >Sci-Fi</button></li> </ul> </div>


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