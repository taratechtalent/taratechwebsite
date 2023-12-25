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
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/nodejs.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>{" "}
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/android.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/angular.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/nestjs.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/python.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/react.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/vuejs.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/expressjs.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>{" "}
        <SwiperSlide className="brand-logo">
          <Link href="#">
            <img
              className="img-fluid light-theme-img rounded-lg"
              src="/images/tech/csharp.png"
              alt="brand-logo"
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
      </Swiper>
    </>
  );
}
