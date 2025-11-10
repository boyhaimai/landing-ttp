import AnimatedSection from "../../../components/base/AnimatedSection";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "ri-settings-3-line",
      title: "Tư vấn – Setup – Định vị sản phẩm",
      description:
        "Khảo sát thực tế & xác định khách hàng mục tiêu. Định vị phong cách & concept villa phù hợp xu hướng thị trường. Tư vấn cải tạo, decor, setup dịch vụ chuẩn 4–5★",
    },
    {
      icon: "ri-user-settings-line",
      title: "Vận hành & Quản lý chuyên nghiệp",
      description:
        "Quản lý toàn bộ lịch đặt – check-in/out – dọn dẹp – bảo dưỡng. Đội ngũ nhân sự giàu kinh nghiệm, làm việc 24/7. Đảm bảo trải nghiệm khách hàng nhất quán, nâng cao review & rating online",
    },
    {
      icon: "ri-megaphone-line",
      title: "Marketing & Bán phòng hiệu quả",
      description:
        "Đăng bán & tối ưu hiển thị trên các nền tảng: Airbnb, Booking, Traveloka, Agoda. Chạy quảng cáo chuyên biệt (Facebook, TikTok, Google) theo từng mùa du lịch. Đội ngũ media sản xuất hình ảnh, video review & quản lý nội dung chuyên nghiệp",
    },
    {
      icon: "ri-bar-chart-line",
      title: "Báo cáo & Chia sẻ doanh thu minh bạch",
      description:
        "Theo dõi booking, doanh thu, chi phí theo thời gian thực. Báo cáo tự động gửi định kỳ cho chủ đầu tư. Chính sách chia sẻ lợi nhuận linh hoạt & minh bạch, ưu tiên quyền lợi chủ villa",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:px-[40px] px-[16px] md:py-[80px] py-[40px] max-w-screen-2xl mx-auto relative">
      <div className="md:hidden">
        <div className="flex items-center justify-center relative">
          <div className="bg-gray-300 h-[1px] w-full"></div>
          <div className="absolute"></div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-start justify-between gap-8 pt-[40px]">
        <AnimatedSection className="flex flex-shrink-0 items-center gap-3">
          <div className="w-[14px] h-[14px] bg-orange-500 rounded-sm"></div>
          <span className="text-[16px] font-medium leading-[1.5] text-gray-600">
            Giải pháp toàn diện cho chủ villa
          </span>
        </AnimatedSection>

        <div className="lg:w-[72%] flex flex-col gap-[40px]">
          <AnimatedSection delay={200}>
            <div className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black">
              <div>
                Trường Thành Phát Travel - Giải pháp quản lý & vận hành villa
                nghỉ dưỡng toàn diện
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div>
              <button className="h-[54px] px-[5px] rounded-full text-black flex gap-[14px] items-center relative group bg-gray-100">
                <div className="absolute w-[44px] transition-all duration-300 h-[44px] left-[5px] rounded-full bg-orange-500 group-hover:w-[calc(100%-10px)] group-focus:w-[calc(100%-10px)]"></div>
                <span className="w-[44px] h-[44px] rounded-full flex items-center justify-center z-10">
                  <i className="ri-phone-line text-white"></i>
                </span>
                <span
                  className="pr-[20px] z-10 group-hover:text-white group-focus:text-white transition-colors font-semibold whitespace-nowrap"
                  onClick={scrollToContact}
                >
                  Tư vấn miễn phí
                </span>
              </button>
            </div>
          </AnimatedSection>

          <div className="md:grid flex flex-col md:gap-[60px] gap-[32px] auto-rows-fr grid-cols-[repeat(2,minmax(50px,1fr))] grid-rows-2 py-[40px] relative">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={600 + index * 200}>
                <div className="h-full">
                  <div className="h-full flex flex-col bg-gradient-to-b from-orange-50 to-white border border-orange-100 shadow-[0px_26px_26px_0px_rgba(196,196,196,0.09),0px_162px_45px_0px_rgba(196,196,196,0)] px-[32px] py-[40px] rounded-[16px] transition-all duration-300 hover:border-2 hover:border-orange-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <i className={`${feature.icon} text-white text-xl`}></i>
                      </div>
                    </div>
                    <div className="md:mt-6 mt-4 text-[28px] md:min-h-[78px] font-semibold text-gray-800 leading-[1.2]">
                      {feature.title}
                    </div>
                    <div className="text-lg text-gray-600 pt-4">
                      <ul className="list-disc pl-5">
                        {feature.description.split(". ").map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
