// Code your solution here

// function findMatching(drivers) {
//     return drivers.prototypes.filter(drivers=>drivers===drivers)
// }

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

// to add a change to the string such as uppercase a letter, make driver and name equal, while adding .toUpperCase() 
// for each driver, see if it meets this condition = (=>) the driver to the new array that is the same as the name parameter.

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.startsWith(name))
}

// this function allows for, when inputing name, results populate for names with same beginning letters (match).
// lets say, name is "B", driver inside of the filter is "Bobby", bobby.startswith(name) "B", "Bobby" will return. "Bobby" will be put into an array, which will be eventually returned.
// "Tommy" does not start with B, so it will not be returned. 
// someone comes along, types in their name, this function searches the array for names with matching letter, returns only values that are true.

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name )
}

// drivers is an array of objects with each object having a name and hometown key.

// to capture the property of an object, use dot notation ^ driver.name