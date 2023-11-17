

/*Be sure to use meaningful variable names.  
Try to use map and reduce in your functions as appropriate. */


export type Player = {
    jersey: number;
    stats: Stats[];
}

export type Stats = {
    game: number;
    points: number;
}

export type JerseyPoints = {
    jersey: number;
    total: number;
}

//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];

export function findTotalPlayerPoints(player:Player):number{
    let sumPlayerPoints = 0;
    for(const stat of player.stats){
      sumPlayerPoints+=stat.points
    }
    return sumPlayerPoints;
  }

export function findTotalPointsByJersey(jerseyNumber:number):number{
  let sumPlayerPoints = 0;
  for(const player of teamStats){
    if(jerseyNumber === player.jersey){
        for(const points of player.stats){
            sumPlayerPoints+=points.points
          }
    }
  }
  return sumPlayerPoints;
}
//  it("tests findTotalScores", function () {
//         const jerseyPoints = [{jersey: 8, total: 13}, {jersey: 12, total: 30}, {jersey: 6, total: 16}];
//         assert.deepEqual(findTotalScores(teamStats), jerseyPoints);
//   });
//


