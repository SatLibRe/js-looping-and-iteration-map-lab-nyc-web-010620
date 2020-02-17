// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map(function (el){
    return el.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const fName = driver.split(' ')[0];
    const lName = driver.split(' ')[1];

    return { firstName: fName, lastName: lName };
  });
}