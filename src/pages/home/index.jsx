import SearchBar from "./component/SearchBar";
import Select from "./component/Select";
import DisplayTrending from './component/DisplayTrending'


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
}) => {
  return (
    <main className="px-4 md:px-0 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
      <div className="md:flex justify-between items-center md:px-20">
      <SearchBar name={name} setName={setName} />
      <Select genre={genre} setGenre={setGenre} />
      </div>
     <DisplayTrending movie={movie} showName={showName}/>
    </main>
  );
};

export default Home;
