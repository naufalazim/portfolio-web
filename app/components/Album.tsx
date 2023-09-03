"use client";
import { Album1 } from '@/public/assets'
import { Album2 } from '@/public/assets'
import { Album3 } from '@/public/assets'
import { Album4 } from '@/public/assets'
import { Album5 } from '@/public/assets'
import { Album6 } from '@/public/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'

const Album = () => {


    return <section id='' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
    <SectionTitle title='Me in Action' titleNo='05' />

    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      slidesPerView={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}

      className='mt-10 mySwiper items-center justify-center'
    >

      <SwiperSlide >
        <Image src={Album2} alt="album1" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Album3} alt="album1" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Album1} alt="album1" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Album4} alt="album1" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Album5} alt="album1" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={Album6} alt="album1" />
      </SwiperSlide>

      <div className='flex items-center justify-center mt-10 text-textGreen text-xl'>
        <BiLeftArrow /><BiRightArrow />
      </div>

    </Swiper>

  </section>
}

export default Album