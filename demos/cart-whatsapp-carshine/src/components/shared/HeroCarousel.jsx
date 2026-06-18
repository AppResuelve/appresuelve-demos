import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function HeroCarousel({
  images = [],
  mobileImages = [],
  autoplay = true,
  autoplayInterval = 6000,
  showDots = true,
  showArrows = true,
  className = "",
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeImages =
    isMobile && mobileImages.length > 0 ? mobileImages : images;

  if (!activeImages || activeImages.length === 0) {
    return null;
  }

  return (
    <div className={`w-full bg-[var(--color-background)] ${className}`}>
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          navigation={showArrows && !isMobile ? {} : false}
          pagination={showDots ? { clickable: true } : false}
          autoplay={
            autoplay
              ? { delay: autoplayInterval, disableOnInteraction: true }
              : false
          }
          loop={activeImages.length > 1}
          className=" max-h-[400px] md:max-h-[450px]"
        >
          {activeImages.map((src, index) => (
            <SwiperSlide key={src}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
