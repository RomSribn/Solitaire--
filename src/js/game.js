export default class Game{
    constructor(card, upperRow, lowerRow){
        this.card = card;
        this.upperRow = upperRow;
        this.lowerRow = lowerRow;
        this.suits;
        this.clickedCard;
        this.wasteSuits = [];
        this.$pileArray = document.querySelector('#tab').childNodes;
        this.$cardArray = document.querySelector('ul>li.up');
        // this.$pileArray.forEach(el => console.log(el));
        this.selectedGameCard = [];
        this.selectedStockCard;
        this.upperRow.$wastePile.addEventListener('click', this.handleGetSelectedCard.bind(this));
        this.upperRow.stockCard.forEach(card => card.addEventListener('click', this.handleStockClick.bind(this)));
    }
    start(){
        this.suits = this.card.shuffleCards();
        this.upperRow.fullFillStockPile(this.upperRow.createStockCardsList(this.suits.slice(0, 24)), this.upperRow.$stockPile);
        this.lowerRow.fullFillGamePiles(this.lowerRow.createGameCardsList(this.suits.slice(24, 52)), this.lowerRow.$gamePiles);
        this.setListenersForEmptyPiles();
        console.log(this.$pileArray);
        for(let i = 1; i < this.$pileArray.length; i += 1){
            // this.$pileArray[i].firstChild.childNodes.addEventListener('dragstart', this.dragStart.bind(this));
            // this.$pileArray[i].firstChild.childNodes.addEventListener('dragend', this.dragEnd.bind(this));
            this.$pileArray[i].addEventListener('mousedown', this.handleGameCardsClick.bind(this));
            this.$pileArray[i].addEventListener('click', this.handleMoveByClick.bind(this));
            console.log(this.$pileArray[i]);

        }

    }
    handleGetSelectedCard(e){
        const $target = e.target;
        console.log($target.classList);
        $target.classList.forEach(el => {
            if(el === 'up'){
                $target.dataset.selected = 'true';
                this.selectedStockCard = $target;
            }
        })
    }
    handleMoveByClick(e){
        const $target = e.target;
        const cardNumber = $target.firstChild.firstChild.firstChild.innerText;
        console.log(this.checkNumbers(cardNumber))
        if((this.checkNumbers(cardNumber) - this.checkNumbers(this.selectedStockCard.firstChild.firstChild.firstChild.innerText)) === 1){
            $target.parentNode.appendChild(this.selectedStockCard);
            this.wasteSuits.splice(this.wasteSuits.indexOf($target), 1);
            this.wasteSuits.splice(this.upperRow.stockSuits.indexOf($target), 1);
            this.selectedGameCard = [];
            return;
        }

    }
    checkNumbers(set){
        switch (set){
            case 'A':
                return 0;
                break;
            case 'J':
                return 11;
                break;
            case 'Q':
                return 12;
                break;
            case 'K':
                return 13;
                break;
            default:
                return set;
        }
    }
    handleMove(e){
        console.log(e.target);
        // подготовить к перемещению
        // 2. разместить на том же месте, но в абсолютных координатах
        e.target.style.position = 'absolute';
        this.move(e, e.target);
        // переместим в body, чтобы мяч был точно не внутри position:relative
        document.body.appendChild(e.target);

        e.target.style.zIndex = 1000; // показывать мяч над другими элементами


        // 3, перемещать по экрану
        document.onmousemove = function(e) {
            e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
            e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
        };

        // 4. отследить окончание переноса
    e.target.onmouseup = function() {
            document.onmousemove = null;
            e.target.onmouseup = null;
        }
    }
    onMouseMove(e, el){
        this.move(e, el)
    }

    move(event, el){
        console.log(el);
        el.style.left = event.pageX - el.offsetWidth / 2 + 'px';
        el.style.top = event.pageY - el.offsetHeight / 2 + 'px';
    }
    handleCkick(e){
        console.log(e.target)
    }
    dragStart(){

    }
    dragEnd(){

    }
    setListenersForEmptyPiles(){
        for (const empty of this.$pileArray) {
            empty.addEventListener('dragover', this.dragOver.bind(this));
            empty.addEventListener('dragenter', this.dragEnter.bind(this));
            empty.addEventListener('dragleave', this.dragLeave.bind(this));
            empty.addEventListener('drop', this.dragDrop.bind(this));
        }
    }
    dragOver(e){
        e.preventDefault();
        console.log('overed');
    }
    dragEnter(e){
        e.preventDefault();
        console.log('entered')
    }
    dragLeave(){
        console.log('leaved')
    }
    dragDrop(){

    }
    handleStockClick(ev){
        console.log(this.wasteSuits);
        if(this.selectedGameCard.length){
            this.selectedGameCard.forEach(card => card.dataset.selected = 'false')
        }
        if(this.wasteSuits.length){
            this.wasteSuits.forEach(card => {
                card.classList.remove('up');
                card.dataset.selected = false;
            })
        }
        // console.log(ev.target);
        if(!this.upperRow.stockSuits.length){
            this.upperRow.stockSuits = this.wasteSuits;
            this.wasteSuits = [];
            // this.stockSuits.forEach(card => this.$stockPile.insertBefore(card, ))
            for(let i = 0; i < this.upperRow.stockSuits.length; i += 1){
                this.upperRow.$stockPile.prepend(this.upperRow.stockSuits[i])
            }
            return
        }
        this.clickedCard = this.upperRow.stockSuits.pop();
        this.wasteSuits.unshift(this.clickedCard);
        // console.log(this.wasteSuits);
        this.upperRow.$wastePile.prepend(this.clickedCard);
        this.wasteSuits[0].classList.add('up');
        // console.log(this.wasteSuits);
    }
    handleGameCardsClick(e){
        const $target = e.target;
        const $parent = $target.parentNode.childNodes;
        // console.log($parent);
        if(this.selectedStockCard){
            this.selectedStockCard.dataset.selected = 'false';
        }
        this.selectedGameCard.forEach(el => el.dataset.selected = 'false');
        for (let i = 0; i < $parent.length; i += 1){
            // console.log(typeof +$parent[i].firstChild.firstChild.firstChild.innerText);
            if($parent[i] === $target){
                for(let j = i; j < $parent.length; j += 1){
                    this.selectedGameCard.push($parent[j]);
                    $parent[j].dataset.selected = 'true';
                    console.log(this.selectedGameCard)
                }
            }
        }


    }
}



console.log(); //
var a = 10;