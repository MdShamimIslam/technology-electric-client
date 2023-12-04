import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReviewSlider from "./ReviewSlider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import commentImg from "../../assets/rating.png";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://technology-electronic-server-zeta.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-24">
      <h3 className="md:text-3xl text-2xl font-semibold text-center">
        Our Clients Says to About Our Product
      </h3>
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
        className="mySwiper z-0 my-16 bg-cyan-200 h-[350px] rounded-lg"
      >
        {reviews?.map((review) => (
          <SwiperSlide>
            <div className="w-1/3 m-auto mt-16">
              <div className="flex items-center justify-between">
                <Rating initialRating={review.rating} readonly />
                <img
                  className="w-[40px]"
                  src={commentImg}
                  alt="comment-image"
                />
              </div>
              <div className="my-8">
              <h2 className="text-xl font-semibold">Product-Name : {review.productName}</h2>
              <p><span className="font-semibold">Comment</span> : {review.des}</p>
              <div className="flex items-center gap-6 mt-4">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.img} />
                  </div>
                </div>
                <div>
                    <h2 className=" font-semibold">{review.name}</h2>
                    <p>{review.profession}</p>
                  </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
