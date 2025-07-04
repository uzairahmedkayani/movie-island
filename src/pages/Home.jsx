import React from "react";
import NavBar from "../components/NavBar";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "../components/Movie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="px-[200px] mt-3">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200"
              alt="Movie Banner"
              className="contain-content"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200"
              alt="Movie Banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200"
              alt="Movie Banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200"
              alt="Movie Banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200"
              alt="Movie Banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200"
              alt="Movie Banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200"
              alt="Movie Banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200"
              alt="Movie Banner"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="px-[200px] my-5 h-auto">
        <h3 className="mb-5 text-3xl">Kids</h3>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper h-[40vh] w-auto"
        >
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://i.ebayimg.com/images/g/3pwAAOSwCblmtEWb/s-l1200.jpg"/>
          </SwiperSlide>
          
        </Swiper>
      </div>
      
      
      <div className="px-[200px] my-5 h-auto">
        <h3 className="mb-5 text-3xl">Action</h3>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper h-[40vh]"
        >
          <SwiperSlide>
            <Movie image ="https://m.media-amazon.com/images/I/71u4ibuAdsL._AC_SL1500_.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://m.media-amazon.com/images/I/71u4ibuAdsL._AC_SL1500_.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://m.media-amazon.com/images/I/71u4ibuAdsL._AC_SL1500_.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://m.media-amazon.com/images/I/71u4ibuAdsL._AC_SL1500_.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://m.media-amazon.com/images/I/71u4ibuAdsL._AC_SL1500_.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://m.media-amazon.com/images/I/71u4ibuAdsL._AC_SL1500_.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <Movie image ="https://m.media-amazon.com/images/I/71u4ibuAdsL._AC_SL1500_.jpg"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
