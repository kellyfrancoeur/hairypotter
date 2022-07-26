// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 3)
let bowl = makePottery("Bowl", 3, 5)
let vase = makePottery("Flower Vase", 7, 10)
let paperWeight = makePottery("Pet Rock", 4, 2)
let platter = makePottery("Platter", 8, 7)


// console.log(mug)
// console.log(bowl)
// console.log(vase)
// console.log(paperWeight)
// console.log(platter)
// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 2105)
let fireBowl = firePottery (bowl, 2001)
let fireVase = firePottery(vase, 2300)
let firePaperweight = firePottery(paperWeight, 1250)
let firePlatter = firePottery(platter, 2170)


// Determine which ones should be sold, and their price
let sellinMugs = toSellOrNotToSell(fireMug)
let sellinBowls = toSellOrNotToSell(fireBowl)
let sellinVases = toSellOrNotToSell(fireVase)
let sellinPaperweights = toSellOrNotToSell(firePaperweight)
let sellinPlatters = toSellOrNotToSell(firePlatter)
console.log(sellinMugs)
console.log(sellinBowls)
console.log(sellinVases)
console.log(sellinPaperweights)
console.log(sellinPlatters)
console.log(usePottery)
// Invoke the component function that renders the HTML list
let printTheseStupidPots = PotteryList()
document.querySelector(".potteryList").innerHTML = printTheseStupidPots


// parentHTMLElement.innerHTML = potteryList(usePottery())
