function gameObject() {
    const obj = {
      homeTeam: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assits: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evens": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assits: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assits: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assits: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assits: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      awayTeam: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assits: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assits: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assits: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assits: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Hayword": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assits: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
    return obj;
  }
  
  const game = gameObject();
  const players = playersObject();
  const teams = Object.values(game);
  
  function numPointsScored(playerName) {
    return players[playerName].points;
  }
  function shoeSize(playerName) {
    return players[playerName].shoe;
  }
  

  
  function teamColors(teamName) {
    return findByTeamName(teamName).colors;
  }
  
  
  function teamNames() {
    return teams.map((team) => team.teamName);
  }
  
  function playerNumbers(targetTeamName) {
    for (const team of teams) {
      if (team.teamName == targetTeamName) {
        let stats = Object.values(team.players);
        return stats.map((stat) => stat.number);
      }
    }
  }
  
  function playerStats(playerName) {
    return players[playerName];
  }
  
  function bigShoeRebounds() {
     
    const biggest = Object.values(players).sort((a, b) => {
      if (a.shoe > b.shoe) return -1; 
      if (a.shoe < b.shoe) return 1;
      if (a.shoe == b.shoe) return 0;
    })[0];
  
    return biggest.rebounds;
  }
  
  function mostPointsScored() {
     
    const sorted = Object.entries(players).sort((a, b) => {
      if (a[1].points > b[1].points) return -1;
      if (a[1].points < b[1].points) return 1;
      if (a[1].points == b[1].points) return 0;
    });
    return sorted[0][0]; 
  }
  
  function winningTeam() {
 
    const homeStats = Object.values(game.home.players); 
    const awayStats = Object.values(game.away.players); m
    const homeScore = homeStats.reduce((total, stat) => total + stat.points, 0);
    const awayScore = awayStats.reduce((total, stat) => total + stat.points, 0);
    debugger;
    if (homeScore > awayScore) {
      return game.home.teamName;
    } else if (awayScore > homeScore) {
      return game.away.teamName;
    } else {
      return "Teams are tied!"; 
  }
}
  
  
  function playerWithLongestName() {
    return Object.keys(players).sort((a, b) => {
      if (a.length > b.length) return -1;
      if (a.length < b.length) return 1;
      if (a.length == b.length) return 0;
    })[0];
  }
  

  function doesLongNameStealATon() {
    const allStats = Object.values(players);
    const maxSteals = Math.max(allStats.map((s) => s.steals));
    const longNameSteals = playerStats(playerWithLongestName()).steals;
    return longNameSteals === maxSteals;
  }
  
  debugger;