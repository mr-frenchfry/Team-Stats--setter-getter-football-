const team = {
    _players: [player1 = {
        firstName: 'John',
        lastName: 'Smith',
        age: 49,
    }, player2 = {
        firstName: 'Terrel',
        lastName: 'Owens',
        age: 43,
    }, player3 = {
        firstName: 'Tom',
        lastName: 'Brady',
        age: 41,
    }, ],
    _games: [game1 ={
        opponent: 'Cowboys',
        teamPoints: 21,
        opponentPoints: 3
    }, game2 ={
        opponent: 'Raiders',
        teamPoints: 28,
        opponentPoints: 7
    }, game3 ={
        opponent: 'Bucs',
        teamPoints: 13,
        opponentPoints: 14
    }],

    get players(){
        return this._players;

    },
    
    get games(){
        return this._games;
    },

    addplayer(newFirstName,newLastName,newAge){
        player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        this._players.push(player);

    },

    addGame(newOpponenet, newTeamPoints, newOpponentPoints){
        game ={
            opponent: newOpponenet,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this._games.push(game);
    }

};
team.addplayer('rosalind','p', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
console.log(team.games);