
import { makePottery } from "./PotteryWheel.js"
export const firePottery = (makeSomePots, potTemp) => {
    makeSomePots.fired = true
    if (potTemp > 2200) {
        makeSomePots.cracked = true
    } else {
        makeSomePots.cracked = false
    }
  
    return makeSomePots
}

   // const makeSomePots = {
    //     id: potID,
    //     temperature: potTemp,
    //     fired: true
    // }
    //  makeSomePots.cracked = potTemp > 2200 ? true:false