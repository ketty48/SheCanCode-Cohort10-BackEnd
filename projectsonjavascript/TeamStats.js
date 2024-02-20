const team={
    _players:[{firstName:'yanicke',lastName:'mukunzi',age:34},
              {firstName:'john',lastName:'santos',age:30},
              {firstName:'ben',lastName:'aziz',age:22}
],
    _games:[  
  
        { opponent: "Opponent 1", teamPoints: 75, opponentPoints: 65 },
        { opponent: "Opponent 2", teamPoints: 80, opponentPoints: 70 },
        { opponent: "Opponent 3", teamPoints: 70, opponentPoints: 75 }

    ],
    get players(){
        return this._players;
    },
    addPlayer(newFirstName, newLastName, newAge){
        let player= {
            firstName:newFirstName,
            lastName:newLastName,
            age:newAge
        };
        this._players.push(player);

    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
 let game={
    opponent:newOpponent,
    teamPoints:newTeamPoints,
    opponentPoints:newOpponentPoints
 }
    }
};
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);