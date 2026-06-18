import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function HeroCarousel({
  images = [],
  mobileImages = [],
  slides = [],
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

  const hasSlides = slides.length > 0;

  if (hasSlides) {
    const activeSlides = slides.map((s) => ({
      ...s,
      src: isMobile && s.mobileSrc ? s.mobileSrc : s.src,
    }));

    const slideCount = activeSlides.length;

    return (
      <div className={`w-full bg-[var(--color-background)] ${className}`}>
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
          loop={slideCount > 1}
          className=" max-h-[400px] md:max-h-[500px]"
        >
          {activeSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.src}
                  alt={slide.title || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {(slide.title || slide.subtitle) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16">
                    {slide.title && (
                      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-white max-w-2xl leading-tight">
                        {slide.title}
                      </h2>
                    )}
                    {slide.subtitle && (
                      <p className="mt-2 md:mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  const activeImages =
    isMobile && mobileImages.length > 0 ? mobileImages : images;

  if (!activeImages || activeImages.length === 0) {
    return null;
  }

  return (
    <div className={`w-full bg-[var(--color-background)] ${className}`}>
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
  );
}
