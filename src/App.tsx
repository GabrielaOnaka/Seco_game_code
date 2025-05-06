import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/telaInicial';
import Ranking from './pages/telaRanking';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/Ranking" element={<Ranking />} />
      </Routes>
    </Router>
  )
}

export default App;