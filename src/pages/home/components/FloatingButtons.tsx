import { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleCall = () => {
    window.open('tel:0899277577', '_self');
    setIsOpen(false);
  };

  // const handleFacebook = () => {
  //   window.open('https://facebook.com/truongthanhphattravel', '_blank');
  //   setIsOpen(false);
  // };

  const handleZalo = () => {
    window.open('https://zalo.me/0899277577', '_blank');
    setIsOpen(false);
  };

  const options = [
    {
      icon: 'ri-user-add-line',
      label: 'Đăng ký tư vấn',
      action: scrollToContact,
      color: 'bg-blue-500 hover:bg-blue-600',
      isImage: false
    },
    {
      icon: 'ri-phone-line',
      label: 'Gọi điện',
      action: handleCall,
      color: 'bg-green-500 hover:bg-green-600',
      isImage: false
    },
    // {
    //   icon: 'https://cdn-v2.mvillage.vn/b2b-landing-page/images/icons/messenger.svg?w=32&q=80',
    //   label: 'Facebook',
    //   action: handleFacebook,
    //   color: 'bg-white hover:bg-gray-50 border-2 border-gray-200',
    //   isImage: true
    // },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png',
      label: 'Chat Zalo',
      action: handleZalo,
      color: 'bg-[#1D90F1] hover:bg-[#36A3E8]',
      isImage: true
    }
  ];

  return (
    <div className="fixed right-7 bottom-20 z-50">
      {/* Option buttons */}
      {isOpen && (
        <div className="flex flex-col space-y-3 mb-4">
          {options.map((option, index) => (
            <div key={index} className="relative group">
              <button
                onClick={option.action}
                className={`w-12 h-12 ${option.color} text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
                style={{
                  animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`
                }}
              >
                {option.isImage ? (
                  <img 
                    src={option.icon} 
                    alt={option.label}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <i className={`${option.icon} text-lg`}></i>
                )}
              </button>
              
              {/* Tooltip */}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {option.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main button */}
      <button
        onClick={toggleMenu}
        className={`w-14 h-14 bg-[#0C9DE0] hover:bg-[#0c9de0c9] text-white rounded-full shadow-lg transition-all duration-300 transform ${isOpen ? 'rotate-45' : ''} flex items-center justify-center`}
      >
        <i className={`${isOpen ? 'ri-close-line' : 'ri-customer-service-2-line'} text-xl`}></i>
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;
