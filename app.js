const fs = require('fs');
const {parse} = require('csv-parse');
const { csvArrayToObjects, filterObject } = require('./csv-helpers')

const parser = parse({delimiter: ','}, function(err, data){
  let csvObjects = csvArrayToObjects(data);
  let playerTable = filterRecords(csvObjects, [['player_name', 'name'], 'team', ['x', 'x-cord']])
  let teamTable = filterRecords(csvObjects, [['team', 'name']])

  console.log('matches', csvObjects);
//   console.log('players: ', playerTable);
//   console.log('teams: ', teamTable);
});

fs.createReadStream('1game_1.csv').pipe(parser);
