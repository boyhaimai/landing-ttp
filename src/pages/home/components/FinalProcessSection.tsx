export default function FinalProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Liên hệ & khảo sát thực tế",
      description: "Chúng tôi đến tận nơi để đánh giá hiện trạng villa.",
    },
    {
      number: "2",
      title: "Tư vấn mô hình phù hợp",
      description: "Đề xuất phương án khai thác, định vị & gói hợp tác tối ưu.",
    },
    {
      number: "3",
      title: "Ký kết hợp tác & setup vận hành",
      description: "Chuẩn bị hạ tầng, đội ngũ, hệ thống marketing.",
    },
    {
      number: "4",
      title: "Bắt đầu khai thác & chia sẻ lợi nhuận minh bạch",
      description:
        "Báo cáo định kỳ, chăm sóc khách hàng & duy trì chất lượng dịch vụ.",
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
      <div>
        <div className="flex items-center justify-center relative">
          <div className="bg-gray-300 h-[1px] w-full"></div>
          <div className="absolute"></div>
        </div>
      </div>

      <div className="pt-[30px]">
        <div className="flex flex-shrink-0 items-center gap-3">
          <div className="w-[14px] h-[14px] bg-orange-500 rounded-sm"></div>
          <span className="text-[16px] font-medium leading-[1.5] text-gray-600">
            Quy trình hợp tác đơn giản
          </span>
        </div>

        <div className="flex flex-col lg:flex-row pt-[30px] gap-[40px] lg:gap-[80px]">
          <div className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black flex-[1.5] lg:flex-2">
            <div>Quy trình hợp tác đơn giản</div>
          </div>

          <div className="flex flex-col gap-[40px] flex-1">
            <div className="text-[18px] text-gray-600">
              Chất lượng dịch vụ và trải nghiệm du lịch của TTP Travel không chỉ
              là lời hứa - mà là cam kết thực tế.
            </div>

            <div>
              <button className="h-[54px] px-[5px] rounded-full text-black flex gap-[14px] items-center relative group bg-gray-100">
                <div className="absolute w-[44px] transition-all duration-300 h-[44px] left-[5px] rounded-full bg-orange-500 group-hover:w-[calc(100%-10px)] group-focus:w-[calc(100%-10px)]"></div>
                <span className="w-[44px] h-[44px] rounded-full flex items-center justify-center z-10">
                  <i className="ri-plane-line text-white"></i>
                </span>
                <span
                  className="pr-[20px] z-10 group-hover:text-white group-focus:text-white transition-colors font-semibold whitespace-nowrap"
                  onClick={scrollToContact}
                >
                  Đặt tour ngay
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-[40px] pt-[0px] sm:pt-[80px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex sm:flex-col gap-[16px] group cursor-pointer"
            >
              <div className="flex items-center relative sm:w-full sm:my-[30px] lg:my-[60px]">
                <div className="sm:h-[3px] h-full sm:w-full w-[3px] bg-gray-300"></div>
                <div className="absolute w-0 bg-orange-500 group-hover:w-full h-[3px] transition-all duration-500"></div>
                <div className="absolute sm:left-[32px] sm:top-[-15px] left-[-15px] top-[20px] w-[32px] h-[32px] rounded-[32px] bg-white flex items-center justify-center">
                  <div className="w-[16px] h-[16px] rounded-[16px] bg-orange-500"></div>
                </div>
              </div>

              <div className="flex sm:flex-col gap-[16px] pt-[20px] sm:pt-0 sm:pl-[6px] pl-0 pb-[16px] sm:pb-0">
                <div className="text-black sm:text-[32px] text-[20px] font-semibold leading-[1.2]">
                  {step.number}
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div className="text-black sm:text-[24px] text-[20px] font-semibold leading-[1.2] lg:min-h-[78px]">
                    {step.title}
                  </div>
                  <div className="text-gray-600 sm:text-[18px] text-[16px] leading-[1.5]">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
