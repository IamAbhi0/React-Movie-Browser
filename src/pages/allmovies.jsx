import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navbar } from "./navbar";

export const AllMovies=()=>{

const moviedata=useLoaderData()
console.log(moviedata);


    
     return (
        <>
<Navbar/>
        
   <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center mt-[5vh] ">
  {moviedata?.Search?.map((getmovie, index) => (
    <div
      key={index}
      className="w-[210px] bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden border border-white/10 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
    >
      {/* Poster */}
      <NavLink to={`/movies/${getmovie.imdbID}`}>
        <img
          className="w-full h-[270px] object-cover"
          src={getmovie.Poster}
          alt={getmovie.Title}
        />
      </NavLink>

      {/* Movie Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white truncate">
          {getmovie.Title}
        </h3>
        <p className="mt-1 text-xs text-gray-400">{getmovie.Year}</p>
      </div>
    </div>
  ))}
</div>


        </>
    )
}