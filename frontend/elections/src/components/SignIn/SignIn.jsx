
// import React, { useState } from 'react';
// import axios from 'axios';
// import LoginForm from './LoginForm';
// import OtpForm from './OtpForm';
// import PasswordForm from './PasswordForm';
// import { useNavigate } from 'react-router-dom';


// function SignIn() {
//   const [step, setStep] = useState(1);
//   const [nationalID, setNationalID] = useState('');
//   const [name, setName] = useState('');
//   const [otp, setOtp] = useState('');
//   const navigate = useNavigate(); 

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         national_id: nationalID,
//         name,
//       });
//       alert(response.data.message);
//       setStep(2);
//     } catch (error) {
//       alert('Login failed: ' + error.response.data.message);
//     }
//   };

//   const handleVerify = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/verify', {
//         national_id: nationalID,
//         otp,
//       });
//       alert('Login successful');
//       setStep(3);
//     } catch (error) {
//       alert('Verification failed: ' + error.response.data.message);
//     }
//   };

//   const handlePasswordSetup = async (password) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/setup-password', {
//         national_id: nationalID, 
//         password,
//       });
//       console.log(response.data.message);
//       alert('Password set successfully');
//        sessionStorage.setItem('user', JSON.stringify({ nationalID, name }));
//       navigate('/');
//     } catch (error) {
//       console.error('Password setup failed:', error.response ? error.response.data.message : error.message);
//       alert('Password setup failed: ' + (error.response ? error.response.data.message : error.message));
//     }
//   };
  
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
//         {step === 1 && (
//           <LoginForm
//             nationalID={nationalID}
//             setNationalID={setNationalID}
//             name={name}
//             setName={setName}
//             handleLogin={handleLogin}
//           />
//         )}
//         {step === 2 && (
//           <OtpForm
//             otp={otp}
//             setOtp={setOtp}
//             handleVerify={handleVerify}
//           />
//         )}
//         {step === 3 && (
//           <PasswordForm
//             nationalID={nationalID}
//             handlePasswordSetup={handlePasswordSetup}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default SignIn;
////////////////////////////////////////////////
import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import OtpForm from './OtpForm';
import PasswordForm from './PasswordForm';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function SignIn() {
  const [step, setStep] = useState(1);
  const [nationalID, setNationalID] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        national_id: nationalID,
        name,
      });
      alert(response.data.message);
      setStep(2);
    } catch (error) {
      alert('Login failed: ' + error.response.data.message);
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify', {
        national_id: nationalID,
        otp,
      });
      Cookies.set('token', response.data.token); // Store the token in a cookie
      alert('Login successful');
      setStep(3);
    } catch (error) {
      alert('Verification failed: ' + error.response.data.message);
    }
  };

  const handlePasswordSetup = async (password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/setup-password', {
        national_id: nationalID,
        password,
      });
      console.log(response.data.message);
      alert('Password set successfully');
      navigate('/');
    } catch (error) {
      console.error('Password setup failed:', error.response ? error.response.data.message : error.message);
      alert('Password setup failed: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        {step === 1 && (
          <LoginForm
            nationalID={nationalID}
            setNationalID={setNationalID}
            name={name}
            setName={setName}
            handleLogin={handleLogin}
          />
        )}
        {step === 2 && (
          <OtpForm
            otp={otp}
            setOtp={setOtp}
            handleVerify={handleVerify}
          />
        )}
        {step === 3 && (
          <PasswordForm
            nationalID={nationalID}
            handlePasswordSetup={handlePasswordSetup}
          />
        )}
      </div>
    </div>
  );
}

export default SignIn;
