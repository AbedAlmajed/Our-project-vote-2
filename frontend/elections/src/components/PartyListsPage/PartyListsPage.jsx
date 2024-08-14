
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PartyListsPage = () => {
  const [partyLists, setPartyLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPartyLists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/party-lists'); // Ensure this URL is correct
        setPartyLists(response.data);
      } catch (error) {
        setError('Failed to fetch party lists.');
      } finally {
        setLoading(false);
      }
    };

    fetchPartyLists();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">قوائم الأحزاب</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partyLists.map((list) => (
              <div
                key={list.id}
                className="w-72 h-72 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl hover:from-blue-500 hover:to-blue-700 flex flex-col items-center justify-center"
              >
                <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-white bg-opacity-80">
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

export default PartyListsPage;
