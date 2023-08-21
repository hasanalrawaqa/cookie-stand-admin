// components/CookieStandAdmin.js
import React, { useState, useEffect } from 'react';
import CookieStandTable from './CookieStandTable';
import CreateForm from './CreateForm';

const CookieStandAdmin = ({ apiUrl }) => {
  const [cookieStands, setCookieStands] = useState([]);

  const addCookieStand = async (data) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const newStand = await response.json();
        setCookieStands([...cookieStands, newStand]);
      } else {
        console.error('Error adding cookie stand:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding cookie stand:', error);
    }
  };

  const deleteCookieStand = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCookieStands(cookieStands.filter((stand) => stand.id !== id));
      } else {
        console.error('Error deleting cookie stand:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting cookie stand:', error);
    }
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCookieStands(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <CreateForm onAddCookieStand={addCookieStand} />
      <CookieStandTable
        cookieStands={cookieStands}
        onDeleteCookieStand={deleteCookieStand}
      />
    </div>
  );
};

export default CookieStandAdmin;
