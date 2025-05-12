import banana from "./../assets/banana.png";
import lata_refrigerante from "./../assets/lata_refrigerante.png";
import garrafa_pet_1 from "./../assets/garrafa_pet_1.png";
import pilha from "./../assets/pilha.png";

export function getImage(item: string) {
  switch (item) {
    case "banana":
      return banana;
    case "lata_refrigerante":
      return lata_refrigerante;
    case "garrafa_pet_1":
      return garrafa_pet_1;
    case "pilha":
      return pilha;
  }
}
