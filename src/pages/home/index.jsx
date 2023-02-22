import SearchBar from "./component/SearchBar";
import Select from "./component/Select";
import DisplayTrending from "./component/DisplayTrending";
import DisplayGenre from "./component/DisplayGenre";
import DisplaySearch from "./component/DisplaySearch";
import TopRated from "./component/TopRated";
import Upcoming from "./component/Upcoming";
import Playing from "./component/Playing";

const Home = ({
  movie,
  name,
  setName,
  searchMovie,
  genre,
  setGenre,
  topRated,
  showName,
  changeGenre,
  handleClick,
  upComing,
  playing,
}) => {
  const handleGenreClick = (e) => {
    setGenre(e.target.value);
    console.log(genre);
  };

  return (
    <main className="px-4 md:px-0 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
      <div className="md:flex justify-between items-center md:px-20">
        <SearchBar name={name} setName={setName} handleClick={handleClick} />
        <Select
          genre={genre}
          setGenre={setGenre}
          handleClick={handleClick}
          handleGenreClick={handleGenreClick}
        />
      </div>

      <DisplayTrending
        movie={movie}
        showName={showName}
        handleClick={handleClick}
      />

      <DisplaySearch
        searchMovie={searchMovie}
        showName={showName}
        handleClick={handleClick}
      />

      <Playing
        playing={playing}
        showName={showName}
        handleClick={handleClick}
      />

      <DisplayGenre
        changeGenre={changeGenre}
        showName={showName}
        handleClick={handleClick}
        genre={genre}
      />

      <TopRated
        topRated={topRated}
        showName={showName}
        handleClick={handleClick}
      />
      <Upcoming
        upComing={upComing}
        showName={showName}
        handleClick={handleClick}
      />
    </main>
  );
};

export default Home;
