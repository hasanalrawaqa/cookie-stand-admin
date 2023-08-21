// components/CookieStandTable.js
import React from 'react';
import { hourly_sales } from '@/data';

const CookieStandTable = ({ cookieStands, onDeleteCookieStand }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          {/* Other time slots */}
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {cookieStands.map((stand) => (
          <tr key={stand.id}>
            <td>{stand.location}</td>
            {/* Display time slot data */}
            {stand.hourly_sales.map((sales, index) => (
              <td key={index}>{sales}</td>
            ))}
            <td>
              <button onClick={() => onDeleteCookieStand(stand.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CookieStandTable;
