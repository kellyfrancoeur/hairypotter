// import { makePottery } from "./PotteryWheel"

export const firePottery = (potID, potTemp) => {
    const makeSomePots = {
        id: potID,
        temperature: potTemp,
        fired: true
    }
     makeSomePots.cracked = potTemp > 2200 ? true:false
    return makeSomePots
}