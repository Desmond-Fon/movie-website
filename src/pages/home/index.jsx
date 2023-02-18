import SearchBar from "./component/SearchBar";
import Select from "./component/Select";
import DisplayTrending from './component/DisplayTrending'
import DisplayGenre from './component/DisplayGenre'
import DisplaySearch from './component/DisplaySearch'


const Home = ({
  movie,
  name,
  setName,
  showGenre,
  searchMovie,
  genre,
  setGenre,
  showMovie,
  countries,
  showName,
  changeGenre,
  handleClick
}) => {




  return (
    <main className="px-4 md:px-0 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
      <div className="md:flex justify-between items-center md:px-20">
      <SearchBar name={name} setName={setName} handleClick={handleClick}/>
      <Select genre={genre} setGenre={setGenre} />
      </div>
     {showMovie ? (
        <DisplayTrending movie={movie} showName={showName}  handleClick={handleClick}/>
      ) : showGenre ? (
        <DisplayGenre changeGenre={changeGenre} showName={showName}  handleClick={handleClick}/>
      ) : (
        <DisplaySearch searchMovie={searchMovie} showName={showName}  handleClick={handleClick}/>
      )}
    </main>
  );
};

export default Home;
