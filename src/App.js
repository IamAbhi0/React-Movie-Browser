import logo from './logo.svg';
import './App.css';

import { Home } from './pages/home';
import { About } from './pages/about';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MoviesData} from './pages/getmovie';
import { WednesdayMovie } from './pages/wednesday';
import { SquidGameSeries } from './pages/Squidgamw';
import { SquidGameInfo } from './pages/squidgameinfo';
import { SquidGame } from './pages/getmovie';
import { AllMovies } from './pages/allmovies';
import { AllMovieData } from './pages/getmovie';


const router=createBrowserRouter([
  {
    path:"/home",
    element:<Home/>,
    loader:MoviesData
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/home/wednesday/:movieId",
    element:<WednesdayMovie/>,
    loader:MoviesData
  },
  {
    path:"/home/squidgame/:movieId",
    element:<SquidGameSeries/>,
    loader:MoviesData
  },
  {
    path:"/squidgame/:Id",
    element:<SquidGameInfo/>,
    loader:SquidGame,
  },
  {
    path:"/allmovies",
    element:<AllMovies/>,
    loader:AllMovieData
  }
  
]
)


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} >
        
      </RouterProvider>
    </div>
  );
}

export default App;
