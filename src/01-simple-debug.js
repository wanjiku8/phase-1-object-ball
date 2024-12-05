// console.log('Simple debugging example running.')
// debugger

// let x = 99
// debugger
// console.log(x)

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
  
    for (const team in game) {
      const players = game[team].players;
      for (const player in players) {
        debugger; // Pause here to inspect player data
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }
    console.log(`Largest shoe size: ${largestShoeSize}, Rebounds: ${rebounds}`);
    return rebounds;
  }
  