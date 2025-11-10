
import { useState, useRef, useEffect } from 'react';
import AnimatedSection from '../../../components/base/AnimatedSection';
import img from '../../../components/images/z7198753997133_9a49685288f148d2a22b8bb2c7e667bf.jpg';
import img1 from '../../../components/images/z7198753997114_80e6e4c3a5dc12d464a14a0cdcd4c8f3.jpg';
import img2 from '../../../components/images/z7198753997154_319835783ec874a058bab789407c91d8.jpg';
import img3 from '../../../components/images/z7198753997167_699f02fd051db19e904bdca5e6a22da1.jpg';
import img4 from '../../../components/images/z7198753997147_7bb9e7416eb470a17dcea77a7bc944e6.jpg';


export default function BrandEcosystem() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { number: "50+", label: "Điểm đến" },
    { number: "1,000+", label: "Tour trên toàn quốc" },
    { number: "10+", label: "Thành phố" }
  ];

  const ecosystemSlides = [
    {
      title: "Dịch vụ Tour & Du lịch",
      image: img,
      description: "Tour trọn gói, tour tự túc, tour theo nhóm"
    },
    {
      title: "Đặt phòng & Lưu trú",
      image: img4,
      description: "Khách sạn, resort, homestay, nhà nghỉ"
    },
    {
      title: "Vé máy bay & Di chuyển",
      image: img2,
      description: "Vé máy bay, xe khách, tàu hỏa, thuê xe"
    },
    {
      title: "Visa & Bảo hiểm",
      image: img3,
      description: "Làm visa, bảo hiểm du lịch, hỗ trợ thủ tục"
    },
    {
      title: "Hướng dẫn viên & Trải nghiệm",
      image: img1,
      description: "Hướng dẫn viên chuyên nghiệp, trải nghiệm địa phương"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % ecosystemSlides.length);
      }
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isDragging, ecosystemSlides.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    if (translateX > threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (translateX < -threshold && currentSlide < ecosystemSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (translateX < -threshold && currentSlide === ecosystemSlides.length - 1) {
      setCurrentSlide(0);
    } else if (translateX > threshold && currentSlide === 0) {
      setCurrentSlide(ecosystemSlides.length - 1);
    }
    
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    if (translateX > threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (translateX < -threshold && currentSlide < ecosystemSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (translateX < -threshold && currentSlide === ecosystemSlides.length - 1) {
      setCurrentSlide(0);
    } else if (translateX > threshold && currentSlide === 0) {
      setCurrentSlide(ecosystemSlides.length - 1);
    }
    
    setTranslateX(0);
  };

  return (
    <div className="md:px-[40px] px-[16px] md:py-[80px] py-[40px] max-w-screen-2xl mx-auto relative">
      <AnimatedSection>
        <div>
          <div className="flex items-center justify-center relative">
            <div className="bg-gray-300 h-[1px] w-full"></div>
            <div className="absolute"></div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <div className="md:py-[60px] py-[30px] flex flex-col lg:items-center">
          <div className="flex flex-shrink-0 items-center gap-3">
            <div className="w-[14px] h-[14px] bg-orange-500 rounded-sm"></div>
            <span className="text-[16px] font-medium leading-[1.5] text-gray-600">Mạng lưới du lịch rộng khắp</span>
          </div>
          
          <div className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black lg:text-center pt-[30px]">
            <div>Phát triển mạnh mẽ</div>
          </div>
          
          <div className="flex lg:flex-row flex-col lg:items-center justify-between lg:pt-[60px] pt-[40px] gap-[24px] w-full">
            <div className="flex flex-col gap-[40px]">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={300 + index * 100}>
                  <div>
                    <div className="text-[72px] text-orange-500 font-semibold leading-[1.1]">{stat.number}</div>
                    <div className="text-[20px] text-gray-800 font-medium leading-[1.4]">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection delay={400}>
              <div className="max-w-[670px] mx-auto">
                <img 
                  src="https://static.readdy.ai/image/4a3482445aede2b455dbed1f5755971b/6142fea6888727afff2c71c74b5c9ace.png" 
                  alt="Bản đồ điểm đến du lịch TTP Travel" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <div className="flex-shrink-0 flex flex-col gap-[24px] lg:items-start items-center">
                <div className="flex flex-row items-center gap-[20px] w-[240px] lg:w-auto">
                  <div className="lg:w-[40px] w-[20px] lg:h-[40px] h-[20px] bg-orange-500 rounded-full flex-shrink-0"></div>
                  <div className="lg:text-[20px] text-[16px] font-medium leading-[1.4]">Đang hoạt động</div>
                </div>
                <div className="flex flex-row items-center gap-[20px] w-[240px] lg:w-auto">
                  <div className="lg:w-[40px] w-[20px] lg:h-[40px] h-[20px] bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="lg:text-[20px] text-[16px] font-medium leading-[1.4]">Kế hoạch mở rộng</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={700}>
        <div className="md:pt-[40px] pt-[20px]">
          <div className="relative">
            {/* Slide Container */}
            <div 
              ref={sliderRef}
              className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out gap-4"
                style={{ 
                  transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 16}px + ${isDragging ? translateX : 0}px))` 
                }}
              >
                {ecosystemSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[400px] md:h-[600px] object-cover pointer-events-none rounded-lg"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="p-6 md:p-8 text-white">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2 text-shadow-lg">{slide.title}</h3>
                        <p className="text-lg md:text-xl text-shadow-md">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
