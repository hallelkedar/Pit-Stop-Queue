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

export async function showWaitingCars() {
    try {
        const data = await getData()
        console.log('Cars waiting for pit stop:\n');
        const waitingCars = data.cars.filter(
            car => car.status === 'waiting'
        )
        for (const car of waitingCars) {
            console.log(`- Car #${car.carNumber} | Driver: ${car.driverName}`); 
        }
        console.log('\nNext car to enter the pit:');
        console.log(`>> Car #${waitingCars[0].carNumber} | Driver: ${waitingCars[0].driverName}`);
        console.log('=====================================');
        
    }
    catch (err) {
        console.log(err.message);
        
    }
}

