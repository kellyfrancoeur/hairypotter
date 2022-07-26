import { usePottery } from './PotteryCatalog.js'
// let htmlString = ``
let htmlString = ``
export const PotteryList = () => {
    let potArray = usePottery()
    for (const pot of potArray) {
        htmlString += `<section class="pottery" id="pottery--${pot.id}"> 
        <h2 class="pottery__shape">${pot.shape}</h2>
        <div class="pottery__properties">
          ${pot.shape} weighs ${pot.weight} grams and is ${pot.height} cm in height
        </div>
        <div class="pottery__price">
        Price is $${pot.price}
        </div>
      </section>
`
    }
  
    return htmlString
}
console.log(PotteryList())