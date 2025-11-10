import AnimatedSection from "../../../components/base/AnimatedSection";
import img from "../../../components/images/z7198753997143_79545ee9d37a5b22538f065168d9fc68.jpg";
import img1 from "../../../components/images/z7198753997132_dbd25767aeffea5335892a9f30a23e34.jpg";
import img2 from "../../../components/images/z7198753997187_469b253d0bb7f450ad00737099670fa2.jpg";
import img3 from "../../../components/images/z7198753997116_4ec6308123666655f84584076e280b69.jpg";

export default function GrowthSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-[16px] max-w-screen-2xl mx-auto md:h-[90vh] relative md:py-[80px] md:mt-[100px] py-[144px]">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Ảnh 1 - Góc trên bên trái */}
        <AnimatedSection
          delay={200}
          className="lg:w-[35vh] max-w-[330px] w-[160px] absolute lg:top-[10%] top-[20px] left-[1%]"
        >
          <img src={img} alt="Villa cao cấp 1" className="w-full h-auto" />
        </AnimatedSection>

        {/* Ảnh 2 - Bên phải, cao hơn ảnh 1 */}
        <AnimatedSection
          delay={400}
          className="lg:w-[34vh] max-w-[320px] w-[165px] absolute lg:top-0 top-[60px] right-[0]"
        >
          <img src={img1} alt="Villa cao cấp 2" className="w-full h-auto" />
        </AnimatedSection>

        {/* Ảnh 3 - Góc dưới bên trái, thấp hơn ảnh 1 */}
        <AnimatedSection
          delay={600}
          className="lg:w-[40vh] max-w-[370px] w-[190px] absolute lg:bottom-[15%] bottom-[35px] left-0"
        >
          <img src={img2} alt="Villa cao cấp 3" className="w-full h-auto" />
        </AnimatedSection>

        {/* Ảnh 4 - Góc dưới bên phải */}
        <AnimatedSection
          delay={800}
          className="lg:w-[30vh] max-w-[310px] w-[135px] absolute lg:bottom-[24%] bottom-0 lg:right-[4%] right-[10px]"
        >
          <img src={img3} alt="Villa cao cấp 4" className="w-full h-auto" />
        </AnimatedSection>
      </div>

      <div className="flex flex-col gap-[32px] justify-center items-center text-center max-w-[490px] mx-auto h-full z-10 relative">
        <AnimatedSection className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black text-center text-[#0C9DE0]">
          <div>Hơn 100+ chủ villa đã đồng hành cùng Trường Thành Phát</div>
        </AnimatedSection>

        <AnimatedSection
          delay={300}
          className="md:text-[18px] text-[16px] leading-[1.5] text-gray-600"
        >
          Từ villa đơn lẻ đến chuỗi biệt thự nghỉ dưỡng cao cấp, Trường Thành
          Phát Travel đã giúp hàng chục chủ đầu tư tối ưu vận hành – tăng doanh
          thu – nâng tầm giá trị bất động sản.
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <button
            onClick={scrollToContact}
            className="h-[54px] px-[5px] rounded-full text-black flex gap-[14px] items-center relative group bg-white cursor-pointer"
          >
            <div className="absolute w-[44px] transition-all duration-300 h-[44px] left-[5px] rounded-full bg-[#0C9DE0]  group-hover:w-[calc(100%-10px)] group-focus:w-[calc(100%-10px)]"></div>
            <span className="w-[44px] h-[44px] rounded-full flex items-center justify-center z-10">
              <i className="ri-phone-line text-white"></i>
            </span>
            <span
              className="pr-[20px] z-10 group-hover:text-white group-focus:text-white transition-colors font-semibold whitespace-nowrap"
              onClick={scrollToContact}
            >
              Liên hệ Trường Thành Phát
            </span>
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
}
