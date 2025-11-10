
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    size: '',
    room: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d48ecqvjsic9gsa4uud0', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitMessage('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          address: '',
          size: '',
          room: ''
        });
      } else {
        setSubmitMessage('Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    } catch (error) {
      setSubmitMessage('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="lg:max-h-[900px] bg-cover bg-center mt-[80px] lg:mt-[160px] md:p-[40px] p-3 lg:p-0 flex justify-center text-start" style={{backgroundImage: "url('https://readdy.ai/api/search-image?query=Modern%20luxury%20villa%20resort%20with%20orange%20sunset%20sky%20background%2C%20professional%20hospitality%20business%20setting%2C%20warm%20lighting%2C%20contemporary%20architecture%2C%20peaceful%20atmosphere%2C%20high-end%20property%20management%20concept&width=1920&height=900&seq=contact-bg-001&orientation=landscape')"}}>
      <div className="container lg:translate-y-[-80px]">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 lg:p-[80px] md:p-[40px] p-4 flex lg:flex-row flex-col gap-[16px]">
          <div className="flex-1 lg:w-0">
            <div className="lg:text-[36px] text-[28px] text-white font-medium">Đăng ký tư vấn miễn phí ngay hôm nay!</div>
            <div className="lg:py-[20px] py-[15px] flex flex-col gap-[30px]">
              <div className="text-white lg:text-[18px] text-[16px] leading-[1.5] mb-6">
                Đội ngũ chuyên gia của Trường Thành Phát Travel sẽ giúp bạn tìm ra mô hình vận hành phù hợp nhất.
              </div>
              
              <div>
                <div className="text-white text-[18px] leading-[1.5]">📞 Hotline</div>
                <div className="text-white lg:text-[32px] text-[24px] leading-[1.2] font-semibold break-words">0967330197</div>
              </div>
              
              <div>
                <div className="text-white text-[18px] leading-[1.5]">📍 Văn phòng</div>
                <div className="text-white lg:text-[24px] text-[18px] leading-[1.2] font-semibold break-words">TT06-01, Khu biệt thự Beverly Hills Hạ Long, Bãi Cháy, Quảng Ninh</div>
              </div>
              
              <div>
                <div className="text-white text-[18px] leading-[1.5]">🌐 Website</div>
                <div className="text-white lg:text-[32px] text-[24px] leading-[1.2] font-semibold">halongbonmua.com</div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative w-full max-w-[610px] lg:h-auto rounded-xl bg-white md:p-[40px] p-[16px] shadow-xl">
              <div className="flex flex-col gap-[24px]">
                <div className="text-[32px] text-gray-800 font-semibold">Liên hệ hợp tác</div>
                
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('Cảm ơn') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]" data-readdy-form>
                  <div>
                    <div className="text-base pb-2 text-gray-800">Họ tên</div>
                    <input
                      className="block w-full border rounded-[8px] focus-visible:outline-0 focus:ring-0 px-3 py-3 bg-transparent transition-colors border-gray-300 placeholder:text-gray-500 text-gray-800"
                      placeholder="Họ tên Quý khách"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="flex gap-[16px] md:flex-row flex-col">
                    <div className="flex-1">
                      <div className="text-base pb-2 text-gray-800">Email</div>
                      <input
                        className="block w-full border rounded-[8px] focus-visible:outline-0 focus:ring-0 px-3 py-3 bg-transparent transition-colors border-gray-300 placeholder:text-gray-500 text-gray-800"
                        placeholder="abc@gmail.com"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-base pb-2 text-gray-800">Số điện thoại</div>
                      <input
                        className="block w-full border rounded-[8px] focus-visible:outline-0 focus:ring-0 px-3 py-3 bg-transparent transition-colors border-gray-300 placeholder:text-gray-500 text-gray-800"
                        placeholder="+84 123 456 789"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-800 text-base pb-2">Khu vực</div>
                    <div className="relative">
                      <select
                        className="border border-gray-300 rounded-[8px] h-[50px] w-full bg-white px-3 outline-none focus:ring-0 appearance-none text-gray-500 pr-8"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>Tỉnh/thành phố</option>
                        <option value="An Giang">An Giang</option>
                        <option value="Bà Rịa – Vũng Tàu">Bà Rịa – Vũng Tàu</option>
                        <option value="Bắc Giang">Bắc Giang</option>
                        <option value="Bắc Kạn">Bắc Kạn</option>
                        <option value="Bạc Liêu">Bạc Liêu</option>
                        <option value="Bắc Ninh">Bắc Ninh</option>
                        <option value="Bến Tre">Bến Tre</option>
                        <option value="Bình Định">Bình Định</option>
                        <option value="Bình Dương">Bình Dương</option>
                        <option value="Bình Phước">Bình Phước</option>
                        <option value="Bình Thuận">Bình Thuận</option>
                        <option value="Cà Mau">Cà Mau</option>
                        <option value="Cần Thơ">Cần Thơ</option>
                        <option value="Cao Bằng">Cao Bằng</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Đắk Lắk">Đắk Lắk</option>
                        <option value="Đắk Nông">Đắk Nông</option>
                        <option value="Điện Biên">Điện Biên</option>
                        <option value="Đồng Nai">Đồng Nai</option>
                        <option value="Đồng Tháp">Đồng Tháp</option>
                        <option value="Gia Lai">Gia Lai</option>
                        <option value="Hà Giang">Hà Giang</option>
                        <option value="Hà Nam">Hà Nam</option>
                        <option value="Hà Tĩnh">Hà Tĩnh</option>
                        <option value="Hải Dương">Hải Dương</option>
                        <option value="Hải Phòng">Hải Phòng</option>
                        <option value="Hậu Giang">Hậu Giang</option>
                        <option value="Hòa Bình">Hòa Bình</option>
                        <option value="Hưng Yên">Hưng Yên</option>
                        <option value="Khánh Hòa">Khánh Hòa</option>
                        <option value="Kiên Giang">Kiên Giang</option>
                        <option value="Kon Tum">Kon Tum</option>
                        <option value="Lạng Sơn">Lạng Sơn</option>
                        <option value="Lâm Đồng">Lâm Đồng</option>
                        <option value="Lai Châu">Lai Châu</option>
                        <option value="Lào Cai">Lào Cai</option>
                        <option value="Long An">Long An</option>
                        <option value="Nam Định">Nam Định</option>
                        <option value="Nghệ An">Nghệ An</option>
                        <option value="Ninh Bình">Ninh Bình</option>
                        <option value="Ninh Thuận">Ninh Thuận</option>
                        <option value="Phú Thọ">Phú Thọ</option>
                        <option value="Phú Yên">Phú Yên</option>
                        <option value="Quảng Bình">Quảng Bình</option>
                        <option value="Quảng Nam">Quảng Nam</option>
                        <option value="Quảng Ngãi">Quảng Ngãi</option>
                        <option value="Quảng Ninh">Quảng Ninh</option>
                        <option value="Quảng Trị">Quảng Trị</option>
                        <option value="Sóc Trăng">Sóc Trăng</option>
                        <option value="Sơn La">Sơn La</option>
                        <option value="Tây Ninh">Tây Ninh</option>
                        <option value="Thái Bình">Thái Bình</option>
                        <option value="Thái Nguyên">Thái Nguyên</option>
                        <option value="Thanh Hóa">Thanh Hóa</option>
                        <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                        <option value="Tiền Giang">Tiền Giang</option>
                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                        <option value="Trà Vinh">Trà Vinh</option>
                        <option value="Tuyên Quang">Tuyên Quang</option>
                        <option value="Vĩnh Long">Vĩnh Long</option>
                        <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                        <option value="Yên Bái">Yên Bái</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-base pb-2 text-gray-800">Vị trí bất động sản</div>
                    <input
                      className="block w-full border rounded-[8px] focus-visible:outline-0 focus:ring-0 px-3 py-3 bg-transparent transition-colors border-gray-300 placeholder:text-gray-500 text-gray-800"
                      placeholder="Vui lòng nhập địa chỉ cụ thể bất động sản"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex gap-[16px] md:flex-row flex-col">
                    <div className="flex-1">
                      <div className="text-base pb-2 text-gray-800">Tổng diện tích đất (m²)</div>
                      <input
                        type="number"
                        className="block w-full border rounded-[8px] focus-visible:outline-0 focus:ring-0 px-3 py-3 bg-transparent transition-colors border-gray-300 placeholder:text-gray-500 text-gray-800"
                        placeholder="Tối thiểu 250 m²"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-base pb-2 text-gray-800">Số phòng</div>
                      <input
                        type="number"
                        className="block w-full border rounded-[8px] focus-visible:outline-0 focus:ring-0 px-3 py-3 bg-transparent transition-colors border-gray-300 placeholder:text-gray-500 text-gray-800"
                        placeholder="Tối thiểu 30 phòng"
                        name="room"
                        value={formData.room}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <button
                    className="bg-orange-500 hover:bg-orange-600 rounded-[8px] h-[56px] w-full flex items-center justify-center text-white text-base flex-shrink-0 transition-colors duration-300 whitespace-nowrap"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin tư vấn'}
                  </button>
                  
                  <div className="text-gray-600 text-sm">
                    Bằng cách nhấn nút Gửi, bạn đồng ý với chính sách quyền riêng tư của chúng tôi.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
