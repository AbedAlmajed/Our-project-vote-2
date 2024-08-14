// import React, { useState } from 'react';

// function PasswordForm({ nationalID, handlePasswordSetup }) {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = () => {
//     if (password !== confirmPassword) {
//       alert('كلمات المرور غير متطابقة');
//     } else {
//       handlePasswordSetup(password);
//     }
//   };

  

//   return (
//     <div className="text-right">
//       <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">تعيين كلمة المرور</h2>
//       <input
//         type="password"
//         placeholder="كلمة المرور"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//       />
//       <input
//         type="password"
//         placeholder="تأكيد كلمة المرور"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         className="w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//       />
//       <button
//         onClick={handleSubmit}
//         className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//       >
//         تعيين كلمة المرور
//       </button>
//     </div>
//   );
// }

// export default PasswordForm;



/////////////////////////////////////


// import React, { useState } from 'react';

// function PasswordForm({ nationalID, handlePasswordSetup }) {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({ password: '', confirmPassword: '' });

//   const validate = () => {
//     let isValid = true;
//     const newErrors = { password: '', confirmPassword: '' };

//     // Password validation
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (!passwordRegex.test(password)) {
//       newErrors.password = 'كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير ورقم';
//       isValid = false;
//     }

//     // Confirm password validation
//     if (password !== confirmPassword) {
//       newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = () => {
//     if (validate()) {
//       handlePasswordSetup(password);
//     }
//   };

//   return (
//     <div className="text-right">
//       <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">تعيين كلمة المرور</h2>
//       <input
//         type="password"
//         placeholder="كلمة المرور"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={`w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 ${
//           errors.password ? 'border-red-500' : 'border-gray-300'
//         }`}
//       />
//       {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//       <input
//         type="password"
//         placeholder="تأكيد كلمة المرور"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         className={`w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 ${
//           errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
//         }`}
//       />
//       {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
//       <button
//         onClick={handleSubmit}
//         className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//       >
//         تعيين كلمة المرور
//       </button>
//     </div>
//   );
// }

// export default PasswordForm;



/////////////////////////////////////////

import React, { useState } from 'react';
import Swal from 'sweetalert2'; // استيراد SweetAlert

function PasswordForm({ nationalID, handlePasswordSetup }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });

  const validate = () => {
    let isValid = true;
    const newErrors = { password: '', confirmPassword: '' };

    // Password validation with special character, uppercase letter, and digit
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل وتحتوي على حرف، ورقم، ورمز خاص';
      isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      Swal.fire({
        title: 'تم تعيين كلمة المرور بنجاح!',
        text: 'تم تعيين كلمة المرور الجديدة بنجاح.',
        icon: 'success',
        confirmButtonText: 'موافق'
      }).then(() => {
        handlePasswordSetup(password); // استدعاء دالة handlePasswordSetup بعد نجاح التحقق
      });
    } else {
      Swal.fire({
        title: 'خطأ!',
        text: 'يرجى التأكد من صحة المعلومات المدخلة.',
        icon: 'error',
        confirmButtonText: 'موافق'
      });
    }
  };

  return (
    <div className="text-right">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">تعيين كلمة المرور</h2>
      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 ${
          errors.password ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      <input
        type="password"
        placeholder="تأكيد كلمة المرور"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={`w-full px-4 py-2 mb-4 text-right border rounded-lg focus:outline-none focus:ring-2 ${
          errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        تعيين كلمة المرور
      </button>
    </div>
  );
}

export default PasswordForm;
