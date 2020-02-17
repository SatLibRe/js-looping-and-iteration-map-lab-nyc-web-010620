// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map(function (el){
    return el.toLowerCase()
  })
}

function nameToAttributes(drivers){
  return drivers.map(function (el){
    return Object.assign({}, drivers, {firstName: drivers})
  })
}

return Object.assign({}, eng, { equipment: 'Laptop' });