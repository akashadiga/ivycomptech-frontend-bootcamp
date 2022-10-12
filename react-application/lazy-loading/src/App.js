import './App.css';
import React from 'react';
import LazyLoad from 'react-lazy-load';
function App() {
  return (
    <div>
      <p>My implimentation of lazy loading</p>
    <LazyLoad height={762} offset={300}>
      <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
    </LazyLoad>
  </div>
  );
}

export default App;
