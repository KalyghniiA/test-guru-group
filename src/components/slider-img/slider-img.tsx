import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { nanoid } from '@reduxjs/toolkit';

type ImagesProps = {
  images: string[];
  name: string;
};

function Slider({ images, name }: ImagesProps): JSX.Element {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class=${className}></span>`;
    },
  };

  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      {images.map((image) => (
        <SwiperSlide key={nanoid()}>
          <img src={image} width="224" height="260" alt={name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
