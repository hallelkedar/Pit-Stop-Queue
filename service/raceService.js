import { log } from "console";
import { getData } from "../data/data.js";

export async function showGeneralData() {
    try {
        const data = await getData()
        console.log('========== PIT STOP QUEUE ==========');
        
        const board = `
        Race: ${data.raceName}
        Lap: ${data.currentLap}/${data.totalLaps}
        Total cars in race: ${data.cars.length}
        Pit stops completed: ${data.cars.filter(car => car.status === 'done').length}
        `
        console.log(board);
        
    }
    catch (err) {
        console.log(err.message);
        
    }   
}

async function getWaitingCars() {
    try {
        const data = await getData()
        console.log('Cars waiting for pit stop:\n');
        const waitingCars = data.cars.filter(
            car => car.status === 'waiting'
        )
        return waitingCars
    }
    catch (err) {
        console.log(err.message);
        
    }
}

export async function showWaitingCars() {
    const waitingCars = await getWaitingCars()
    for (const car of waitingCars) {
        console.log(`- Car #${car.carNumber} | Driver: ${car.driverName}`); 
    }
    console.log('\nNext car to enter the pit:');
    console.log(`>> Car #${waitingCars[0].carNumber} | Driver: ${waitingCars[0].driverName}`);
    console.log('=====================================');
        
    
}

export async function printRadioMessage() {
    const waitingCars = await getWaitingCars()
    console.log(`Radio message to car #${waitingCars[0].carNumber}: "Box box box, ${waitingCars[0].driverName}, pit this lap!"\n`);
    
}

async function searchCarByNumber(carNumber) {
    try {
        const data = await getData()
        const car = data.cars.find(car => car.carNumber === carNumber)
        if (!car) throw new Error(`Error: No car found with number #${carNumber} in the current race.`)
        return `Found car #${car.carNumber} | Driver: ${car.driverName} | Status: ${car.status}`
    } catch (err) {
        return err.message
    }
}

export async function showSearchCarEx() {
    console.log('--- Search for a car by number ---');
    const car44 = await searchCarByNumber(44)
    const car99 = await searchCarByNumber(99)
    console.log(car44);
    console.log(car99);
    
}

