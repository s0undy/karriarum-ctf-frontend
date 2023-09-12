import React from 'react';
import Leaderboard from './components/Leaderboard';
import NewScore from './components/NewScore';
import './components/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Leaderboard />} />
          <Route path="/newscore" element={<NewScore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;