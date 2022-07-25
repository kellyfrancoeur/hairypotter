let idNumber = 1

export const makePottery = (potShape, potWeight, potHeight) => {
   let pots =  {
            shape: potShape,
            weight: potWeight,
            height: potHeight,
            id: idNumber++
        }
    return pots
}

