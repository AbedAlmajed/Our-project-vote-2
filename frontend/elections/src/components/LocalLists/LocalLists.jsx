
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LocalListsPage = () => {
  const [localLists, setLocalLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLocalLists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/local-lists');
        setLocalLists(response.data);
      } catch (error) {
        setError('Failed to fetch local lists.');
      } finally {
        setLoading(false);
      }
    };

    fetchLocalLists();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">قوائم محلية</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {localLists.map((list) => (
              <div
                key={list.id}
                className="w-64 h-64 bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center"
              >
                <div className="w-full h-full p-6 bg-white bg-opacity-80 flex flex-col items-center justify-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{list.name}</h2>
                  <p className="text-gray-600 text-center">{list.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalListsPage;
