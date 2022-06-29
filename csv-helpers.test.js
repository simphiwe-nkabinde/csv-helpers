const { csvArrayToObjects, filterObject } =  require('./csv-helpers');


// FilterObject() TEST
const person1 = {
    name: 'jack',
    secondName: 'johnson',
    hair: 'blue'
}
const person2 = {
    name: 'thomas',
    secondName: 'filly',
    hair: 'blonde'
}
const keyNameFilters = ['name', ['secondName', 'surname']]

test('filter objects by key names', () => {
    expect(filterObject(person1, keyNameFilters)).toHaveLength(1);
    expect(filterObject(person1, keyNameFilters)[0]).toHaveProperty('name');
    expect(filterObject(person1, keyNameFilters)[0]).toHaveProperty('surname');
    expect(filterObject(person1, keyNameFilters)[0]).not.toHaveProperty('secondName');
    expect(filterObject(person1, keyNameFilters)[0]).not.toHaveProperty('hair');
    
    expect(filterObject([person1, person2], keyNameFilters)).toHaveLength(2);
    expect(filterObject([person1, person2], keyNameFilters)[1]).toHaveProperty('name');
    expect(filterObject([person1, person2], keyNameFilters)[1]).toHaveProperty('surname');
    expect(filterObject([person1, person2], keyNameFilters)[1]).not.toHaveProperty('secondName');
    expect(filterObject([person1, person2], keyNameFilters)[1]).not.toHaveProperty('hair');
})


// csvArraysToObjects() TEST

const csvArray = [
    ['name', 'sEconD_nAme', 'Hair'],
    ['jack', 'johnson', 'blue'],
    ['thomas', 'philly', 'blonde']
]

test('convert csv array to list of objects', () => {
    expect(csvArrayToObjects(csvArray)).toHaveLength(2);
    expect(csvArrayToObjects(csvArray)[0]).toHaveProperty('name');
    expect(csvArrayToObjects(csvArray)[0]).toHaveProperty('second_name');
    expect(csvArrayToObjects(csvArray)[0]).toHaveProperty('hair');

    expect(csvArrayToObjects(csvArray)[1]).toHaveProperty('name');
    expect(csvArrayToObjects(csvArray)[1]).toHaveProperty('second_name');
    expect(csvArrayToObjects(csvArray)[1]).toHaveProperty('hair');
})