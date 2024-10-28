import React from 'react';
import EventListPage from './pages/EventListPage';
import HomePage from './pages/HomePage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner'
;<BallTriangle
height={100}
width={100}
radius={5}
color="#4fa94d"
ariaLabel="ball-triangle-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>

function App() {

  const navigate = useNavigate();

  return (
      <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventListPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;