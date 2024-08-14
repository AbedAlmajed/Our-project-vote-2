
// import React from 'react';

// function OtpForm({ otp, setOtp, handleVerify }) {
//   return (
//     <div className="text-right">
//       <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">إدخال الرمز</h2>
//       <input
//         type="text"
//         placeholder="الرمز"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         className="w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//       />
//       <button
//         onClick={handleVerify}
//         className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//       >
//         تحقق
//       </button>
//     </div>
//   );
// }

// export default OtpForm;
/////////////////////////////////////////////////////


// import React, { useState } from 'react';

// function OtpForm({ otp, setOtp, handleVerify }) {
//   const [error, setError] = useState('');

//   const validate = () => {
//     const otpRegex = /^\d{6}$/;
//     if (!otpRegex.test(otp)) {
//       setError('الرمز غير صالح');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleSubmit = () => {
//     if (validate()) {
//       handleVerify();
//     }
//   };

//   return (
//     <div className="text-right">
//       <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">إدخال الرمز</h2>
//       <input
//         type="text"
//         placeholder="الرمز"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         className={`w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 ${
//           error ? 'border-red-500' : 'border-gray-300'
//         }`}
//       />
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//       <button
//         onClick={handleSubmit}
//         className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//       >
//         تحقق
//       </button>
//     </div>
//   );
// }

// export default OtpForm;


///////////////////////////////////////////////////


import React, { useState } from 'react';
import Swal from 'sweetalert2'; // استيراد مكتبة SweetAlert2

function OtpForm({ otp, setOtp, handleVerify }) {
  const [error, setError] = useState('');

  const validate = () => {
    const otpRegex = /^\d{6}$/;
    if (!otpRegex.test(otp)) {
      setError('الرمز غير صالح');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (validate()) {
      Swal.fire({
        title: 'تم التحقق بنجاح!',
        text: 'تم التحقق من الرمز بنجاح.',
        icon: 'success',
        confirmButtonText: 'موافق'
      }).then(() => {
        handleVerify(); // استدعاء دالة handleVerify بعد النقر على "موافق"
      });
    } else {
      Swal.fire({
        title: 'خطأ!',
        text: 'الرمز المدخل غير صالح.',
        icon: 'error',
        confirmButtonText: 'موافق'
      });
    }
  };

  return (
    <div className="text-right">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">إدخال الرمز</h2>
      <input
        type="text"
        placeholder="الرمز"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className={`w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        تحقق
      </button>
    </div>
  );
}

export default OtpForm;
