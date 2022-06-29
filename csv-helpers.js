
/**
 * convert csv array to list of objects with corresponding key value properties
 * @param  {[[string]]} csvArray 2d array of parsed csv data. array[0] is a list of key names. all other rows contain values.
 * @return {[{}]}      objects with corresponding key value pairs.
 */
 exports.csvArrayToObjects = (csvArray) => {
    let records = [];

    //column names from first row of csv parsed array
    const keysRow = csvArray[0];

    for (let i = 1; i < csvArray.length; i++) {
        const valuesRow = csvArray[i];
        let recordObj = {}
        for (let j = 0; j < valuesRow.length; j++) {
            // set key value pairs for each record
            const key = keysRow[j].toLowerCase()
            const value = valuesRow[j];
            recordObj[key] = value
        }
        records.push(recordObj)
    }
    return records;
}


/**
 * takes an object or array of objects with key value pairs. filters each object by specified
 * key name/s and corresponding values. Changes existing key names to new key names and includes corresponding values.
 * @param  {[{}]} objects single object or list of objects with key value pairs
 * @param  {[string, [string,string]]} keyNames list of key names to include and to alter & include. eg.[ 'keyNameToInclude', ['oldKeyName', 'newKeyNew'], ] 
 * @return {[{}]}      filtered objects with specified key names and values. 
 */
 exports.filterObject = (objects, keyNames) => {
    //if single object is given
    if (!Array.isArray(objects)) {
        objects = [objects]
    }

    let filteredArr = objects.map((property) => {
        let recordObj = {}

        //add key value pair to recordObj for each key name from keyNames param
        keyNames.forEach(keyName => {
            // if key name is only to be included and not altered. eg. [ ..., 'KeyName', ...]
            if (typeof keyName == 'string') {
                recordObj[keyName] = property[keyName]
            } else {
                //if keyName is to be altered and included. eg. [..., ['oldKeyName', 'newKeyName'], ...]
                recordObj[keyName[1]] = property[keyName[0]]
            }
        });
        return recordObj;
    })
    //remove duplicates
    let cleanArray = [...new Set(filteredArr.map(JSON.stringify))].map(JSON.parse)
    return cleanArray;
}