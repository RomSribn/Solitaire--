export default class LowerRow{
    constructor(card, game){
        this.card = card;
        this.game = game;
        this.gameSuits;
        this.$gamePiles = document.querySelector('#tab');
    }
    showSome(){
        console.log(this.game.suits);
    }
    createLowerPileList(dataUnplayed){
        const $li = document.createElement('li');
        $li.classList.add('pile');
        $li.setAttribute('data-unplayed', dataUnplayed);
        $li.setAttribute('style', 'height: 170.8px;');
        return $li
    }
    createGameCardsList(arrayOfSetting){
        console.log(arrayOfSetting);
        let $cardsArray = [];
        arrayOfSetting.forEach(oneSet => {
            $cardsArray.push(this.card.createCard(oneSet));
        });
        return $cardsArray;
    }

    fullFillGamePiles(CardsArray, DOMelement){
        this.gameSuits = CardsArray;
        const pilesArr = [];
        for(let i = 0; i < 7; i += 1){
            const $ul = document.createElement('ul');
            // console.log(CardsArray.slice(i, i+1));
            // console.log(CardsArray.slice(0, 2));
            CardsArray.slice(i, i+1).forEach(el => $ul.appendChild(el));
            pilesArr.push(this.createLowerPileList(i).appendChild($ul))
        }
        console.log(pilesArr);
        pilesArr.forEach(pile => DOMelement.appendChild(pile));
    }
}