// Code your solution in this file!


function distanceFromHqInBlocks(pickup, start=42) {
     if (pickup > start) {
        return pickup-start;
     } else if (pickup < start) {
         return start-pickup;
     }
}


function distanceFromHqInFeet(x) {
    let blocks = distanceFromHqInBlocks(x);
    let feet = blocks * 264;
    return feet;
}


function distanceTravelledInFeet (block1, block2) {
    if (block1 > block2) {
        return (block1-block2)*264;
    } else if (block1 < block2) {
        return (block2-block1)*264;
    }
}



function calculatesFarePrice(beginning, destination) {
    let travel = distanceTravelledInFeet(beginning, destination);
    if (travel <= 400) {
        return travel*0;
    } else if (travel > 400 && travel <= 2000) {
        return (travel-400)*.02;
    } else if (travel > 2000 && travel <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}