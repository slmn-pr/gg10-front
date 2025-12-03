import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import bg1 from '@/assets/images/lobby/bg-hero.png';

export default function BannerSlider() {
  return (
    <Swiper pagination={true} modules={[Pagination]}>
      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '160px',
        }}
      >
        <img
          src={bg1}
          alt="banner"
          className="w-full h-full object-cover"
          height={160}
          width="100%"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '160px',
        }}
      >
        <img
          src={bg1}
          alt="banner"
          className="w-full h-full object-cover"
          height={160}
          width="100%"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '160px',
        }}
      >
        <img src={bg1} alt="banner" height={160} width="100%" />
      </SwiperSlide>
    </Swiper>
  );
}
