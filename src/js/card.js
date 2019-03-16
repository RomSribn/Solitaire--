
export default class Card {
    constructor(){
        // this.$card = document.querySelectorAll("#");
        // document.addEventListener("mousedown", this.handleMouseMoce.bind(this));
    }

    generateCard(){
        return [
            // spades
            {number: 'A', color: 'spade', suit: 'ace'},
            {number: '2', color: 'spade', suit: 'two'},
            {number: '3', color: 'spade', suit: 'three'},
            {number: '4', color: 'spade', suit: 'four'},
            {number: '5', color: 'spade', suit: 'five'},
            {number: '6', color: 'spade', suit: 'six'},
            {number: '7', color: 'spade', suit: 'seven'},
            {number: '8', color: 'spade', suit: 'eight'},
            {number: '9', color: 'spade', suit: 'nine'},
            {number: '10', color: 'spade', suit: 'ten'},
            {number: 'J', color: 'spade', suit: 'jack'},
            {number: 'Q', color: 'spade', suit: 'queen'},
            {number: 'K', color: 'spade', suit: 'king'},
            // hearts
            {number: 'A', color: 'heart', suit: 'ace'},
            {number: '2', color: 'heart', suit: 'two'},
            {number: '3', color: 'heart', suit: 'three'},
            {number: '4', color: 'heart', suit: 'four'},
            {number: '5', color: 'heart', suit: 'five'},
            {number: '6', color: 'heart', suit: 'six'},
            {number: '7', color: 'heart', suit: 'seven'},
            {number: '8', color: 'heart', suit: 'eight'},
            {number: '9', color: 'heart', suit: 'nine'},
            {number: '10', color: 'heart', suit: 'ten'},
            {number: 'J', color: 'heart', suit: 'jack'},
            {number: 'Q', color: 'heart', suit: 'queen'},
            {number: 'K', color: 'heart', suit: 'king'},
            // diamonds
            {number: 'A', color: 'diamond', suit: 'ace'},
            {number: '2', color: 'diamond', suit: 'two'},
            {number: '3', color: 'diamond', suit: 'three'},
            {number: '4', color: 'diamond', suit: 'four'},
            {number: '5', color: 'diamond', suit: 'five'},
            {number: '6', color: 'diamond', suit: 'six'},
            {number: '7', color: 'diamond', suit: 'seven'},
            {number: '8', color: 'diamond', suit: 'eight'},
            {number: '9', color: 'diamond', suit: 'nine'},
            {number: '10', color: 'diamond', suit: 'ten'},
            {number: 'J', color: 'diamond', suit: 'jack'},
            {number: 'Q', color: 'diamond', suit: 'queen'},
            {number: 'K', color: 'diamond', suit: 'king'},
            // clubs
            {number: 'A', color: 'club', suit: 'ace'},
            {number: '2', color: 'club', suit: 'two'},
            {number: '3', color: 'club', suit: 'three'},
            {number: '4', color: 'club', suit: 'four'},
            {number: '5', color: 'club', suit: 'five'},
            {number: '6', color: 'club', suit: 'six'},
            {number: '7', color: 'club', suit: 'seven'},
            {number: '8', color: 'club', suit: 'eight'},
            {number: '9', color: 'club', suit: 'nine'},
            {number: '10', color: 'club', suit: 'ten'},
            {number: 'J', color: 'club', suit: 'jack'},
            {number: 'Q', color: 'club', suit: 'queen'},
            {number: 'K', color: 'club', suit: 'king'}
        ]
    }
    shuffleCards(){
        let suits = this.generateCard().slice();
        let shuffledArray = [];
        while (suits.length) {
            let randomIndex = Math.round(Math.random() * (suits.length - 1));

            shuffledArray.push(suits.splice(randomIndex, 1)[0]);
        }
        return shuffledArray;
    }

    createCard(cardSetting){
    //     (<li class="card" data-rank="3" data-suit="diamond" data-pile="stock" data-selected="false">
    //         <div class="three diamond">
    //                 <div class="corner top">
    //                     <span class="rank">3</span>
    //                     <span class="suit"></span>
    //                 </div>
    //             <span class="suit top_center"></span>
    //             <span class="suit middle_center"></span>
    //             <span class="suit bottom_center"></span>
    //                 <div class="corner bottom">
    //                     <span class="rank">3</span>
    //                     <span class="suit"></span>
    //                 </div>
    //         </div>
    // </li>)
        const $li = document.createElement('li');
            $li.classList.add('card');
            $li.setAttribute('data-selected', 'false');

        const $mainInnerDiv = document.createElement('div');
            $mainInnerDiv.classList.add(cardSetting.suit, cardSetting.color);


            const $cornerTop = document.createElement('div');
                $cornerTop.classList.add('corner', 'top');

                        const $spanCornerTop1 = document.createElement('span');
                            $spanCornerTop1.classList.add('rank');
                            $spanCornerTop1.innerText = cardSetting.number;
                        const $spanCornerTop2 = document.createElement('span');
                            $spanCornerTop2.classList.add('suit');

            const $cornerBottom = document.createElement('div');
                $cornerBottom.classList.add('corner', 'bottom');

                        const $spanCornerBottom1 = document.createElement('span');
                            $spanCornerBottom1.classList.add('rank');
                            $spanCornerBottom1.innerText = cardSetting.number;
                        const $spanCornerBottom2 = document.createElement('span');
                            $spanCornerBottom2.classList.add('suit');

        const $spanMain1 = document.createElement('span');
        $spanMain1.classList.add('suit', 'top_center');
        const $spanMain2 = document.createElement('span');
        $spanMain2.classList.add('suit', 'middle_center');
        const $spanMain3 = document.createElement('span');
        $spanMain3.classList.add('suit', 'bottom_center');



        $li.appendChild($mainInnerDiv);

        $cornerTop.appendChild($spanCornerTop1);
        $cornerTop.appendChild($spanCornerTop2);

        $cornerBottom.appendChild($spanCornerBottom1);
        $cornerBottom.appendChild($spanCornerBottom2);

        $mainInnerDiv.appendChild($cornerTop);
        $mainInnerDiv.appendChild($spanMain1);
        $mainInnerDiv.appendChild($spanMain2);
        $mainInnerDiv.appendChild($spanMain3);
        $mainInnerDiv.appendChild($cornerBottom);

        return $li;
    }

}