// App.js
import React from 'react';
import SearchBar from './components/SearchBar'; // Import the SearchBar component

const data = [
  { name: "United States", capital: "Washington D.C." },
  { name: "France", capital: "Paris" },
  { name: "Germany", capital: "Berlin" },
  { name: "India", capital: "New Delhi" },
  { name: "Australia", capital: "Canberra" },
  { name: "Canada", capital: "Ottawa" },
  // Add more countries and capitals here if needed
];

function App() {
  return (
    <div className="App">
      <h1>Country and Capital Search</h1>
      {/* Use the SearchBar component and pass the data */}
      <SearchBar data={data} />
    </div>
  );
}

export default App;
