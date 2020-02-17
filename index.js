// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map(function (el){
    return el.toLowerCase()
  })
}

function nameToAttributes(drivers){
   const splitNameDrivers = drivers.map(function(el){
   return el.split(" ")
 }) 

const fNameDrivers = splitNameDrivers.map(function(el){
  return el[0]
})

const lNameDrivers = splitNameDrivers.map(function(el){
  return el[1]
})

  return drivers.map(function (el){
    return Object.assign({}, drivers, {firstName: drivers})
  })
}

return Object.assign({}, eng, { equipment: 'Laptop' });