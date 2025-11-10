
import AnimatedSection from '../../../components/base/AnimatedSection';

export default function ProcessSection() {
  const benefits = [
    {
      number: "1",
      title: "Doanh thu ổn định quanh năm",
      description: "Không phụ thuộc mùa vụ"
    },
    {
      number: "2", 
      title: "Tăng giá trị bất động sản",
      description: "Nghỉ dưỡng cao cấp"
    },
    {
      number: "3",
      title: "Tiết kiệm thời gian", 
      description: "Công sức – nhân sự quản lý"
    },
    {
      number: "4",
      title: "Báo cáo & vận hành",
      description: "Minh bạch, chuyên nghiệp"
    },
    {
      number: "5",
      title: "Xây dựng thương hiệu",
      description: "Cá nhân cho từng villa"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-contact-section]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-orange-50">
      <div className="md:px-[40px] px-[16px] max-w-screen-2xl mx-auto relative">
        <div>
          <div className="flex items-center justify-center relative">
            <div className="bg-gray-300 h-[1px] w-full"></div>
            <div className="absolute"></div>
          </div>
        </div>
        
        <div className="pt-[30px]">
          <AnimatedSection className="flex flex-shrink-0 items-center gap-3">
            <div className="w-[14px] h-[14px] bg-orange-500 rounded-sm"></div>
            <span className="text-[16px] font-medium leading-[1.5] text-gray-600">Lợi ích khi hợp tác cùng Trường Thành Phát Travel</span>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row pt-[30px] gap-[40px] lg:gap-[80px]">
            <AnimatedSection delay={200} className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black flex-[1.5] lg:flex-2">
              <div>Lợi ích khi hợp tác cùng Trường Thành Phát Travel</div>
            </AnimatedSection>
            
            <div className="flex flex-col gap-[40px] flex-1">
              <AnimatedSection delay={400} className="text-[18px] text-gray-600">
                Trường Thành Phát Travel đồng hành cùng khách hàng từ ý tưởng đến trải nghiệm thực tế - 
                để mỗi chuyến đi vừa an toàn, vừa đáng nhớ và tạo dấu ấn khác biệt.
              </AnimatedSection>
              
              <AnimatedSection delay={600}>
                <button 
                  onClick={scrollToContact}
                  className="h-[54px] px-[5px] rounded-full text-black flex gap-[14px] items-center relative group bg-white cursor-pointer"
                >
                  <div className="absolute w-[44px] transition-all duration-300 h-[44px] left-[5px] rounded-full bg-orange-500 group-hover:w-[calc(100%-10px)] group-focus:w-[calc(100%-10px)]"></div>
                  <span className="w-[44px] h-[44px] rounded-full flex items-center justify-center z-10">
                    <i className="ri-phone-line text-white"></i>
                  </span>
                  <span className="pr-[20px] z-10 group-hover:text-white group-focus:text-white transition-colors font-semibold whitespace-nowrap">Liên hệ hợp tác</span>
                </button>
              </AnimatedSection>
            </div>
          </div>
          
          <div className="lg:px-[110px] py-[60px]">
            <div className="md:hidden">
              <div className="flex flex-col gap-6">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={index} delay={800 + index * 200}>
                    <div className="z-10 flex-1">
                      <div className="max-w-[300px] mx-auto flex flex-col gap-[24px] items-center text-center">
                        <div>
                          <div className="text-[24px] font-medium text-orange-500 leading-[1.4] pb-[12px]">{benefit.title}</div>
                          <div className="text-[18px] text-black leading-[1.5]">{benefit.description}</div>
                        </div>
                        <div className="w-[64px] h-[64px] border-[8px] border-orange-500/20 rounded-full">
                          <div className="text-[20px] font-medium leading-[1.4] text-white flex items-center justify-center bg-orange-500 size-full rounded-full">
                            {benefit.number}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
            
            <AnimatedSection delay={800} className="flex flex-wrap">
              {benefits.map((benefit, index) => (
                <div key={index} className="z-10 flex-1 hidden md:block" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="max-w-[300px] mx-auto flex flex-col gap-[24px] items-center text-center">
                    <div>
                      <div className="text-[24px] font-medium text-orange-500 leading-[1.4] pb-[12px]">{benefit.title}</div>
                      <div className="text-[18px] text-black leading-[1.5]">{benefit.description}</div>
                    </div>
                    <div className="w-[64px] h-[64px] border-[8px] border-orange-500/20 rounded-full">
                      <div className="text-[20px] font-medium leading-[1.4] text-white flex items-center justify-center bg-orange-500 size-full rounded-full">
                        {benefit.number}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="z-0 -my-[32px] md:h-[200px] px-[24px] py-[32px] md:p-0 w-full rounded-full border border-gray-300 hidden md:flex">
                <div className="size-full flex items-center justify-center">
                  <div className="md:text-[32px] text-[20px] md:font-semibold font-medium text-orange-500 leading-[1.2] text-center max-w-[420px]">
                    Quản lý villa nghỉ dưỡng - Đồng hành từ ý tưởng đến trải nghiệm
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
