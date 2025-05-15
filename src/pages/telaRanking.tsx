import { useEffect, useState } from 'react';
import './../styles/telaRanking.css'

interface RankingItem {
    nome: string;
    score: number
}

function Ranking() {

    const [ranking, setRanking] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("entrou useEddect")
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
            <div>
                {ranking.map((item: RankingItem, index: number) => (
                    <div className='ranking_item'>
                        <h1>{index + 1}.</h1>
                        <h1>{item.nome}</h1>
                        <h1>{item.score} pontos</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ranking;