import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [movie, setMovie] = useState([]);
  const [name, setName] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const [genre, setGenre] = useState("");
  const [showMovie, setShowMovie] = useState(true);
  const [showGenre, setShowGenre] = useState(false);
  const [changeGenre, setChangeGenre] = useState([]);
  const [details, setDetails] = useState("");
  const [showDetails, setShowDetails] = useState([]);


  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=12a1b5b9a07d597442572dd75e61a4d4")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        console.log(users)
        setMovie(users);
      });
  }, []);

  useEffect(() => {
    // console.log(name);
    let userSearch = name.toLowerCase();
    console.log(name)
    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=12a1b5b9a07d597442572dd75e61a4d4&language=en-US&query=${userSearch}&page=1&include_adult=true`)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            `Something went wrong, please ensure you spell the movie correctly. ${res.status}`
          );
        return res.json();
      })
      .then((users) => {
        console.log(users)
        setSearchMovie(users);
        setShowMovie(false);
        setShowGenre(false);
      });
    //  .catch(err => {console.error(err)
    //  })
  }, [name]);

  useEffect(() => {
    // console.log(region);

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=12a1b5b9a07d597442572dd75e61a4d4&language=en-US&page=1`)
      .then((res) => {
        if (!res.ok) throw new Error(`Something went wrong. ${res.status}`);
        return res.json();
      })
      .then((users) => {
        // console.log(users)
        setChangeGenre(users);
        setShowGenre(true);
        setShowMovie(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [genre]);

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=12a1b5b9a07d597442572dd75e61a4d4&language=en-US&query=${details}&page=1&include_adult=true`)
      .then((res) => {
        if (!res.ok) throw new Error(`Something went wrong. ${res.status}`);
        return res.json();
      })
      .then((users) => {
        setShowDetails(users);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [details]);

  const showName = (e) => {
    const el = e.target.innerHTML;
    setDetails(el);
  };



  return (
    <div className="font-nunito h-screen bg-veryLightGrayLM dark:bg-veryDarkBlueDM">
      <Header onSwitch={handleThemeSwitch} />
           <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home 
              movie={movie}
              name={name}
              setName={setName}
              searchMovie={searchMovie}
              genre={genre}
              setGenre={setGenre}
              showName={showName}
              changeGenre={changeGenre}
              showMovie={showMovie}
              showGenre={showGenre}
              />
            }
          />

          <Route
            path="/details"
            element={<Details showDetails={showDetails} details={details}/>}
          />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
