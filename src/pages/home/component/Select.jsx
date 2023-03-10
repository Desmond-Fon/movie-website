const Select = ({ genre, setGenre, handleGenreClick }) => {
  return (
    <select
      className="bg-white dark:bg-darkBlue dark:text-whiteLMDM text-sm w-[150px] py-3 px-2 border-none mb-8 text-veryDarkBlueLM rounded-[4px] shadow-md outline-none md:w-[200px]"
      value={genre}
      onChange={(e) => handleGenreClick(e)}
    >
      <option value="">Filter by Genre</option>
      <option value="28" className="text-sm ">
        Action
      </option>
      <option value="12" className="text-sm ">
        Adventure
      </option>
      <option value="16" className="text-sm ">
        Animation
      </option>
      <option value="35" className="text-sm ">
        Comedy
      </option>
      <option value="80" className="text-sm ">
        Crime
      </option>
      <option value="18" className="text-sm ">
        Drama
      </option>
      <option value="10751" className="text-sm ">
        Family
      </option>
      <option value="14" className="text-sm ">
        Fantasy
      </option>
      <option value="27" className="text-sm ">
        Horror
      </option>
      <option value="9648" className="text-sm ">
        Mystery
      </option>
      <option value="10770" className="text-sm ">
        Romance
      </option>
      <option value="53" className="text-sm ">
        Science Fiction
      </option>
      <option value="10770" className="text-sm ">
        TV Movie
      </option>
      <option value="53" className="text-sm ">
        Thriller
      </option>
    </select>
  );
};

export default Select;
