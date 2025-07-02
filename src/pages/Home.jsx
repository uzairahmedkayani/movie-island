import React from "react";
import NavBar from "../components/NavBar";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="px-[100px] mt-3">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200" alt="Movie Banner"  className="contain-content"/></SwiperSlide>
        <SwiperSlide><img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200" alt="Movie Banner" /></SwiperSlide>
        <SwiperSlide><img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200" alt="Movie Banner" /></SwiperSlide>
        <SwiperSlide><img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200" alt="Movie Banner" /></SwiperSlide>
        <SwiperSlide><img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200" alt="Movie Banner" /></SwiperSlide>
        <SwiperSlide><img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200" alt="Movie Banner" /></SwiperSlide>
        <SwiperSlide><img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200" alt="Movie Banner" /></SwiperSlide>
        <SwiperSlide><img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3459fad1-be79-4654-a49b-c33e55bfbfce/compose?aspectRatio=1.78&format=webp&width=1200" alt="Movie Banner" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
