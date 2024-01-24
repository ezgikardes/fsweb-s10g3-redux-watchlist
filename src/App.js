import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "./store/actions";

function App() {
  const [sira, setSira] = useState(0);
  const favMovies = useSelector((store) => store.favorites);
  const movies = useSelector((store) => store.movies);

  function sonrakiFilm() {
    setSira(sira + 1 <= movies.length -1 ? sira + 1 : 0 ); 
  } //sıra dizinin sonuna geldiğinde hata vermesin diye bir koşul yazdık. eğer sira'yi bir artırdığında movies dizisinin son elemanından küçük ya da son elemanına eşit oluyorsa sira'yi bir artır, değilse ilk elemana git.

  function oncekiFilm() {
    setSira(sira - 1 >= 0 ? sira -1 : movies.length -1);
  } //sıra -1'e düşmesin diye bir koşul yazdık. sira 0'dan büyük ya da 0'a eşitse sira -1'i işlet, değilse sonucumuz movies dizisinin son elemanı olacak. 


  const dispatch = useDispatch();

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />
          <div className="flex gap-3 justify-end py-3">
          <button
              onClick={()=> {setSira(0)}}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              İlk Film
            </button>
          <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sonraki
            </button>
           
            <button className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            onClick={() => {
              dispatch(addFavorite(movies[sira]))
              console.log("Favoriye ekle butonu tıklandı.")
              }}
            
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
