import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const Carousel = () => {
  const slides = [
    {
      image: "/src/assets/images/carousel/1.jpg",
      info: "Your one-stop shop for sports goods",
      sale: "50% OFF on all items!",
    },
    {
      image: "/src/assets/images/carousel/2.jpg",
      info: "Grab Yours Soon!",
      sale: "Buy 1 Get 1 Free!",
    },
    {
      image: "/src/assets/images/carousel/3.jpg",
      info: "Hurry Before Its Gone",
      sale: "Summer Sale: Up to 70% OFF!",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        // direction={"vertical"}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen ">
              {/* <div> */}
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white ">
                <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold mb-4 mt-36">
                  {slide.sale}{" "}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl  mb-8">
                  {slide.info}
                </p>
                <button className="bg-red-700 text-white mt-6 py-2 px-10 hover:bg-red-800 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
