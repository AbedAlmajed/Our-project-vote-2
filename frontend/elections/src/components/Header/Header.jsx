// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";

// const Header = () => {
//   return (
//     <header className="bg-[rgb(229,79,83)] p-4 text-white shadow-md">
//       <nav className="flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-20 w-20 rounded-full" />
//           <span className="mr-2 text-xl font-bold text-white">VoteJO</span>
//         </div>
//         <div className="flex space-x-14">
//           <Link to="/" className="hover:text-gray-300 ml-12">
//             الرئيسية
//           </Link>
//           <Link to="/electoral" className="hover:text-gray-300">
//             القوائم الإنتخابية
//           </Link>
//           <Link to="/about" className="hover:text-gray-300">
//             من نحن
//           </Link>
//           <Link to="/contact" className="hover:text-gray-300">
//             تواصل معنا
//           </Link>
//         </div>
//         <div>
//           <Link
//             to="/signup"
//             className="bg-[rgb(41,180,115)] text-white px-4 py-2 rounded"
//           >
//             تسجيل الدخول
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
/////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in the cookies
    const token = Cookies.get("token");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if the token exists
  }, []);

  const handleLogout = () => {
    // Remove the token from the cookies
    Cookies.remove("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="bg-[rgb(229,79,83)] p-4 text-white shadow-md">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-20 rounded-full" />
          <span className="mr-2 text-xl font-bold text-white">VoteJO</span>
        </div>
        <div className="flex space-x-14">
          <Link to="/" className="hover:text-gray-300 ml-12">
            الرئيسية
          </Link>
          <Link to="/circle" className="hover:text-gray-300">
            الدوائر الإنتخابية
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            من نحن
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            تواصل معنا
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-[rgb(41,180,115)] text-white px-4 py-2 rounded"
            >
              تسجيل الخروج
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[rgb(41,180,115)] text-white px-4 py-2 rounded"
            >
              تسجيل الدخول
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
