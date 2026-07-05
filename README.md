# Pit Stop Queue
## Fit stop queue manager, example of snapshot for the engineer.

### The app helps the engineer with -
- What race is it (name)
- What is the lap number
- How many cars are in the race (total)
- How many cars has already finished - current round
- Which cars are waiting to - 'Pit Stop'
- Which car are next to enter the pit
- Can we send a radio message to next car
- What happend when we try searching car that doesn't exists in the race (error message) 

### === Project Structude ===
```
library-api/
│
│
├── main.js
├── data/
│   ├── race.json
│   └── data.js
|
├── services/
│   └── raceService.js
│
├── README.md
└── .gitignore
```

### === Project WorkFlow ===
- Opening message - title and name, starting message.
- Loading data (fetch) from server
- Printing full board - 
```
========== PIT STOP QUEUE ==========
Race: Monza Grand Prix
Lap: 34 / 53
Total cars in race: 3
Pit stops completed: 1

Cars waiting for pit stop:
- Car #44 | Driver: Daniel Levi
- Car #7 | Driver: Noa Barak
Next car to enter the pit:
>> Car #44 | Driver: Daniel Levi
=====================================
```
- 'Sending' radio message to next driver
- Printing an example of search car by his number, success and fail
- Final message - the procces finished.

### === Run by ===
```
node main.js
```

### Used functions:
- loadServerData
- saveToFile
- getData
- showGeneralData
- getWaitingCars
- showWaitingCars
- printRadioMessage
- searchCarByNumber(carNumber)
- showSearchCarEx
- generalMain