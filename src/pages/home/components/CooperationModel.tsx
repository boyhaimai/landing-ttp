import AnimatedSection from "../../../components/base/AnimatedSection";

// Component cho biểu đồ tròn (Progress Circle) - Thiết kế lại để khớp hoàn toàn với ảnh mẫu
const ProgressCircle = ({
  percentage,
  color,
  label,
  prefix,
}: {
  percentage: number;
  color: string;
  label: string;
  prefix: string;
}) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const isBlack = color === "#000000";

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px]">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Vòng tròn nền */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={isBlack ? "#D8D8D8" : "#0c9de042"}
            strokeWidth="1.5"
          />

          {/* Vòng tròn tiến độ - đường viền dày */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={isBlack ? "#000000" : "#0C9DE0"}
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Text bên trong biểu đồ tròn */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`text-sm md:text-base font-normal leading-tight ${
              isBlack ? "text-gray-700" : "text-[#0C9DE0]"
            }`}
          >
            {prefix}
          </span>
          <div className="flex items-baseline gap-0 mt-1">
            <span
              className={`text-5xl md:text-6xl font-bold leading-none ${
                isBlack ? "text-black" : "text-[#0C9DE0]"
              }`}
            >
              {percentage}
            </span>
            <span
              className={`text-3xl md:text-4xl font-semibold ml-0.5 ${
                isBlack ? "text-black" : "text-[#0C9DE0]"
              }`}
            >
              %
            </span>
          </div>
        </div>
      </div>
      <span className="mt-3 text-base text-gray-600">{label}</span>
    </div>
  );
};

// Component cho thanh tiến độ (Bar Chart)
const BarChart = ({
  percentage,
  value,
  color,
}: {
  percentage: number;
  value: string;
  color: string;
}) => {
  const isBlack = color === "#000000";
  const barColor = isBlack ? "#000000" : "#FF7A00";
  const bgColor = isBlack ? "#E0E0E0" : "#F5D5C0";

  return (
    <div className="w-full space-y-2">
      {/* Thanh biểu đồ */}
      <div className="relative h-10 flex items-center rounded-lg overflow-hidden">
        {/* Đường nền */}
        <div
          className={`absolute w-full h-full ${
            isBlack ? "bg-gray-300" : "bg-[#0c9de042]"
          }`}
        ></div>

        {/* Thanh giá trị */}
        <div
          className={`absolute h-full ${
            barColor === "#000000" ? "bg-black" : "bg-[#0C9DE0]"
          } flex items-center justify-center transition-all duration-1000 ease-out`}
          style={{
            left: "0",
            width: `${percentage}%`,
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <span className="text-white text-sm font-semibold italic whitespace-nowrap">
            {value}
          </span>
        </div>
      </div>

      {/* Nhãn trục (0% và 100%) */}
      <div className="flex justify-between text-sm font-normal">
        <span className={isBlack ? "text-gray-700" : "text-[#0C9DE0]"}>
          0%
        </span>
        <span className={isBlack ? "text-gray-700" : "text-[#0C9DE0]"}>
          100%
        </span>
      </div>
    </div>
  );
};

// Component cho thanh tiến độ tiền tệ (Money Bar Chart)
const MoneyBarChart = ({
  value,
  total,
  color,
}: {
  value: number;
  total: number;
  color: string;
}) => {
  const percentage = (value / total) * 100;
  const isBlack = color === "#000000";
  const barColor = isBlack ? "#000000" : "#FF7A00";
  const bgColor = isBlack ? "#E0E0E0" : "#F5D5C0";

  const formattedValue = `${Math.round(value)} triệu`;
  const formattedTotal = `1 tỷ`;

  return (
    <div className="w-full space-y-2">
      {/* Thanh biểu đồ */}
      <div className="relative h-10 flex items-center rounded-lg overflow-hidden">
        {/* Đường nền */}
        <div
          className={`absolute w-full h-full ${
            isBlack ? "bg-gray-300" : "bg-[#0c9de042]"
          }`}
        ></div>

        {/* Thanh giá trị */}
        <div
          className={`absolute h-full ${
            barColor === "#000000" ? "bg-black" : "bg-[#0C9DE0]"
          } flex items-center justify-center transition-all duration-1000 ease-out`}
          style={{
            left: "0",
            width: `${percentage}%`,
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <span className="text-white text-sm font-semibold italic whitespace-nowrap">
            {formattedValue}
          </span>
        </div>
      </div>

      {/* Nhãn trục (0 và 1 tỷ) */}
      <div className="flex justify-between text-sm font-normal">
        <span className={isBlack ? "text-gray-700" : "text-[#0C9DE0]"}>0</span>
        <span className={isBlack ? "text-gray-700" : "text-[#0C9DE0]"}>
          {formattedTotal}
        </span>
      </div>
    </div>
  );
};

export default function CooperationModel() {
  // Dữ liệu mô phỏng theo hình ảnh
  const internationalBrand = {
    title: "Các thương hiệu quốc tế khác",
    subtitle: "LỢI NHUẬN",
    note: "(sau khi trừ nhiều chi phí)",
    percentage: 25,
    prefix: "khoảng",
    color: "#000000", // Màu đen
    exampleText: "Ví dụ: Dựa trên doanh thu, CĐT nhận được:",
    exampleValue: 250, // 250 triệu
  };

  const mVillage = {
    title: "TTP Travel",
    subtitle: "DOANH THU",
    note: "(ưu tiên trả cho chủ đầu tư trước)",
    percentage: 50,
    prefix: "từ",
    color: "#FF7A00", // Màu cam
    exampleText: "Ví dụ: Dựa trên doanh thu, CĐT nhận được:",
    exampleValue: 500, // 450 triệu
  };

  const totalRevenue = 1; // 1 tỷ

  const renderModel = (data: typeof internationalBrand) => (
    <div className="flex flex-col items-center text-center p-4 md:p-8">
      {/* Tiêu đề */}
      <div className="mb-4 leading-tight">
        {/* Tiêu đề */}
        <h2
          className={`italic ${
            data.color === "#000000"
              ? "text-lg md:text-xl font-light text-gray-700"
              : "text-3xl md:text-4xl font-extrabold text-[#0C9DE0]"
          }`}
        >
          {data.title}
        </h2>

        {/* Dòng chia trên / chia trực tiếp trên */}
        <h3
          className={`text-xl md:text-4xl font-normal text-black mt-1 whitespace-nowrap`}
        >
          {data.color === "#000000" ? (
            <>
              chia trên{" "}
              <span className="font-extrabold text-black">{data.subtitle}</span>
            </>
          ) : (
            <>
              chia trực tiếp trên{" "}
              <span className="font-extrabold text-[#0C9DE0]">
                {data.subtitle}
              </span>
            </>
          )}
        </h3>

        {/* Ghi chú nhỏ */}
        <p
          className={`text-base md:text-2xl font-normal mt-1 ${
            data.color === "#000000" ? "text-gray-600" : "text-[#0C9DE0]"
          }`}
        >
          {data.note}
        </p>
      </div>

      {/* Biểu đồ tròn */}
      <div className="mb-6">
        <ProgressCircle
          percentage={data.percentage}
          color={data.color}
          label=""
          prefix={data.prefix}
        />
      </div>

      {/* Text ví dụ */}
      <p className="text-sm md:text-base text-gray-600 mb-4 italic">
        {data.exampleText}
      </p>

      {/* Thanh tiến độ phần trăm */}
      {/* Thanh tiến độ phần trăm */}
      <div className="w-[360px] px-4 mb-6">
        <BarChart
          percentage={data.percentage}
          value={`${data.percentage}%`}
          color={data.color}
        />
      </div>

      {/* Thanh tiến độ tiền tệ */}
      <div className="w-[360px] px-4">
        <MoneyBarChart
          value={data.exampleValue}
          total={totalRevenue * 1000}
          color={data.color}
        />
      </div>
    </div>
  );

  return (
    <div className="md:px-[40px] px-[16px] md:py-[80px] py-[40px] mx-auto relative">
      <div className="flex flex-col items-center justify-center mx-auto">
        <AnimatedSection className="flex flex-shrink-0 items-center gap-3 max-w-[1000px]">
          <div className="w-[14px] h-[14px] bg-[#0C9DE0] rounded-sm"></div>
          <span className="text-[16px] font-medium leading-[1.5] text-gray-600">
            Mô hình hợp tác khác biệt
          </span>
        </AnimatedSection>

        <AnimatedSection
          delay={200}
          className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black text-center pt-[30px] max-w-[1000px]"
        >
          <div>
            Mô hình hợp tác mang lại{" "}
            <span className="inline-block whitespace-pre-line text-[#0C9DE0]">
              lợi nhuận
            </span>{" "}
            tuyệt đối
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={400}
          className="xl:text-xl text-lg text-gray-600 text-center pt-[30px] md:px-[110px] max-w-[1000px]"
        >
          Mô hình hợp tác của TTP được thiết kế để tối ưu hóa lợi ích cho Chủ
          đầu tư, với cơ chế chia sẻ doanh thu minh bạch và ưu tiên thanh toán.
        </AnimatedSection>

        <AnimatedSection
          delay={600}
          className="md:pt-[60px] pt-[40px] w-full max-w-[1000px]"
        >
          <div className="bg-white rounded-2xl  p-4 md:p-8  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 xl:gap-80">
              {renderModel(internationalBrand)}
              {renderModel(mVillage)}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
