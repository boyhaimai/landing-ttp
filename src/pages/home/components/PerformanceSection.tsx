import { useState, useEffect, useRef } from "react";
import AnimatedSection from "../../../components/base/AnimatedSection";
import hl1 from "../../../components/images/z7198753978278_796da9d053a1bf0fcee2db621176f161.jpg";
import hl2 from "../../../components/images/z7198753997122_ab66f7b446f8751803080d7a2ed2cb71.jpg";
import hl3 from "../../../components/images/z7198753997150_3af7283f0f3e7a38a5244da7cb08386f.jpg";

export default function PerformanceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      rating: 5,
      text: "Dịch vụ tuyệt vời! Tour được tổ chức rất chuyên nghiệp.",
      author: "Anh Minh",
      role: "Khách hàng thường xuyên",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20Asian%20businessman%20in%20suit%20smiling%20confidently%2C%20corporate%20headshot%2C%20clean%20background%2C%20friendly%20expression%2C%20business%20portrait&width=80&height=80&seq=avatar-1&orientation=squarish",
    },
    {
      rating: 5,
      text: "Hướng dẫn viên nhiệt tình, lịch trình hợp lý, giá cả phải chăng.",
      author: "Chị Lan",
      role: "Du khách",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20Asian%20businesswoman%20smiling%20warmly%2C%20corporate%20headshot%2C%20clean%20background%2C%20friendly%20expression%2C%20business%20portrait&width=80&height=80&seq=avatar-2&orientation=squarish",
    },
    {
      rating: 5,
      text: "Chuyến đi tuyệt vời với gia đình. Sẽ quay lại lần sau!",
      author: "Anh Tuấn",
      role: "Khách hàng VIP",
      avatar:
        "https://readdy.ai/api/search-image?query=Happy%20Asian%20family%20man%20smiling%2C%20casual%20business%20attire%2C%20clean%20background%2C%20friendly%20expression%2C%20customer%20portrait&width=80&height=80&seq=avatar-3&orientation=squarish",
    },
    {
      rating: 5,
      text: "Dịch vụ chăm sóc khách hàng tận tình, tour chất lượng cao.",
      author: "Chị Hương",
      role: "Khách hàng mới",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20with%20elegant%20style%2C%20business%20casual%2C%20clean%20background%2C%20confident%20smile%2C%20customer%20portrait&width=80&height=80&seq=avatar-4&orientation=squarish",
    },
    {
      rating: 5,
      text: "Giá cả hợp lý, dịch vụ vượt mong đợi. Rất hài lòng!",
      author: "Anh Đức",
      role: "Khách hàng thường xuyên",
      avatar:
        "https://readdy.ai/api/search-image?query=Young%20Asian%20professional%20man%20smiling%2C%20modern%20business%20style%2C%20clean%20background%2C%20approachable%20expression%2C%20customer%20portrait&width=80&height=80&seq=avatar-5&orientation=squarish",
    },
    {
      rating: 5,
      text: "Đội ngũ hỗ trợ 24/7 rất chuyên nghiệp và nhiệt tình.",
      author: "Chị Mai",
      role: "Du khách",
      avatar:
        "https://readdy.ai/api/search-image?query=Elegant%20Asian%20businesswoman%20with%20professional%20appearance%2C%20clean%20background%2C%20warm%20smile%2C%20customer%20service%20representative&width=80&height=80&seq=avatar-6&orientation=squarish",
    },
  ];

  const stats = [
    {
      number: "98%",
      title: "Mức độ hài lòng của khách hàng",
      subtitle: "(+18% so với trung bình ngành)",
      image: hl1,
    },
    {
      number: "37%",
      title: "Doanh thu đến từ khách hàng quay lại",
      subtitle: "(+18% so với trung bình ngành)",
      image: hl2,
    },
    {
      number: "84%",
      title: "Sẵn sàng giới thiệu cho người khác",
      subtitle: "(+18% so với trung bình ngành)",
      image: hl3,
    },
  ];

  // Auto scroll testimonials
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    const maxScroll = scrollHeight - clientHeight;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      container.scrollTop = scrollPosition;
    };

    const intervalId = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:px-[40px] px-[16px] md:py-[80px] py-[40px] max-w-screen-2xl mx-auto relative">
      <div>
        <div className="flex items-center justify-center relative">
          <div className="bg-gray-300 h-[1px] w-full"></div>
          <div className="absolute"></div>
        </div>
      </div>

      <div className="pt-[30px]">
        <AnimatedSection className="flex flex-shrink-0 items-center gap-3">
          <div className="w-[14px] h-[14px] bg-[#0C9DE0]  rounded-sm"></div>
          <span className="text-[16px] font-medium leading-[1.5] text-gray-600">
            Dịch vụ hiệu quả
          </span>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row pt-[30px] gap-[40px] lg:gap-[80px]">
          <AnimatedSection
            delay={200}
            className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black flex-[1.5] lg:flex-2"
          >
            <div>
              Khách hàng hài lòng
              <br />
              Dịch vụ chất lượng cao
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-[40px] flex-1">
            <AnimatedSection delay={400} className="text-[18px] text-gray-600">
              Chất lượng dịch vụ và trải nghiệm du lịch của TTP Travel không chỉ
              là lời hứa - mà là con số thực tế.
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <button className="h-[54px] px-[5px] rounded-full text-black flex gap-[14px] items-center relative group bg-gray-100">
                <div className="absolute w-[44px] transition-all duration-300 h-[44px] left-[5px] rounded-full bg-[#0C9DE0]  group-hover:w-[calc(100%-10px)] group-focus:w-[calc(100%-10px)]"></div>
                <span className="w-[44px] h-[44px] rounded-full flex items-center justify-center z-10">
                  <i className="ri-phone-line text-white"></i>
                </span>
                <span className="pr-[20px] z-10 group-hover:text-white group-focus:text-white transition-colors font-semibold whitespace-nowrap" onClick={scrollToContact}>
                  Tư vấn miễn phí
                </span>
              </button>
            </AnimatedSection>
          </div>
        </div>

        <div className="pt-[80px] grid gap-[40px] grid-cols-1 lg:grid-cols-4">
          {/* Testimonial Scrolling Container */}
          <AnimatedSection delay={800} className="lg:col-span-1">
            <div
              ref={scrollContainerRef}
              className="h-[600px] overflow-hidden"
              style={{ scrollBehavior: "auto" }}
            >
              <div className="flex flex-col gap-[24px] pb-[600px]">
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white p-[24px] rounded-[12px] shadow-[0px_8px_8px_-4px_rgba(65,25,10,0.03),0px_24px_32px_-4px_rgba(65,25,10,0.08)] min-h-[200px] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-[4px] mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i
                              key={i}
                              className="ri-star-fill text-yellow-400 text-lg"
                            ></i>
                          ))}
                        </div>
                        <div className="text-black text-[16px] leading-[1.4] tracking-[-0.04px] py-[12px]">
                          "{testimonial.text}"
                        </div>
                      </div>
                      <div className="flex gap-[12px] pt-[16px] items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-black text-[14px] font-bold leading-[1.5]">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-600 text-[12px] leading-[1.5]">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats with Staggered Layout */}
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              delay={1000 + index * 200}
              className="lg:col-span-1"
            >
              <div
                className={`flex flex-col gap-[20px] ${
                  index % 2 === 1 ? "lg:mt-[60px]" : ""
                }`}
              >
                <div className="h-[200px] rounded-[8px] overflow-hidden">
                  <img
                    src={stat.image}
                    alt={stat.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col gap-[8px] p-[8px]">
                  <div className="text-[#0C9DE0] text-[48px] font-bold leading-[1.1]">
                    {stat.number}
                  </div>
                  <div className="text-black text-[18px] leading-[1.3] font-medium">
                    {stat.title}
                  </div>
                  <div className="text-gray-500 text-[14px] leading-[1.4]">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
