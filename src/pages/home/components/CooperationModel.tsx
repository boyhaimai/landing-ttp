
import AnimatedSection from '../../../components/base/AnimatedSection';

export default function CooperationModel() {
  const comparisonData = [
    {
      brand: "TTP Travel",
      revenue: "85%",
      profit: "45%",
      color: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      brand: "Thương hiệu A",
      revenue: "65%",
      profit: "25%",
      color: "bg-gray-400",
      textColor: "text-gray-600"
    },
    {
      brand: "Thương hiệu B", 
      revenue: "70%",
      profit: "30%",
      color: "bg-gray-400",
      textColor: "text-gray-600"
    },
    {
      brand: "Thương hiệu C",
      revenue: "60%",
      profit: "20%",
      color: "bg-gray-400",
      textColor: "text-gray-600"
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
          <div className="w-[14px] h-[14px] bg-orange-500 rounded-sm"></div>
          <span className="text-[16px] font-medium leading-[1.5] text-gray-600">Mô hình hợp tác khác biệt</span>
        </AnimatedSection>
        
        <AnimatedSection delay={200} className="md:text-[60px] text-[40px] leading-[1.1] font-semibold whitespace-break-spaces text-black text-center pt-[30px] max-w-[1000px]">
          <div>Mô hình hợp tác mang lại <span className="inline-block whitespace-pre-line text-orange-500">lợi nhuận</span> tuyệt đối</div>
        </AnimatedSection>
        
        <AnimatedSection delay={400} className="text-lg text-gray-600 text-center pt-[30px] md:px-[110px] max-w-[1000px]">
          Tại thị trường Việt Nam, TTP Travel là đơn vị hiếm hoi vừa thấu hiểu nhu cầu địa phương vừa vận hành theo chuẩn quốc tế - 
          đảm bảo lợi nhuận cao nhất cho đối tác và trải nghiệm tuyệt vời cho khách hàng.
        </AnimatedSection>
        
        <AnimatedSection delay={600} className="md:pt-[60px] pt-[40px] w-full max-w-[1000px]">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">So sánh hiệu quả kinh doanh</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Biểu đồ Doanh thu */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-gray-700 text-center">Tỷ lệ Doanh thu (%)</h4>
                <div className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium text-gray-600 text-right">
                        {item.brand}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                          style={{ width: item.revenue }}
                        >
                          <span className="text-white text-sm font-semibold">{item.revenue}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Biểu đồ Lợi nhuận */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-gray-700 text-center">Tỷ lệ Lợi nhuận (%)</h4>
                <div className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-24 text-sm font-medium text-gray-600 text-right">
                        {item.brand}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                          style={{ width: item.profit }}
                        >
                          <span className="text-white text-sm font-semibold">{item.profit}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Thống kê nổi bật */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-500">+20%</div>
                  <div className="text-sm text-gray-600 mt-1">Cao hơn đối thủ</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">85%</div>
                  <div className="text-sm text-gray-600 mt-1">Tỷ lệ doanh thu</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">45%</div>
                  <div className="text-sm text-gray-600 mt-1">Tỷ lệ lợi nhuận</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
