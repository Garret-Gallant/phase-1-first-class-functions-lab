// Code your solution in this file!

function returnFirstTwoDrivers(array){
    return array.slice(0 , 2);
}

function returnLastTwoDrivers(array){
    return array.slice(2 , 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple){
    return function fareMultiplier(fare){
        return fare * multiple;
    };
}

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, selectingDrivers) => {
    return selectingDrivers(array);
};







