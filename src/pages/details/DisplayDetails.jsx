const getPosterUrl = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
};

const DisplayDetails = ({ showDetails }) => {
  return (
    <>
      {showDetails.map((movie) => (
        <div key={movie.id} className="flex flex-col flex-wrap">
          <div className="w-4/5 bg-veryLightGrayLM mb-9 text-left dark:text-whiteLMDM dark:bg-veryDarkBlueDM md:flex md:justify-between md:items-center md:w-full md:text-center">
            <div className="w-full md:w-1/2 md:h-1/2 md:flex md:justify-center md:items-center md:mr-10">
              <img
                src={getPosterUrl(movie.poster_path)}
                alt=""
                className="rounded-t-[5px] w-full h-full md:rounded-none md:object-cover"
              />
            </div>
            <div className="pb-10 pt-7 text-left h-3/5 text-sm">
              <div className=" md:flex md:flex-row md:justify-between">
                <div>
                  <h2 className="text-lg font-bold pb-4 md:pb-10">
                    {movie.original_name || movie.original_title}
                  </h2>
                  <p className="font-semibold md:pb-3">
                    Overview:{" "}
                    <span className="font-light">{movie.overview}</span>
                  </p>
                  <p className="font-semibold md:pb-3">
                    Release Date:{" "}
                    <span className="font-light">{movie.release_date}</span>
                  </p>
                  <p className="font-semibold md:pb-3">
                    Popularity: <span className="font-light">{movie.popularity}</span>
                  </p>
                  {/* <p className="font-semibold md:pb-3">
                    Sub Region:{" "}
                    <span className="font-light">{movie.subregion}</span>
                  </p>
                  <p className="font-semibold md:pb-3">
                    Capital: <span className="font-light">{movie.capital}</span>
                  </p> */}
                </div>

                {/* <div className="mt-5 md:mt-16">
                  <p className="font-semibold md:pb-3">
                    Top Level Domain:{" "}
                    <span className="font-light">{movie.topLevelDomain}</span>
                  </p>
                  <p className="font-semibold md:pb-3">
                    Currencies:{" "}
                    <span className="font-light">
                      {movie.currencies[0].name}
                    </span>
                  </p>
                  <p className="font-semibold md:pb-3">
                    Languages:
                    {movie.languages.map((lang) => (
                      <span className="font-light"> {lang.name},</span>
                    ))}
                  </p>
                </div> */}
              </div>

              {/* <div className="mt-5 md:mt-14">
                <h2 className="text-[16px]  font-semibold">
                  Border Countries:
                </h2>
                <p className="font-semibold"></p>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayDetails;
