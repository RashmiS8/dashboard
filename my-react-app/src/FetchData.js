import React, { useEffect, useState } from 'react'

function FetchData() {
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}`;

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  return (
    <div>
    
    </div>
  )
}

export default FetchData