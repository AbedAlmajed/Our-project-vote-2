import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ElectoralDistricts = () => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/electoral-districts')
      .then(response => {
        console.log('Response data:', response.data); // Log data to check format
        if (Array.isArray(response.data)) {
          setDistricts(response.data);
        } else {
          setError('Data is not in the expected format');
        }
      })
      .catch(error => {
        setError('Failed to fetch electoral districts');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">الدوائر الانتخابية</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {districts.length > 0 ? (
          districts.map(district => (
            <div key={district.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{district.city}</h2>
              <p className="text-gray-600">{district.circle}</p>
            </div>
          ))
        ) : (
          <p>لا توجد دوائر انتخابية لعرضها</p>
        )}
      </div>
    </div>
  );
};

export default ElectoralDistricts;
