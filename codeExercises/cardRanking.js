const sortCard = (cards) => {
    rankOrder = {'2':0, '3':1, '4':2, '5':3,'6':4, '7':5, '8':6, '9':7, '10':8, 'J':9, 'Q':10, 'K':11, 'A':12 }

    sortedCards = cards.sort((x,y) => rankOrder[x] - rankOrder[y])

    return sortedCards

}

console.log(sortCard(['2','3','A','8','K']))


