
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Electoral = () => {
  return (
    <div>
      <Header />

      <main className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full h-1/2 flex justify-center items-center gap-12">
          <Link
            to="/party-lists"
            className="w-72 h-72 bg-blue-50 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center"
          >
            <div className="p-6 bg-blue-100 hover:bg-blue-200 transition-colors flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">قوائم حزبية</h2>
              <p className="text-blue-600 text-center">
                هذه البطاقة تحتوي على معلومات حول قوائم الأحزاب المختلفة.
              </p>
            </div>
          </Link>

          <Link
            to="/local-lists"
            className="w-72 h-72 bg-green-50 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center"
          >
            <div className="p-6 bg-green-100 hover:bg-green-200 transition-colors flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold mb-4 text-green-800">قوائم محلية</h2>
              <p className="text-green-600 text-center">
                هذه البطاقة تحتوي على معلومات حول القوائم المحلية المختلفة.
              </p>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Electoral;
