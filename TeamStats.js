const team = 
{
	_games: [{opponent: 'Broncos', teamPoints: 42, opponentPoints: 27}],
  _players:[{firstName: 'Pablo',
lastName:'Sanchez',
age: 11}],
  get games() 
{
       return this._games;
},
  get players() 
{
       return this._players;
},
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
    },
  addGame(opp,myPTS,oppPTS)
  {
    const game =
		{
        opponent: opp,
          points: myPTS,
          opponentPoints: oppPTS
    };
      this.games.push(game);
  }
};
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('mgk',44,12)
console.log(team.games)
console.log('---------------------------------------------')
console.log(team.players)