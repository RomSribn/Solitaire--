
export default class UpperRow {
    constructor(card, game){
        this.game = game;
        this.card = card;
        this.$stockPile = document.querySelector('.stock.pile>ul');
        this.$wastePile = document.querySelector('.waste.pile>ul');
        this.stockSuits;
        this.stockCard = document.querySelectorAll('.upper-row>.stock');
    }

    createStockCardsList(arrayOfSetting){
        console.log(arrayOfSetting);
        let $cardsArray = [];
        arrayOfSetting.forEach(oneSet => {
            $cardsArray.push(this.card.createCard(oneSet));
        })
        return $cardsArray;
    }
    fullFillStockPile(CardsArray, DOMelement){
        this.stockSuits = CardsArray;
        CardsArray.forEach(card => DOMelement.appendChild(card));
    }

}