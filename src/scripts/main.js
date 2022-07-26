// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 3)
let bowl = makePottery("Bowl", 3, 5)
let vase = makePottery("Flower Vase", 5, 10)
let paperWeight = makePottery("Pet Rock", 4, 2)
let platter = makePottery("Platter", 5, 7)


// console.log(mug)
// console.log(bowl)
// console.log(vase)
// console.log(paperWeight)
// console.log(platter)
// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug.id, 2205)
let fireBowl = firePottery (bowl.id, 2001)
let fireVase = firePottery(vase.id, 2300)
let firePaperweight = firePottery(paperWeight.id, 2250)
let firePlatter = firePottery(platter.id, 2170)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list


