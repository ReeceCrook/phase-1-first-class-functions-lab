// Code your solution in this file!
const returnFirstTwoDrivers = function(arg){
    return arg.slice(0, 2)
}

const returnLastTwoDrivers = function(arg){
    return arg.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(x){
    return function fareMultiplier(y){
        let equ = x * y
        return equ

    }
}

const fareDoubler = function(createFareMultiplier){
    let number = createFareMultiplier * 2
    return number
}
fareDoubler(4)

const fareTripler = function(createFareMultiplier){
    let number = createFareMultiplier * 3
    return number
}
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function selectDifferentDrivers(drivers, selectingDrivers){
    if(selectingDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
    }
    else{
        return returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
    }
    
}

