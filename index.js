// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,-2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    

const createFareMultiplier = (fare) => {
    const fareQuintupler = () => {return fare * fare}
    return fareQuintupler
}

const fareDoubler = (cost) => {
   return cost * 2
    

}

const fareTripler = (bill) => {
    return bill * 3
    
}

const selectDifferentDrivers = (arrayOfDrivers, functionOfDrivers) => {
    if (functionOfDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (functionOfDrivers === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}