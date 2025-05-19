import banana from "./../assets/banana.png";
import caixa_papelao from "./../assets/papelao.png";
import controle_remoto from "./../assets/controle_remoto.png";
import embalagem_lanche from "./../assets/embalagem_lanche.png";
import garrafa_pet_1 from "./../assets/garrafa_pet_1.png";
import garrafa_pet_2 from "./../assets/garrafa_pet_2.png";
import garrafa_vidro from "./../assets/garrafa_vidro.png";
import jornal from "./../assets/jornal.png";
import lata_refrigerante from "./../assets/lata_refrigerante.png";
import papel_aluminio from "./../assets/papel_aluminio.png";
import pilha from "./../assets/pilha.png";
import sacola from "./../assets/sacola.png";

export function getImage(item: string) {
  switch (item) {
    case "garrafa_pet_1":
      return garrafa_pet_1;
    case "garrafa_pet_2":
      return garrafa_pet_2;
    case "sacola":
      return sacola;
    case "garrafa_vidro":
      return garrafa_vidro;
    case "garrafa_vidro":
      return garrafa_vidro;
    case "lata_refrigerante":
      return lata_refrigerante;
    case "papel_aluminio":
      return papel_aluminio;
    case "banana":
      return banana;
    case "jornal":
      return jornal;
    case "caixa_papelao":
      return caixa_papelao;
    case "pilha":
      return pilha;
    case "controle_remoto":
      return controle_remoto;
    case "embalagem_lanche":
      return embalagem_lanche;
  }
}
