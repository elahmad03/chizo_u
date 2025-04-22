import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

import { useState } from 'react';

const galleryItems = [
  { src: '/img/chizo.jpg' },
  { src: '/img/slide.jpg' },
  { src: '/img/slide1.jpg' },
  { src: '/img/slide2.jpg' },
  { src: '/img/slide3.jpg' },
  { src: '/img/slide4.jpg' },
  { src: '/img/slide5.jpg' },
];

export default function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="gallery" className="bg-white px-4 py-10 gallery">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Gallery
      </h2>

      {/* Main slider */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full max-w-xl mx-auto rounded-lg overflow-hidden"
      >
        {galleryItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[300px] md:h-[500px] bg-gray-200">
              <img
                src={item.src}
                alt=""
                className="object-cover w-full h-full"
              />
              <span className="absolute bottom-2 right-2 text-white bg-black/50 text-xs px-2 py-1 rounded">
                {item.duration}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        className="mt-4 max-w-xl mx-auto"
        breakpoints={{
          480: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
        }}
      >
        {galleryItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-20 cursor-pointer rounded-md overflow-hidden">
              <img
                src={item.src}
                alt=""
                className="object-cover w-full h-full"
              />
              <span className="absolute bottom-1 right-1 text-white bg-black/60 text-[10px] px-1 rounded">
                {item.duration}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
