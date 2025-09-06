

const Wednesday= async()=>{
    
    const movie=await fetch("https://www.omdbapi.com/?i=tt13443470&apikey=6ac272c1")
    
    const wednesday= movie.json()
    
    return wednesday
    
}

const BreakingBad=async ()=>{
    
    const movie=await fetch("https://www.omdbapi.com/?i=tt0903747&apikey=6ac272c1")
    
    const BB= movie.json()
    
    return BB
    
}

const GameofTrones=async ()=>{
    
    const movie=await fetch("https://www.omdbapi.com/?i=tt0944947&apikey=6ac272c1")
    
    const GOT= movie.json()
    
    return GOT
}

export const SquidGame=async()=>{
    
    const movie=await fetch("https://www.omdbapi.com/?i=tt10919420&apikey=6ac272c1")
    
    const Squidgame= movie.json()
    
    return Squidgame
}


export const AllMovieData=async()=>{


    const movies=await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=6ac272c1&s=titanic&page=1")

    const data=movies.json();

    return data
}

export const MoviesData = async () => {
  const [wednesday, breakingBad,Got,squidgame] = await Promise.all([
    Wednesday(),
    BreakingBad(),
    GameofTrones(),
    SquidGame()
  ]);
  return { wednesday, breakingBad,Got,squidgame };
};
