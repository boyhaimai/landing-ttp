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
    window.open('tel:0967330197', '_self');
    setIsOpen(false);
  };

  const handleMessage = () => {
    window.open('sms:0967330197', '_self');
    setIsOpen(false);
  };

  const handleZalo = () => {
    window.open('https://zalo.me/0967330197', '_blank');
    setIsOpen(false);
  };

  const options = [
    {
      icon: 'ri-user-add-line',
      label: 'Đăng ký tư vấn',
      action: scrollToContact,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: 'ri-phone-line',
      label: 'Gọi điện',
      action: handleCall,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: 'ri-message-3-line',
      label: 'Nhắn tin',
      action: handleMessage,
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: 'ri-chat-1-line',
      label: 'Chat Zalo',
      action: handleZalo,
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div className="fixed right-6 bottom-20 z-50">
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
                <i className={`${option.icon} text-lg`}></i>
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
        className={`w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 transform ${isOpen ? 'rotate-45' : ''} flex items-center justify-center`}
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
