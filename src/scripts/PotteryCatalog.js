const sellinSomePots = []

export const toSellOrNotToSell = (potObject) => {
    if (potObject.cracked === true) {
        if (potObject.weight >= 6) {
            potObject.price = 40
        } else {
            potObject.price = 20
        }
        sellinSomePots.push(potObject)
    }
    if (potObject.cracked === false) {
        sellinSomePots.push(potObject)
    }
    return potObject
}

export const usePottery = () => {
    const pot = [...sellinSomePots]
    return pot 
}