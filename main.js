
import { log } from "console";
import { loadServerData } from "./data/data.js";
import { showGeneralData, printRadioMessage, showWaitingCars, showSearchCarEx } from "./service/raceService.js";


async function generalMain() {
    const startMsg = `Pit Stop Queue - Race Team Management System
Race engineer: "Let's check the current queue status on the pit wall."\n`
    console.log(startMsg)

    console.log('Loading queue data...\n');
    await loadServerData()
    
    await showGeneralData()
    await showWaitingCars()
    await printRadioMessage()
    await showSearchCarEx()

    console.log('\nProcess completed successfully. The pit wall is up to date.');


}
generalMain()