let resposta = []
const bot = () => {

    const cards = ['diamond', 'spades', 'heart', 'club'];
    let currentCard
    
    while (currentCard != 'spades') {
      currentCard = cards[Math.floor(Math.random() * 4)];
      resposta.push(currentCard);
    }
    if (currentCard = 'spades'){
        return resposta;
    }
}