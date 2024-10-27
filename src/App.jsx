import React from 'react';
import EventListPage from './pages/EventListPage';
import HomePage from './pages/HomePage';
import { Routes, Route, useNavigate } from 'react-router-dom';

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