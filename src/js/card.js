
export default class Card {
    constructor(){
        this.$card = document.querySelectorAll(".card");
        // document.addEventListener("mousedown", this.handleMouseMoce.bind(this));

         this.suits = [];
        this.suits['spades'] = [
            // spades
            ['A','spade'],
            ['2','spade'],
            ['3','spade'],
            ['4','spade'],
            ['5','spade'],
            ['6','spade'],
            ['7','spade'],
            ['8','spade'],
            ['9','spade'],
            ['10','spade'],
            ['J','spade'],
            ['Q','spade'],
            ['K','spade']
        ];
        this.suits['hearts'] = [
            // hearts
            ['A','heart'],
            ['2','heart'],
            ['3','heart'],
            ['4','heart'],
            ['5','heart'],
            ['6','heart'],
            ['7','heart'],
            ['8','heart'],
            ['9','heart'],
            ['10','heart'],
            ['J','heart'],
            ['Q','heart'],
            ['K','heart']
        ];
        this.suits['diamonds'] = [
            // diamonds
            ['A','diamond'],
            ['2','diamond'],
            ['3','diamond'],
            ['4','diamond'],
            ['5','diamond'],
            ['6','diamond'],
            ['7','diamond'],
            ['8','diamond'],
            ['9','diamond'],
            ['10','diamond'],
            ['J','diamond'],
            ['Q','diamond'],
            ['K','diamond']
        ];
        this.suits['clubs'] = [
            // clubs
            ['A','club'],
            ['2','club'],
            ['3','club'],
            ['4','club'],
            ['5','club'],
            ['6','club'],
            ['7','club'],
            ['8','club'],
            ['9','club'],
            ['10','club'],
            ['J','club'],
            ['Q','club'],
            ['K','club']
        ];
    }

    showSomething(){
        console.log(this.suits);
    }

}