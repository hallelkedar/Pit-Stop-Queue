# Pit Stop Queue
## Fit stop queue manager, example of snapshot for the engineer.

### === Project Structude ===
```
library-api/
│
│
├── main.js
├── data/
│   └── data.js
|
├── services/
│   ├── infoService.js
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
