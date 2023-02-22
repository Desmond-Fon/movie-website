import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const getPosterUrl = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
};

const Playing = ({ playing, handleClick }) => {
  return (
    <div className="mb-10">
              <p className='dark:text-whiteLMDM text-veryDarkBlueLM font-semibold text-lg p-5'>NOW PLAYING</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        virtual
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
        navigation
        autoplay={1000}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {playing.map((movie, index) => (
          <SwiperSlide
            key={movie.id}
            virtualIndex={index}
            onClick={handleClick}
            data-test-id={movie.original_name || movie.original_title}
          >
            <Link to="/Details">
              <div className="w-full md:h-[350px] bg-darkBlue rounded-md">
                <img
                  src={
                    getPosterUrl(movie.poster_path) ||
                    getPosterUrl(movie.backdrop_path)
                  }
                  alt=""
                  className="w-full h-[200px] rounded-md"
                />
                <div className="px-2">
                <p className="text-sm font-semibold text-veryDarkBlueLM dark:text-whiteLMDM">TITLE: <span className="font-light">{movie.original_name || movie.original_title}</span></p>
                <p className="text-sm font-semibold text-veryDarkBlueLM dark:text-whiteLMDM">RELEASE DATE: <span className="font-light">{movie.release_date}</span></p>
                <p className="text-sm font-semibold text-veryDarkBlueLM dark:text-whiteLMDM">Genre :
                 <span className="font-light">
                 {movie.genre_ids.map((genre) => {
                    return genre === 28
                      ? "Action "
                      : genre === 12
                      ? "Adventure "
                      : genre === 16
                      ? "Animation "
                      : genre === 35
                      ? "Comedy "
                      : genre === 80
                      ? "Crime "
                      : genre === 18
                      ? "Drama "
                      : genre === 10751
                      ? "Family "
                      : genre === 14
                      ? "Fantasy "
                      : genre === 27
                      ? "Horror"
                      : genre === 9648
                      ? "Mystery "
                      : genre === 10770
                      ? "Romance, TV MOvie "
                      : genre === 53
                      ? "Sci-fi, Thriller "
                      : "None";
                  })}
                 </span>
                </p>
                <p className="text-sm font-semibold text-veryDarkBlueLM dark:text-whiteLMDM">Popularity: <span className="font-light">{movie.popularity}</span></p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Playing;
