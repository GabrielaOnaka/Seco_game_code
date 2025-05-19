import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // <-- Importa useNavigate
import './../styles/telaRanking.css';

import ouroImg from '../assets/ouro.png';
import prataImg from '../assets/prata.png';
import bronzeImg from '../assets/bronze.png';

interface RankingItem {
    nome: string;
    score: number;
}

function Ranking() {
    const [ranking, setRanking] = useState<RankingItem[]>([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();  // <-- cria o hook de navegação

    useEffect(() => {
        console.log("entrou useEffect");
        fetch("http://localhost:8000/ranking")
            .then((response) => response.json())
            .then((data) => {
                setRanking(data.ranking);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar ranking:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container_ranking">
            <h1 className='ranking_titulo'>Ranking</h1>

            {/* Botão de voltar */}
            <button className="btn_voltar" onClick={() => navigate('/')}>
                ← Voltar
            </button>

            <div>
                {ranking.map((item: RankingItem, index: number) => {
                    let imagem;
                    if (index === 0) imagem = ouroImg;
                    else if (index === 1) imagem = prataImg;
                    else if (index === 2) imagem = bronzeImg;

                    const progress = (item.score / ranking[0]?.score) * 100;

                    return (
                        <div className='ranking_item' key={index}>
                            <h1>{index + 1}.</h1>

                            <div className="ranking_avatar_nome">
                                <div className="avatar_placeholder">
                                    {item.nome[0].toUpperCase()}
                                </div>
                                <h1>{item.nome}</h1>
                            </div>

                            <div className="ranking_score_barra">
                                <h1>
                                    {item.score} pontos{" "}
                                    {imagem && <img src={imagem} alt="troféu" className="trofeu" />}
                                </h1>
                                <div className="barra_progresso">
                                    <div
                                        className="barra_preenchida"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Ranking;
