import SearchBar from "./component/SearchBar";
import Select from "./component/Select";


const Home = ({
  movie,
  name,
  setName,
  setMovie,
  searchMovie,
  region,
  setRegion,
  showCountry,
  countries,
  showName,
  showRegion,
  changeRegion,
}) => {
  return (
    <main className="px-4 md:px-20 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
      <div className="md:flex justify-between items-center">
      <SearchBar name={name} setName={setName} />
      <Select region={region} setRegion={setRegion} />
      </div>
    </main>
  );
};

export default Home;
