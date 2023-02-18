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

const getPosterUrl = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
};

const DisplaySearch = ({ searchMovie, showName }) => {
  return (
    <>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        virtual
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
        navigation
        autoplay={1000}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {searchMovie.map((movie, index) => (
          <SwiperSlide key={movie.id} virtualIndex={index}>
           <div className='w-full md:h-[900px]'>
           <img
              src={getPosterUrl(movie.poster_path)}
              alt=""
              className="w-full h-full"
            />
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DisplaySearch;