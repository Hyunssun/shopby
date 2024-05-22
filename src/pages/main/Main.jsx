/*
page: 메인
path: /
*/

import { CategoriesHeader } from "../../components/nav/CategoriesHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import main_slide_banner01 from "../../assets/images/main-slide/main_slide_banner01.png";
import main_slide_banner02 from "../../assets/images/main-slide/main_slide_banner02.png";
import main_slide_banner03 from "../../assets/images/main-slide/main_slide_banner03.png";
import main_slide_banner04 from "../../assets/images/main-slide/main_slide_banner04.png";
import main_slide_banner05 from "../../assets/images/main-slide/main_slide_banner05.png";
import main_slide_banner06 from "../../assets/images/main-slide/main_slide_banner06.png";

const mainSlide = [];
for (let i = 1; i <= 6; i++) {
  mainSlide.push(`main_slide_banner0${i}`);
}
export const Main = () => {
  return (
    <div>
      <CategoriesHeader />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        rewind={true} // 끝에서 처음으로
        spaceBetween={0} // 간격
        slidesPerView={1} // 캐러셀의 갯수
        autoplay={{
          // 자동재생
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }} // 페이지네이션
      >
        {mainSlide.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img
                  src={eval(`main_slide_banner0${index + 1}`)}
                  width={"500px"}
                  alt={`main_slide_banner0${index + 1}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
