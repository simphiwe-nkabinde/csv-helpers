let myKeys = [
      'id',              'Start_minutes',
      'End_minutes',     'X',
      'Y',               'Team',
      'Action',          'Half',
      'Player_Name',     'next_player',
      'next_action',     'next_x',
      'next_y',          'event_id',
      'next_team',       'next_event_id',
      'xt_value',        'Date',
      'Game',            'League',
      'Manager',         'Match_ID',
      'Season',          'Opposition_Team',
      'Shots',           'SoT',
      'Goals_scored',    'Goals_conceded',
      'Accurate passes', 'Inaccurate passes',
      'Passes',          'xG',
      'Unnamed: 31',     'XG',
      'Team.1',          'Unnamed: 34'
    ]

let myValues =   [
    '5',
    '0',
    '0.17',
    '43.4',
    '49.2',
    'Mamelodi Sundowns',
    'Accurate passes',
    '1st half',
    'George Maluleka',
    'Themba Zwane',
    'Positional attacks',
    '60.3',
    '56.7',
    '3',
    'Mamelodi Sundowns',
    '4',
    '0.00342639',
    '12/04/2022',
    'Mamelodi Sundowns vs Lamontville Golden Arrows - 6:0',
    'PSL',
    'Manqoba Mngqithi/Rulani Mokeona',
    '174',
    '2021/22',
    'Lamontville Golden Arrows',
    '0',
    '0',
    '0',
    '0',
    '1',
    '0',
    '1',
    '',
    '',
    '',
    '',
    ''
  ]

let myObj = {}

myKeys.forEach((element, index) => {
    myObj[element.toLowerCase()] = myValues[index]
});

console.log(myObj);

let testArr = [myObj]

let another = testArr.map((match) => {
    return {
    'name': match.player_name
    }
})
console.log('mutated: ', another);

function readData(mixedArray) {
    relation = []
    keys = mixedArray[0]

    for (let i = 1; i < mixedArray.length; i++) {
        const record = mixedArray[i];
        let recordObj = {}
        for (let j = 0; j < record.length; j++) {
            const key = keys[j].toLowerCase()
            const value = record[j];
            recordObj[key] = value
        }
        relation.push(recordObj)
    }
    return relation;
}