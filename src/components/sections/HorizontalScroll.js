import React from "react";
import { Keyboard, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide }from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import Image from "../elements/Image";

export default function HorizontalScroll() {
  return (
       <Swiper
          slidesPerView={3}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}

          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
       >
         <SwiperSlide >
           <Image
              src={require('./../../assets/images/bnp.svg')}
              alt="Features split 01"
              width={100}
              height={100} />
         </SwiperSlide>
         <SwiperSlide >
           <Image
              src={require('./../../assets/images/danone.svg')}
              alt="Features split 01"
              width={100}
              height={100} />
         </SwiperSlide>
         <SwiperSlide >
           <Image
              src={require('./../../assets/images/poste.svg')}
              alt="Features split 01"
              width={100}
              height={100} />
         </SwiperSlide>
         <SwiperSlide >
           <Image
              src={require('./../../assets/images/avis.svg')}
              alt="Features split 01"
              width={100}
              height={100} />
         </SwiperSlide>
         <SwiperSlide >
           <Image
              src={require('./../../assets/images/lafayette.svg')}
              alt="Features split 01"
              width={100}
              height={100} />
         </SwiperSlide>
         <SwiperSlide >
           <Image
              src={require('./../../assets/images/pages-jaunes.svg')}
              alt="Features split 01"
              width={100}
              height={100} />
         </SwiperSlide>
         <SwiperSlide >
           <Image
              src={require('./../../assets/images/malakoff.svg')}
              alt="Features split 01"
              width={100}
              height={100} />
         </SwiperSlide>
       </Swiper>
  );
}
