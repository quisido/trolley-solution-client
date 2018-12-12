/// <reference types="react-scripts" />

interface Card {
  
}

interface Modifier extends Card {

}

interface Panel extends Card {

}

interface Player {
  cards: Card[];
  color: string;
  name: string;
  points: Card[];
}
