// Code your solution in this file!
 function logDriverNames(drivers) {
   drivers.forEach(function(driver) {
     console.log(driver.name);
   })
 }

 function logDriversByHometown(drivers, location) {
   drivers.forEach(function (driver) {
     if (driver.hometown === location) {
        console.log(driver.name);
     }
   })
 }

 function driversByRevenue(drivers) {
   new_drivers = drivers.slice()
   return new_drivers.sort(function (driver1, driver2) {
     return driver1.revenue - driver2.revenue
   })
 }

 function driversByName(drivers) {
   new_drivers = drivers.slice()
   return new_drivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
 }

 function totalRevenue(drivers) {
   return drivers.reduce(function (total, driver) {
     return driver.revenue + total
   }, 0)
  }

  function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length
  }
