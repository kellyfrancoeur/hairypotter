
let sellinSomePots = []
let pot = []
export const toSellOrNotToSell = (potObject) => {
    if (potObject.cracked === false) {
        if (potObject.weight < 6) {
            potObject.price = 20
        } else {
            potObject.price = 40
        }
        sellinSomePots.push(potObject)
    }
    else{

    }
    return potObject
}

export const usePottery = () => {
    pot = [...sellinSomePots]
    return pot 
}