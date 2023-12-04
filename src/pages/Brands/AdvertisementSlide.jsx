import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const AdvertisementSlide = ({ brand }) => {
  const { advertisementImg1, advertisementImg2, advertisementImg3 } = brand;

  return (
    <div className="my-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0 lg:w-full md:w-10/12 w-5/6 rounded-lg"
      >
        <SwiperSlide >
          <img className="w-full md:h-[400px] h-[300px]" src={advertisementImg1} alt="advertisement-Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px]" src={advertisementImg2} alt="advertisement-Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px]" src={advertisementImg3} alt="advertisement-Image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdvertisementSlide;
