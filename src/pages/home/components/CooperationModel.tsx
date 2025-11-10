
import AnimatedSection from '../../../components/base/AnimatedSection';

export default function CooperationModel() {
  const revenueGrowthData = [
    {
      year: "2022",
      percentage: "35%",
      color: "bg-orange-300"
    },
    {
      year: "2023", 
      percentage: "50%",
      color: "bg-orange-400"
    },
    {
      year: "2024",
      percentage: "65%", 
      color: "bg-orange-500"
    },
    {
      year: "2025",
      percentage: "85%",
      color: "bg-orange-600"
    }
  ];

  const profitGrowthData = [
    {
      year: "2021",
      percentage: "15%",
      color: "bg-green-300"
    },
    {
      year: "2022",
      percentage: "20%",
      color: "bg-green-400"  
    },
    {
      year: "2023",
      percentage: "30%",
      color: "bg-green-500"
    },
    {
      year: "2024", 
      percentage: "45%",
      color: "bg-green-600"
    },
    {
      year: "2025 (ước tính)",
      percentage: "60%",
      color: "bg-green-700"
    }
  ];

  return (
    <div className="md:px-[40px] px-[16px] md:py-[80px] py-[40px] max-w-screen-2xl mx-auto relative">
      <div>
        <div className="flex items-center justify-center relative">
          <div className="bg-gray-300 h-[1px] w-full"></div>
          <div className="absolute"></div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center md:pt-[60px] pt-[26px] mx-auto">
        <AnimatedSection className="flex flex-shrink-0 items-center gap-3 max-w-[1000px]">
          <div className="w-[14px] h-[14px] bg-[#0C9DE0] rounded-sm"></div>
          <span className="text-[16px] font-medium leading-[1.5] text-gray-600">Mô hình hợp tác khác biệt</span>
        </AnimatedSection>
        
        <AnimatedSection delay={200} className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black text-center pt-[30px] max-w-[1000px]">
          <div>Mô hình hợp tác mang lại <span className="inline-block whitespace-pre-line text-[#0C9DE0]">lợi nhuận</span> tuyệt đối</div>
        </AnimatedSection>
        
        <AnimatedSection delay={400} className="text-lg text-gray-600 text-center pt-[30px] md:px-[110px] max-w-[1000px]">
          Tại thị trường Việt Nam, TTP Travel là đơn vị hiếm hoi vừa thấu hiểu nhu cầu địa phương vừa vận hành theo chuẩn quốc tế - 
          đảm bảo lợi nhuận cao nhất cho đối tác và trải nghiệm tuyệt vời cho khách hàng.
        </AnimatedSection>
        
        <AnimatedSection delay={600} className="md:pt-[60px] pt-[40px] w-full max-w-[1000px]">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Tăng trưởng hiệu quả kinh doanh qua các năm</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Biểu đồ Tăng trưởng Doanh thu */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-gray-700 text-center">Tỷ lệ tăng trưởng doanh thu (%)</h4>
                <div className="space-y-4">
                  {revenueGrowthData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-16 text-sm font-medium text-gray-600 text-right">
                        {item.year}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                          style={{ width: item.percentage }}
                        >
                          <span className="text-white text-sm font-semibold">{item.percentage}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-600 text-center italic">
                  Doanh thu tăng đều mỗi năm nhờ hệ thống vận hành và chiến lược khai thác hiệu quả từ Trường Thành Phát Travel.
                </div>
              </div>

              {/* Biểu đồ Tăng trưởng Lợi nhuận */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-gray-700 text-center">Tỷ lệ tăng trưởng lợi nhuận (%)</h4>
                <div className="space-y-4">
                  {profitGrowthData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-medium text-gray-600 text-right">
                        {item.year}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                          style={{ width: item.percentage }}
                        >
                          <span className="text-white text-sm font-semibold">{item.percentage}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-600 text-center italic">
                  Lợi nhuận cải thiện bền vững nhờ giảm chi phí vận hành và nâng cao giá trị trải nghiệm khách hàng.
                </div>
              </div>
            </div>

            {/* Thống kê nổi bật */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#0C9DE0]">4 năm</div>
                  <div className="text-sm text-gray-600 mt-1">Tăng trưởng liên tục</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0C9DE0]">85%</div>
                  <div className="text-sm text-gray-600 mt-1">Doanh thu 2025</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-gray-600 mt-1">Lợi nhuận 2025</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
