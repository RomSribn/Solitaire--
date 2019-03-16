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
        // console.log(arrayOfSetting);
        let $cardsArray = [];
        arrayOfSetting.forEach(oneSet => {
            $cardsArray.push(this.card.createCard(oneSet));
        });
        return $cardsArray;
    }

    fullFillGamePiles(CardsArray, DOMelement){
        this.gameSuits = CardsArray;
        // console.log(CardsArray);
        let pilesArr = [];
        let ulArray = [];
        for(let i = 0; i < 7; i += 1){
            const $ul = document.createElement('ul');
            const onePileArray = CardsArray.splice(0, i+1);
            onePileArray[onePileArray.length -1].classList.add('up');
            // console.log(CardsArray.slice(i, i+1));
            // console.log(CardsArray.slice(0, 2));
            // console.log(this.gameSuits.splice(0, 1));
            onePileArray.forEach(el => $ul.appendChild(el));
            // for(let i = 0; i < onePileArray.length; i += 1){
            //     onePileArray[onePileArray.length -1]
            // }
            this.createLowerPileList(i).appendChild($ul);
            pilesArr.push(this.createLowerPileList(i));
            ulArray.push($ul);
        }
        for(let i = 0; i < 7; i += 1){
            pilesArr[i].appendChild(ulArray[i]);
            DOMelement.appendChild(pilesArr[i]);
        }

    }
}