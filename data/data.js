import { log } from "console";
import fs from "fs/promises";
import { waitForDebugger } from "inspector";

const APIURL = "https://server-for-test-week-13.onrender.com/api/race";
const DATAPATH = "data/race.json";

async function loadServerData() {
  try {
    const res = await fetch(APIURL);
    if (!res.ok) throw new Error(res.status);
    const data = await res.json()
    await saveToFile(data)
    return true
    
  } catch (err) {
    return err.message;
  }
}

async function saveToFile(obj) {
  try {
    await fs.writeFile(DATAPATH, JSON.stringify(obj, null, 2), 'utf-8');
    
  } catch (err) {
    return err.message;
  }
}

export async function getData() {
    try {
    const data =  await fs.readFile(DATAPATH, 'utf-8')
    return JSON.parse(data)
    }
    catch (err) {
        return err.message
    }
}   
