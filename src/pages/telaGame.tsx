import { useState } from "react";
import "./../styles/telaGame.css";
import { getImage } from "../functions/getImage";
import LixeiraPlastico from "./../assets/lixeira/lixo_vermelho.png";
import LixeiraVidro from "./../assets/lixeira/lixo_verde.png";
import LixeiraMetal from "./../assets/lixeira/lixo_amarelo.png";
import LixeiraOrganico from "./../assets/lixeira/lixo_organico.png";
import LixeiraPapel from "./../assets/lixeira/lixo_azul.png";
import LixeiraPilha from "./../assets/lixeira/lixo_pilha.png";
import LixeiraEletronico from "./../assets/lixeira/lixo_eletronico.png";
import LixeiraNaoReciclavel from "./../assets/lixeira/lixo_nao_reciclavel.png";
import Spinner from "../components/Spinner/Spinner";

interface Item {
  name: string;
  category: string;
}

const data: Item[] = [
  { name: "banana", category: "organico" },
  { name: "lata_refrigerante", category: "metal" },
  { name: "garrafa_pet_1", category: "plastico" },
  { name: "pilha", category: "pilha" },
];

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
  const [score, setScore] = useState(0);
  const [itemList, setItemList] = useState<Item[]>(data || []);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(
    itemList[0]
  );
  const [counter, setCounter] = useState<number>(0);

  const selectLixeira = (lixeira: string, categoria_item: string) => {
    if (lixeira === categoria_item) setScore(score + 1);

    const nextCounter = counter + 1;
    setCounter(nextCounter);

    if (nextCounter >= itemList.length) {
      alert("Você ganhou!");
      setScore(0);
      setCounter(0);
      setItemList(data);
      setSelectedItem(data[0]);
    } else {
      setSelectedItem(itemList[nextCounter]);
    }
  };

  return (
    <div className="container_Game">
      {selectedItem ? (
        <>
          <h1>Pontuação: {score}</h1>
          <div className="game_selected_item">
            <img
              src={getImage(selectedItem.name)}
              alt={`${selectedItem.name} image`}
            />
            <h1>Item: {selectedItem.name.replace(/_/g, " ")}</h1>
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
