import React from "react";
import {Keyboard, Pagination, Navigation, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import Image from "../elements/Image";

const images = [
  {src: require('./../../assets/images/bnp.svg'), alt: "bnp"},
  {src: require('./../../assets/images/danone.svg'), alt: "danone"},
  {src: require('./../../assets/images/poste.svg'), alt: "poste"},
  {src: require('./../../assets/images/avis.svg'), alt: "avis"},
  {src: require('./../../assets/images/lafayette.svg'), alt: "lafayette"},
  {src: require('./../../assets/images/pages-jaunes.svg'), alt: "pages-jaunes"},
  {src: require('./../../assets/images/malakoff.svg'), alt: "malakoff"},
  {src: require('./../../assets/images/ratp.svg'), alt: "ratp"},
];

const HorizontalScroll = () => {
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
       {images.map((image, index) => (
          <SwiperSlide
             key={index}
             className="swiper-slide-item"
          >
            <Image
               src={image.src}
               alt={image.alt}
               width={100}
               height={100}
            />
          </SwiperSlide>
       ))}
     </Swiper>
  );
}

export default HorizontalScroll;
