import { fifaData } from './fifa.js';
// console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final */


// let dataFindByYearGame = fifaData.filter(function(item){
//     return item.Year === "2014" && item.stage === "Final" 
// });



const homeTeam2014Cup = [];

fifaData.forEach(function(item){
    if (item.Year === 2014 && item.Stage === "Final"){
        return homeTeam2014Cup.push(item["Home Team Name"]);
    }
})

console.log(homeTeam2014Cup)

// WARNING: return manipulates original function in a forEach



// (b) Away Team name for 2014 world cup final

const away2014Cup = [];

fifaData.forEach(function(item){
    if (item.Year === 2014 && item.Stage === "Final"){
        return away2014Cup.push(item["Away Team Name"]);
    }
})

console.log(away2014Cup)


// (c) Home Team goals for 2014 world cup final
// (d) Away Team goals for 2014 world cup final
// (e) Winner of 2014 world cup final */

let finals2014 = fifaData.filter(item => {
    return item.Year === 2014 && item.Stage === 'Final'
        }
    )

console.log('Task c: ->', finals2014[0]['Home Team Goals']);
console.log('Task d: ->', finals2014[0]['Away Team Goals']);
console.log('Task e: ->', finals2014[0]['Win conditions']);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(item => {
        return item.Stage === 'Final'
    })
};

console.log('Task 2 ->', getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    const years = callback.map(item =>{
        return item.Year
    })
    return years
    
};

console.log('Task 3 ->', getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 



// function getWinners(data){
//     console.log(data)
    
//     let winners = data.forEach(item =>{
//         if(item['Home Team Goals'] > item['Away Team Goals']){
//             return item['Home Team Name']
//          } //if
//         else if (item['Home Team Goals'] < item['Away Team Goals']){
//             return item['Away Team Name']
//         } //elseif
//         }   //forEach    
//     )
//     return winners
// };
// console.log(getWinners(getFinals(fifaData)));



function getWinners(data) {
    
    let winners = data.map(item =>{
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name']
        } //if
        else if (item['Home Team Goals'] < item['Away Team Goals']){
            return item['Away Team Name']
        } //elseif
        else if (item['Home Team Goals'] === item['Away Team Goals']){
            return item['Win conditions']
        }   //forEach    
    });
    return winners
}
console.log("Task 4 ->", getWinners(getFinals(fifaData)));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
    // console.log("This is the winner", getWinners)
    // console.log("This is the Years", getYears)

    let winStatement = getYears.map((item, index) =>{
        return `In ${getYears[index]}, ${getWinners[index]} won the world cup!`
        })
    return winStatement

};

// getWinnersByYear();

console.log("Task 5 ->", getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))))

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    

    let totalGoals = data.reduce((acc, item) => {
        return acc + item['Away Team Goals'] + item['Home Team Goals']
    }, 0)
    return (totalGoals / data.length).toFixed(2);
};

console.log("Task 6 ->", getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

