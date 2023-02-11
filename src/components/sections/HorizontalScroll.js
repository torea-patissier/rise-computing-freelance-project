import React from "react";
import {Keyboard, Pagination, Navigation, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import Image from "../elements/Image";

export default function HorizontalScroll() {
  return (
     <Swiper
        slidesPerView={3}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        scrollbar={{draggable: true}}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        autoplay={{delay: 1500, disableOnInteraction: false}}
        className="mySwiper"
     >
       <SwiperSlide
          className="swiper-slide-item"
       >
         <Image
            src={require('./../../assets/images/bnp.svg')}
            alt="bnp"
            width={100}
            height={100}/>
       </SwiperSlide>
       <SwiperSlide
          className="swiper-slide-item mt-8"
       >
         <Image
            src={require('./../../assets/images/danone.svg')}
            alt="danone"
            width={100}
            height={100}/>
       </SwiperSlide>
       <SwiperSlide
          className="swiper-slide-item"
       >
         <Image
            src={require('./../../assets/images/poste.svg')}
            alt="poste"
            width={100}
            height={100}/>
       </SwiperSlide>
       <SwiperSlide
          className="swiper-slide-item"
       >
         <Image
            src={require('./../../assets/images/avis.svg')}
            alt="avis"
            width={100}
            height={100}/>
       </SwiperSlide>
       <SwiperSlide
          className="swiper-slide-item"
       >
         <Image
            src={require('./../../assets/images/lafayette.svg')}
            alt="lafayette"
            width={100}
            height={100}/>
       </SwiperSlide>
       <SwiperSlide
          className="swiper-slide-item"
       >
         <Image
            src={require('./../../assets/images/pages-jaunes.svg')}
            alt="pages-jaunes"
            width={100}
            height={100}/>
       </SwiperSlide>
       <SwiperSlide
          className="swiper-slide-item"
       >
         <Image
            src={require('./../../assets/images/malakoff.svg')}
            alt="malakoff"
            width={100}
            height={100}/>
       </SwiperSlide>
       <SwiperSlide
          className="swiper-slide-item"
       >
         <Image
            src={require('./../../assets/images/ratp.svg')}
            alt="ratp"
            width={100}
            height={100}/>
       </SwiperSlide>
     </Swiper>
  );
}
