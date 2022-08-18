const team = {
    _players: [{firstname: 'nombre1', lastname: 'lastname1', age:12},            
               {firstname: 'nombre2', lastname: 'lastname2', age:13},
               {firstname: 'nombre3', lastname: 'lastname3', age:14}],
    _games: [{opponent:'oponente1', teamPoints:33, opponentPoints:55},
             {opponent:'oponente2', teamPoints:33, opponentPoints:66},
             {opponent:'oponente3', teamPoints:78, opponentPoints:99},],
  
    addPlayer(newFirstName, newLastName, newAge){
      let player = {firstName:'mewFirstName', lastName:'newLastName', age:6};
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {opponent: newOpponent, teamPoints:newTeamPoints, opponentPoints:newOpponentPoints};
  },
  
    get players (){
      return this._players;
    },
  
    get games (){
      return this._games;
    }
  
  };  
  team.addPlayer('Bugs', 'Bunny', 76);
  
  
  team.addGame('manolo', 55, 23);