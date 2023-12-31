/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 6,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 5,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 6,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 6,
      // spaceBetween: 30,
    },
  },
};

export default function BrandSlider() {
  return (
    <>
      {/* <Swiper {...swiperOptions}>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper> */}

      <Swiper {...swiperOptions} className="brands-carousel-6">
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>{" "}
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>{" "}
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              width={"50%"}
              className="img-fluid light-theme-img rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
      </Swiper>
    </>
  );
}
