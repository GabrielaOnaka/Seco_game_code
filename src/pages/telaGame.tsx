import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import { getImage } from "../functions/getImage";
import LixeiraMetal from "./../assets/lixeira/lixo_amarelo.png";
import LixeiraPapel from "./../assets/lixeira/lixo_azul.png";
import LixeiraEletronico from "./../assets/lixeira/lixo_eletronico.png";
import LixeiraNaoReciclavel from "./../assets/lixeira/lixo_nao_reciclavel.png";
import LixeiraOrganico from "./../assets/lixeira/lixo_organico.png";
import LixeiraPilha from "./../assets/lixeira/lixo_pilha.png";
import LixeiraVidro from "./../assets/lixeira/lixo_verde.png";
import LixeiraPlastico from "./../assets/lixeira/lixo_vermelho.png";
import "./../styles/telaGame.css";

interface Item {
  name: string;
  category: string;
}

const binList = [
  { name: "organico", img: LixeiraOrganico },
  { name: "metal", img: LixeiraMetal },
  { name: "plastico", img: LixeiraPlastico },
  { name: "pilha", img: LixeiraPilha },
  { name: "eletronico", img: LixeiraEletronico },
  { name: "vidro", img: LixeiraVidro },
  { name: "papel", img: LixeiraPapel },
  { name: "nao_reciclavel", img: LixeiraNaoReciclavel },
];

function Game() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [itemList, setItemList] = useState<Item[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(
    itemList[0]
  );

  useEffect(() => {
    axios
      .get("http://localhost:8000/sorteio")
      .then((res) => {
        setItemList(res.data);
        setSelectedItem(res.data[0]);
      })
      .catch((err) => {
        console.error("Erro ao carregar itens do backend:", err);
      });
  }, []);

  const selectLixeira = (lixeira: string, categoria_item: string) => {
    if (lixeira === categoria_item) setScore(score + 1);

    const nextCounter = counter + 1;
    setCounter(nextCounter);

    if (nextCounter >= itemList.length) setIsModalOpen(true);
    else setSelectedItem(itemList[nextCounter]);
  };

  const saveGame = (userName: string) => {
    fetch("http://localhost:8000/score", {
      method: "POST",
      body: JSON.stringify({ nome: userName, score }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Pontuação salva com sucesso:", data))
      .catch((err) => console.error("Erro ao salvar pontuação:", err));
    setScore(0);
    setCounter(0);
    setItemList([]);
    setIsModalOpen(false);
    setSelectedItem(undefined);
  };

  return (
    <div className="container_Game">
      {selectedItem ? (
        <>
          {isModalOpen && (
            <div className="modal">
              <div className="modal_content">
                <h1>Você fez {score} pontos!</h1>
                <h2>Insira seu nome para salvar sua pontuação</h2>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div className="buttons">
                  <a className="button" href="/">
                    Cancelar
                  </a>
                  <button className="button" onClick={() => saveGame(userName)}>
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          )}

          <h1>Pontuação: {score}</h1>
          <div className="game_selected_item">
            <img
              src={getImage(selectedItem.name)}
              alt={`${selectedItem.name} image`}
            />
            <h1>
              Item:{" "}
              {selectedItem.name
                .replace(/_/g, " ")
                .replace("1", "")
                .replace("2", "")}
            </h1>
          </div>

          <div className="game__lixeiras">
            {binList.map((bin) => (
              <button
                key={bin.name}
                className="game__lixeira"
                onClick={() => selectLixeira(bin.name, selectedItem.category)}
              >
                <img src={bin.img} alt={bin.name} />
                <p>{bin.name.replace("_", " ")}</p>
              </button>
            ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Game;
