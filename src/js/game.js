export default class Game{
    constructor(card, upperRow, lowerRow){
        this.card = card;
        this.upperRow = upperRow;
        this.lowerRow = lowerRow;
        this.suits;
        this.wasteSuits = [];
        this.upperRow.stockCard.forEach(card => card.addEventListener('click', this.handleStockClick.bind(this)))

    }
    start(){
        this.suits = this.card.shuffleCards();
        console.log(this.suits);
        this.upperRow.fullFillStockPile(this.upperRow.createStockCardsList(this.suits.slice(0, 24)), this.upperRow.$stockPile);
        this.lowerRow.fullFillGamePiles(this.lowerRow.createGameCardsList(this.suits.slice(24, 52)), this.lowerRow.$gamePiles)
        // console.log(this.stockCard);
        // console.log(this.stockSuits);
        // console.log()
        // console.log(this.stockCard)

    }
    handleStockClick(ev){
        if(this.wasteSuits.length){
            this.wasteSuits.forEach(card => card.classList.remove('up'))
        }
        // console.log(ev.target);
        if(!this.upperRow.stockSuits.length){
            this.upperRow.stockSuits = this.wasteSuits;
            this.upperRow.wasteSuits = [];
            // this.stockSuits.forEach(card => this.$stockPile.insertBefore(card, ))
            for(let i = 0; i < this.upperRow.stockSuits.length; i += 1){
                this.upperRow.$stockPile.prepend(this.upperRow.stockSuits[i])
            }
            return
        }
        const clickedCard = this.upperRow.stockSuits.pop();
        this.wasteSuits.unshift(clickedCard);
        // console.log(this.wasteSuits);
        this.upperRow.$wastePile.prepend(clickedCard);
        this.wasteSuits[0].classList.add('up');
    }
}