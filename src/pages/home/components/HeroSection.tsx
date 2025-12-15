import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  size: string;
  room: string;
}

const HeroSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    size: "",
    room: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formDataGoogle = new FormData();
      formDataGoogle.append("entry.1396816815", formData.name); // Họ tên
      formDataGoogle.append("entry.1772751811", formData.email); // Số điện thoại
      formDataGoogle.append("entry.1616529917", formData.phone); // Email
      formDataGoogle.append("entry.1421974604", formData.city); // Khu vực
      formDataGoogle.append("entry.1707147357", formData.address); // Vị trí BĐS
      formDataGoogle.append("entry.1999122647", formData.size); // Diện tích đất
      formDataGoogle.append("entry.149271890", formData.room); // Số phòng

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeV6tDy_RyG50XLApBPV7Tjp0p_9dzm3kC6wIjNid6bEbX_qw/formResponse",
        {
          method: "POST",
          mode: "no-cors", // tránh lỗi CORS
          body: formDataGoogle,
        }
      );

      setSubmitMessage(
        "✅ Gửi thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
      );
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        size: "",
        room: "",
      });
    } catch (error) {
      setSubmitMessage("❌ Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cities = [
    "An Giang",
    "Bà Rịa – Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lạng Sơn",
    "Lâm Đồng",
    "Lai Châu",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "TP. Hồ Chí Minh",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://static.readdy.ai/image/4a3482445aede2b455dbed1f5755971b/ab32816e8aedaaca5c656a0b6bd74d89.jpeg)",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1>
              <img
                src="https://static.readdy.ai/image/4a3482445aede2b455dbed1f5755971b/eb11c37d3d9cec27517a9bcf855401d8.jpeg"
                alt="Trường Thành Phát Travel"
                className="h-12 w-auto"
              />
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white">
            <button
              onClick={scrollToContact}
              className="bg-[#0C9DE0] hover:bg-[#0c9de0c9] px-6 py-2 rounded-full transition-colors whitespace-nowrap"
            >
              Tư vấn miễn phí
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Giải pháp quản lý & vận hành villa nghỉ dưỡng toàn diện
              </h2>
              <p className="text-lg lg:text-xl font-medium">
                Mở đầu hành trình khám phá cùng Trường Thành Phát Travel
              </p>
            </div>

            <div className="text-base opacity-90 max-w-lg">
              Trường Thành Phát Travel giúp bạn biến villa nghỉ dưỡng thành tài
              sản sinh lời bền vững, với hệ thống vận hành, marketing và khai
              thác chuyên sâu dành riêng cho phân khúc nghỉ dưỡng cao cấp.
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-2xl max-w-md w-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Liên hệ tư vấn & hợp tác
                </h3>                
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-3"
                data-readdy-form
                id="travel-consultation"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="Nhập họ và tên của bạn"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="abc@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="0899277577"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Khu vực
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-8 text-sm"
                  >
                    <option value="">Chọn tỉnh/thành phố</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vị trí bất động sản
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    placeholder="Vui lòng nhập địa chỉ cụ thể bất động sản"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                     Tổng diện tích đất (m²)
                    </label>
                    <input
                      type="number"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                     Số phòng
                    </label>
                    <input
                      type="number"
                      name="room"
                      value={formData.room}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      min="1"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0C9DE0] hover:bg-[#0c9de0c9] text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm"
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi thông tin tư vấn"}
                </button>

                {submitMessage && (
                  <div
                    className={`text-center text-xs ${
                      submitMessage.includes("Cảm ơn")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  Bằng cách nhấn nút Gửi, bạn đồng ý với chính sách quyền riêng
                  tư của chúng tôi.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
