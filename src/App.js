import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the default route of the Flask server
        const response = await fetch('https://scholarshipappplication.online/get_interview_feedback');
        const result = await response.text();

        // Update the state with the fetched data
        setData(result);

        // Log the fetched data to the console
        console.log('Fetched Data:', result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that useEffect runs only once when the component mounts

  return (
    <div>
      <h1>Flask Server Example</h1>
      {data && (
        <div>
          <h2>Data from Flask Server:</h2>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default App;
