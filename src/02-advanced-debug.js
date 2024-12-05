console.log('Advanced debugging example running.');
debugger;

// Define the function.
function goodPractices() {
  let game = gameObject(); 
  for (let gameKey in game) {
    debugger;
    let teamObj = game[gameKey]; 
    for (let teamKey in teamObj) {
      debugger;

      if (teamKey === "players") {
        let players = teamObj.players; 
        for (let playerName in players) {
          let playerStats = players[playerName];
          debugger; 
        }
      }
    }
  }
}

// Call the function.
goodPractices();
