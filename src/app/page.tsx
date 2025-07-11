"use client";

import Image from "next/image";
import React, {useEffect, useState, useRef} from "react";
import "tailwindcss";
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import * as Accordion from '@radix-ui/react-accordion';



export default function Home() {
  const [size, setSize] = useState({width: 0, height: 0})
  const swipeRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth * 0.04479,  // 4.479vw
        height: window.innerWidth * 0.06719, // 6.719vw
      });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleClick = (index: number) => {
    alert(`You clicked box ${index + 1}`)
  }

  const handleSwipe = (swiper: { isBeginning: boolean | ((prevState: boolean) => boolean); isEnd: boolean | ((prevState: boolean) => boolean); }) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  } 

  const slides = [
    { name: "Out of the Mud", src: "https://global-static.popmart.com/globalAdmin/1750643157551____out-of-the-mud____.png?x-oss-process=image/format,webp" },
    { name: "The Jewel Cage", src: "https://global-static.popmart.com/globalAdmin/1750643146609____the-jewel-cage____.png?x-oss-process=image/format,webp" },
    { name: "Spin a Cocoon", src: "https://global-static.popmart.com/globalAdmin/1750643138932____spin-a-cocoon____.png?x-oss-process=image/format,webp" },
    { name: "Being a Butterfly", src: "https://global-static.popmart.com/globalAdmin/1750643129533____being-a-butterfly____.png?x-oss-process=image/format,webp" },
    { name: "Diving In", src: "https://global-static.popmart.com/globalAdmin/1750642540187____diving-in____.png?x-oss-process=image/format,webp" },
    { name: "Flying High", src: "https://global-static.popmart.com/globalAdmin/1750642530966____flying-high____.png?x-oss-process=image/format,webp" },
    { name: "The Hold", src: "https://global-static.popmart.com/globalAdmin/1750642522104____the-hold____.png?x-oss-process=image/format,webp" },
    { name: "The Bond", src: "https://global-static.popmart.com/globalAdmin/1750642512398____the-bond____.png?x-oss-process=image/format,webp" },
    { name: "The External Echoes", src: "https://global-static.popmart.com/globalAdmin/1750642504686____the-external-echoes____.png?x-oss-process=image/format,webp" },
    { name: "The Internal Dialogue", src: "https://global-static.popmart.com/globalAdmin/1750642477327____the-internal-dialogue____.png?x-oss-process=image/format,webp" },
    { name: "The Asymmetrical Balance", src: "https://global-static.popmart.com/globalAdmin/1750642460093____the-asymmetrical-balance____.png?x-oss-process=image/format,webp" },
    { name: "The Cyclical Path", src: "https://global-static.popmart.com/globalAdmin/1750642449725____the-cyclical-path____.png?x-oss-process=image/format,webp" },
    { name: "The Key (Secret)", src: "https://global-static.popmart.com/globalAdmin/1750643164345____secret_the-key____.png?x-oss-process=image/format,webp" },
  ];

return (
  <div className="min-h-[60vh] flex flex-col items-center">

    {/* top lip */}
    <div className="relative w-full h-[2.1875vw]">
      <div className="absolute top-[0] left-[0] z-[5] w-full h-[2.1875vw] flex justify-center align-center">
        {/* Pick a Box */}
        <div className="font-[800] font-[#1f1f1f] items-center flex text-[0.83333vw] gap-x-[0.52083vw]">
          {/* Pick a Box Icon */}
          <div className="w-[1.45833vw] h-[1.45833vw]">
            <div className="relative inline-block">
              <img src={"https://cdn-global.popmart.com/images/boxPC/bigBox/buyStepPickOneIconActive4.png?x-oss-process=image/format,webp"}></img>
            </div>
          </div>
          {/* Pick a Box text */}
          <div className="relative">
            <div className="absolute h-[0.20833vw] w-full bottom-[0.26042vw] left-0 bg-[#ffe100]"></div>
            <div className="relative z-[2]">Pick A Box</div>
          </div>
        </div>
        {/* arrow */}
        <div className="h-[0.625vw] w-[2.70833vw] my-0 mx-[2.91667vw]">
          <div className="relative inline-block">
            <img src={"https://cdn-global.popmart.com/images/box/pc/step_arrow_pc.png?x-oss-process=image/format,webp"}></img>
          </div>
        </div>
        {/* Shake For Tips */}
        <div className="flex items-center gap-y-0 gap-x-[0.52083vw] font-[400] text-[0.83333vw] text-[#4a4a4a]">
          <div className="w-[1.45833vw] h-[1.45833vw]">
            <div className="relative inline-block">
              <img src={"https://cdn-global.popmart.com/images/boxPC/bigBox/buyStepShakeIcon4.png?x-oss-process=image/format,webp"}></img>
            </div>
          </div>
          <div className="relative">Shake For Tips</div>
        </div>
        {/* arrow */}
        <div className="h-[0.625vw] w-[2.70833vw] my-0 mx-[2.91667vw]">
          <div className="relative inline-block">
            <img src={"https://cdn-global.popmart.com/images/box/pc/step_arrow_pc.png?x-oss-process=image/format,webp"}></img>
          </div>
        </div>
        {/* Unbox Now */}
        <div className="flex items-center gap-y-0 gap-x-[0.52083vw] font-[400] text-[0.83333vw] text-[#4a4a4a]">
          <div className="w-[1.45833vw] h-[1.45833vw]">
            <div className="relative inline-block">
              <img src={"https://cdn-global.popmart.com/images/boxPC/bigBox/buyStepUnboxIcon4.png?x-oss-process=image/format,webp"}></img>
            </div>
          </div>
          <div className="relative">
            <div>Unbox Now</div>
          </div>
        </div>
      </div>
    </div>

    {/* top card */}
    <div className="flex items-start justify-between relative w-[75vw] my-[1.97917vw] mx-auto">

      {/* left Side: background card with fixed grid inside */}
      <div className="overflow-hidden relative flex center justify-between w-[48.75vw] min-h-[29.16667vw] d-[0.9375vw] pb-[2.60417vw]">
        
        {/* background */}
        <div className="absolute w-full h-[25.52083vw] bottom-[0] left-[0] opacity-[0.5]">
          <div className="relative inline-block">
            <img className="align-top w-full h-full" src="https://cdn-global.popmart.com/images/boxPC/bigBox/crow_box.png?x-oss-process=image/format,webp"></img>
          </div>
        </div>

        <div>
          {/* centered grid stays same size */}
          <div className="relative w-[23.958333333333336vw] h-[26.041666666666668vw] mx-auto">
            <img className="relative w-[23.958333333333336vw] h-[26.041666666666668vw] mx-auto" src="https://global-static.popmart.com/globalAdmin/1751420904527____set_main_pic____.png"></img>
            <div className="grid grid-cols-4 grid-rows-3 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  className="hover:scale-105 transition-transform focus:outline-none"
                >
                  <Image
                    src="https://global-static.popmart.com/globalAdmin/1751420904525____box_pic_with_shadow____.png"
                    alt={`Box ${i + 1}`}
                    width={size.width}
                    height={size.height}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* right Side: desc card */}
      <div className="w-[26.25vw] min-h-[19.6875vw] pt-[1.25vw] pl-[2.5vw] flex flex-col">
        <div>

          <div className="select-none relative text-[1.04167vw] font-bold mb-4 leading-[1.35417vw] pr-[1.875vw]"

          >SKULLPANDA The Paradox Series Figures
          </div>

          <div className="select-none font-dinpro mt-[0.625vw] font-semibold text-[1.25vw] leading-[1.25vw] text-[#d2001e]">
          $19.99
          </div>

          <span className="select-none font-dinpro text-[#d2001e] bg-[#fff1f3] inline-block px-[.10417vw] py-[.41667vw] mt-[0.72917vw] text-[0.72917vw] leading-[1.04167vw]">
          Free Shipping on Orders $29.99+
          </span>

        </div>

        <div className="mt-[1.77083vw]">
          <button className="select-none hover:bg-[#222] text-[#fff] bg-[#000] w-full h-[3.125vw] text-[0.83333vw] text-center mt-[0.83333vw] font-bold cursor-pointer">
            Pick One to Shake
          </button>

          <button className="select-none hover:bg-[#eee] text-[#000] bg-[#fff] w-full h-[3.125vw] text-[0.83333vw] text-center mt-[0.83333vw] font-bold border border-black cursor-pointer">
            Buy Multiple Boxes
          </button>

          <div className="select-none text-[0.83333vw] my-[0.625vw] text-center font-normal">
            No duplicates if picking from the SAME SET
          </div>

          <div className="cursor-pointer mt-[0.83333vw] text-center underline font-semibold text-[0.72917vw] leading-[0.72917vw] text-[#666]">
            How to Play
          </div>
        </div>


      </div>

    </div>

    {/* swiper container */}
    <div className="mt-[1.66667vw]">
      <div className="w-[75vw] mx-auto relative shadow-[inset_1px_1px_0.26042vw_0.10417vw_rgba(0,0,0,0.04)] rounded-[0.625vw] p-[1.04167vw] overflow-hidden">
        <div className="overflow-initial">
          <div className="">

            {/* sorry but next... swipe swipe swipe swipe */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView="auto"
              onSwiper={handleSwipe}
              onSlideChange={handleSwipe}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              grabCursor={true}
              resistance={true}
              resistanceRatio={0.85}
              threshold={10}
              style={{ overflow: 'visible' }}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i} style={{ width: '8.85417vw', height: '10.41667vw', marginRight: '0.52083vw', cursor: 'pointer', position: 'relative' }}>
                  <div className="w-[7.5vw] h-[7.5vw] mt-[0.78125vw] mx-auto">
                    <div className="relative inline-block">
                      <img src={slide.src} alt={slide.name} />
                    </div>
                    <div className="mt-[0.52083vw] h-[2.08333vw] text-center text-[0.72917vw] font-normal text-[#000] leading-[1.04167vw] flex justify-center align-center">
                      {slide.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* prev arrow */}
            <img
              className={`swiper-button-prev absolute top-[50%] left-0 rotate-180 w-[2.39583vw] h-[2.39583vw] cursor-pointer z-10 mt-[-22px] transition-opacity duration-300 ${
                atStart ? 'opacity-20' : 'opacity-80'
              }`}
              src="https://cdn-global.popmart.com/images/boxPC/bigBox/swiperRightArrow.png"
              alt="Prev"
            />

            {/* next arrow */}
            <img
              className={`swiper-button-next absolute top-[50%] right-0 w-[2.39583vw] h-[2.39583vw] cursor-pointer z-10 mt-[-22px] transition-opacity duration-300 ${
                atEnd ? 'opacity-20' : 'opacity-80'
              }`}
              src="https://cdn-global.popmart.com/images/boxPC/bigBox/swiperRightArrow.png"
              alt="Next"
            />
          </div>

        </div>
      </div>
    </div>

    {/* bottom info container */}
    <div className="w-[62.5vw] mt-[3.125vw] mx-auto">
      {/* info collapse container */}
      <div className="select-text border-t border-[#eee]">
        <div className="relative z-1">
          {/* accordion */}
          <Accordion.Root
            type="single"
            collapsible
            className="bg-white border-b"
            defaultValue="details"
          >
            <Accordion.Item value="details">
              <Accordion.Header>
                <Accordion.Trigger className="w-full bg-[#fff] pt-[1.25vw] pr-[0.625vw] pb-[1.25vw] flex flex-nowrap items-start text-[rgba(0,0,0,.85)] leading-[1.5715] font-semibold text-[0.93333vw] cursor-pointer group">
                  {/* header text */}
                  <span className="flex-auto pl-[0.625vw]">DETAIL INFORMATION</span>

                  {/* icon */}
                  <div className="w-[1vw] h-[1vw] transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <img
                      className="align-top"
                      src="https://cdn-global-naus.popmart.com/global-web/naus-prod/assets/images/icons/collapse_arrow_down.png?x-oss-process=image/format,webp"
                      alt="Toggle Arrow"
                    />
                  </div>
 
                </Accordion.Trigger>

                {/* content */}
                <Accordion.Content className="text-[14px] leading-[1.5715] list-none tabular-nums ">
                  <div className="pt-[0.83333vw] pr-[0.83333vw] pb-[0.83333vw] text-[0.83333vw] font-normal leading-[2.1875vw] text-ellipsis overflow-hidden">
                    <p>Brand: POP MART</p>
                    <p>Release Date: June 27, 2025</p>
                    <p>SIZE: Height: 7.5-11cm / 2.95-4.33inches</p>
                    <p>MATERIAL: PVC / ABS</p>
                    <p className="mt-[1em]">
                      *Due to differences in measurement methods, the actual measurements may vary
                      within a normal range of 0.4 - 1.2 inches. Actual product size and color may
                      appear different due to lighting, display screen specifications, photography
                      style, and other factors. Displayed picture and size are for reference only.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[0.83333vw] font-regular leading-[2.0833vw] underline cursor-pointer hover:text-gray-600">View Product Details</span>
                    <span className="text-[0.83333vw] font-regular leading-[2.0833vw] underline cursor-pointer hover:text-gray-600">What's a blind box?</span>
                  </div>
                </Accordion.Content>
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item value="notice" className="border-t border-[#eee]">
              <Accordion.Header>
                <Accordion.Trigger className="w-full bg-[#fff] pt-[1.25vw] pr-[0.625vw] pb-[1.25vw] flex flex-nowrap items-start text-[rgba(0,0,0,.85)] leading-[1.5715] font-semibold text-[0.93333vw] cursor-pointer group">
                  {/* header text */}
                  <span className="flex-auto pl-[0.625vw]">POP NOW Purchase Notice</span>

                  {/* icon */}
                  <div className="w-[1vw] h-[1vw] transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <img
                      className="align-top"
                      src="https://cdn-global-naus.popmart.com/global-web/naus-prod/assets/images/icons/collapse_arrow_down.png?x-oss-process=image/format,webp"
                      alt="Toggle Arrow"
                    />
                  </div>
 
                </Accordion.Trigger>

                {/* content */}
                <Accordion.Content className="text-[14px] leading-[1.5715] list-none tabular-nums ">
                  <div className="pt-[0.83333vw] pr-[0.83333vw] pb-[0.83333vw] text-[0.83333vw] font-normal leading-[2.1875vw] text-ellipsis overflow-hidden">
                    <p>1.Purchasing blind box products involves randomness. After payment, the specific edition will be revealed when the box is opened online. These items are not eligible for returns without cause. If there are quality defects, please contact customer service w</p>
                    <p>2.The shipping time for items with special instructions will follow the specified time. For specific rules on POP NOW, please refer to the detailed information in Shipping Rates & Policies (Click 「Read More」below to view details).</p>
                    <p>3.Rules for underage consumers: Minor must have parental consent for all box drawing activities and must be accompanied by a guardian.</p>
                    <p>4.Whether purchasing a whole set or a single box, items will be shipped in individual boxes.</p>
                    <p>5.Please ensure that your address can receive deliveries normally. If logistics are interrupted due to force majeure, we will fulfill shipping obligations once logistics resume.</p>
                    <p>6.The items already unboxed online are not eligible for refunds. Due to the unique nature of blind boxes, carefully read the after-sales policy.</p>
                    <p>7. Currently, POP NOW is only available in the United States, Canada, Thailand, Singapore, Malaysia, and the Philippines.
Please carefully read the above information. Your purchase signifies acceptance of the terms above. Thank you for your support.</p>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[0.83333vw] font-regular leading-[2.0833vw] underline cursor-pointer hover:text-gray-600">View Product Details</span>
                    <span className="text-[0.83333vw] font-regular leading-[2.0833vw] underline cursor-pointer hover:text-gray-600">What's a blind box?</span>
                  </div>
                </Accordion.Content>
              </Accordion.Header>
            </Accordion.Item>

          </Accordion.Root>
        </div>
      </div>

      {/* gallery */}
      <div>
        <div className="mb-[6.25vw]">
          {/* info container non collapsible */}
          <div>
            <div className="mt-[2.08333vw] overflow-hidden"></div>
            {/* item content */}
            <div className="mt-[3.125vw] relative">
              <div className="w-[62.5vw] h-[35.15625vw] mb-[5.20833vw]">
                {/* video */}
                <div>
                  <video src={'https://prod-america-res.popmart.com/default/20250620_172638_723736____skullpanda____.mp4'}></video>
                </div>
              </div>
              <div className="w-full">
                {/* photo */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);



}
