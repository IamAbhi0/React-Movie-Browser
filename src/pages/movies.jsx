import { useLoaderData,NavLink } from "react-router-dom"

export const Movies=()=>{

const moviedata=useLoaderData()

// console.log(moviedata);


    return (
        <>

        <div className="w-[85vw] mx-auto mt-[10vh] mb-[10vh]">
  {/* Section Title */}
  <h2 className="mb-8 text-3xl font-bold tracking-wide text-black">
    Trending Now
  </h2>

  {/* Card Container */}
  <ul className="flex flex-row justify-center gap-[5vw]">
    {/* Wednesday */}
    <li>
      <NavLink to={`/home/wednesday/${moviedata.wednesday.imdbID}`}>
        <div
          className="group relative w-[15vw] h-[40vh] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
          style={{
            backgroundImage: `url(${moviedata.wednesday.Poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-end p-3 transition duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100">
            <p className="text-lg font-semibold text-white">Wednesday</p>
          </div>
        </div>
      </NavLink>
    </li>

    {/* Breaking Bad */}
    <li>
      <div
        className="group relative w-[15vw] h-[40vh] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
        style={{
          backgroundImage: `url(${moviedata.breakingBad.Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-end p-3 transition duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100">
          <p className="text-lg font-semibold text-white">Breaking Bad</p>
        </div>
      </div>
    </li>

    {/* Game of Thrones */}
    <li>
      <div
        className="group relative w-[15vw] h-[40vh] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
        style={{
          backgroundImage: `url(${moviedata.Got.Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-end p-3 transition duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100">
          <p className="text-lg font-semibold text-white">Game of Thrones</p>
        </div>
      </div>
    </li>

    {/* Squid Game */}
    <li>
      <NavLink to={`/home/squidgame/${moviedata.squidgame.imdbID}`}>
        <div
          className="group relative w-[15vw] h-[40vh] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
          style={{
            backgroundImage: `url(${moviedata.squidgame.Poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-end p-3 transition duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100">
            <p className="text-lg font-semibold text-white">Squid Game</p>
          </div>
        </div>
      </NavLink>
    </li>
  </ul>
</div>









        {/* <div>
            <div className=" w-[85vw] h-[45vh] p-15 m-auto mt-[10vh] rounded-lg mb-[10vh]  bg-sky-300/20 backdrop-blur-md border border-sky-200/30 rounded-x  "  >
                <ul className="flex flex-row gap-[10vw] m-auto w-[75vw] top-[8vh] relative " >
                    <li> <NavLink to={`/home/wednesday/${moviedata.wednesday.imdbID}`} >  <div  className="w-[12vw] h-[30vh] p-5 bg-cover bg-center " style={{ backgroundImage: `url(${moviedata.wednesday.Poster})` }} > 
                        
                        </div></NavLink> </li>
                    <li> <div className="w-[12vw] h-[30vh] p-5 bg-cover bg-center " style={{ backgroundImage: `url(${moviedata.breakingBad.Poster})` }} ></div> </li>
                    <li> <div className="w-[12vw] h-[30vh] p-5 bg-cover bg-center " style={{ backgroundImage: `url(${moviedata.Got.Poster})` }}  ></div> </li>
                    <li>
                        <NavLink to={`/home/squidgame/${moviedata.squidgame.imdbID}`} >
                         <div className="w-[12vw] h-[30vh] p-5 bg-cover bg-center " style={{ backgroundImage: `url(${moviedata.squidgame.Poster})` }}  ></div></NavLink> </li>
                </ul>
            </div>
        </div> */}
        </>
    )
}