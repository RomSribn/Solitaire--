import "./css/style.css"
import Card from './js/card.js';
import UpperRow from './js/upperRow.js';
import LowerRow from './js/lowerRow.js';
import Game from './js/game.js'


new Game(new Card(), new UpperRow(new Card()), new LowerRow(new Card())).start();


