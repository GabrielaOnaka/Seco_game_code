import { useNavigate } from "react-router-dom";
import "./../styles/telaInicial.css";

function TelaInicial() {
  const navigate = useNavigate();

  const GoScreenRanking = () => {
    navigate("/Ranking");
  };

  const GoScreenGame = () => {
    navigate("/Game");
  };

  return (
    <div className="container">
      <div className="botoes">
        <button onClick={GoScreenGame} className="btnJogar">
          Iniciar
        </button>
        <button onClick={GoScreenRanking} className="btnRanking">
          Ver ranking
        </button>
      </div>
    </div>
  );
}

export default TelaInicial;
