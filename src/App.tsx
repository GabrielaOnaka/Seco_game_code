import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TelaInicial from "./pages/telaInicial";
import Ranking from "./pages/telaRanking";
import Game from "./pages/telaGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
