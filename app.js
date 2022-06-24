const fs = require('fs');
const {parse} = require('csv-parse');

const parser = parse({delimiter: ','}, function(err, data){
  let csvObjects = csvArrayToObjects(data);
  let playerTable = filterRecords(csvObjects, {newKey: 'name', oldKey: 'player_name'})
  let teamTable = filterRecords(csvObjects, {newKey: 'name', oldKey: 'team'})
//   teamTable.push(filterRecords(csvObjects, {newKey: 'name', oldKey: 'opposition_team'}))

  console.log('matches', csvObjects.length);
  console.log('players: ', playerTable.length);
  console.log('teams: ', teamTable.length);
});

fs.createReadStream('1game_1.csv').pipe(parser);

/**
 * takes mixed array of data from a parsed cvs file. creates array of objects containing each record with corresponding key names and values.
 * @param  {[[string]]} csvArray mixed array of data. array[0] contains column/key names. The rest contain values
 * @return {[{}]}      object array of all records
 */
function csvArrayToObjects(csvArray) {
    let records = [];

    //column/key names from first row
    const keys = csvArray[0];

    for (let i = 1; i < csvArray.length; i++) {
        const recordArr = csvArray[i];
        let recordObj = {}
        for (let j = 0; j < recordArr.length; j++) {
            // set key value pairs for each record
            const key = keys[j].toLowerCase()
            const value = recordArr[j];
            recordObj[key] = value
        }
        records.push(recordObj)
    }
    return records;
}

/**
 * [someFunction description]
 * @param  {[{}]} records object array of records
 * @param  {[{newKey: string, oldKey: string}]} options list of key names to include and/or change from record object keys names.
 * @return {[{}]}      filtered record objects. 
 */
function filterRecords(records, options) {
    let another = records.map((match) => {
        return { [options.newKey]: match[options.oldKey]  }
    })
    //remove duplicates
    let clean = [...new Set(another.map(JSON.stringify))].map(JSON.parse);
    return clean;
}