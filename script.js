// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
	  [
		 'Neuer',
		 'Pavard',
		 'Martinez',
		 'Alaba',
		 'Davies',
		 'Kimmich',
		 'Goretzka',
		 'Coman',
		 'Muller',
		 'Gnarby',
		 'Lewandowski',
	  ],
	  [
		 'Burki',
		 'Schulz',
		 'Hummels',
		 'Akanji',
		 'Hakimi',
		 'Weigl',
		 'Witsel',
		 'Hazard',
		 'Brandt',
		 'Sancho',
		 'Gotze',
	  ],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
	  team1: 1.33,
	  x: 3.25,
	  team2: 6.5,
	},
 };

 const [players1, players2] = game.players;
 console.log(players1, players2);

 const [gk, ...fieldPlayers] = players1;
 console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = ['Thiago', 'Coutinho','Perisic', ...players1];
console.log(players1Final);

const printGoals = function (...players) {
	console.log(players);
	console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
printGoals(...game.scored);



game.odds.team1 < game.odds.team2 && console.log(`The  team 1 is more likely to win!`);
game.odds.team2 < game.odds.team1 && console.log(`The  team 2 is more likely to win!`);


for (const [i,el] of game.scored.entries()){
	console.log(`Goal ${i + 1}: ${el}`);
}
//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const values = Object.values(game.odds);
let avarageOdd = 0;
console.log(values);
for (let i = 0; i < values.length; i++){
	avarageOdd += values[i];
}
avarageOdd /= values.length;
console.log(avarageOdd);

for (const [team,odd] of Object.entries(game.odds)){
//	console.log(team, odd);
const teamName = team === 'x' ? 'draw' : `victory ${game[team]}`;
console.log(`Odd of ${teamName} ${odd}`);
}

const scorers = {};
for (const player of game.scored){
	console.log(player);
	scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const gameEvents = new Map([
	[17, '⚽️ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽️ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽️ GOAL'],
	[80, '⚽️ GOAL'],
	[92, '🔶 Yellow card'],
 ]);
 
// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [new Set (gameEvents.values())];
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//      [FIRST HALF] 17: ⚽️ GOAL

for(const [key, value] of gameEvents){
	key <= 45 ?  console.log(`[FIRST HALF] ${key}:${value}`) : console.log(`[SECOND HALF] ${key}:${value}`);
}