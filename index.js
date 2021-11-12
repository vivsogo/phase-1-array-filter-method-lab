function findMatching(drivers, string) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase() })
  }
 
  function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, string.length) === attribute.toLowerCase() })
  }
 
  function matchName(drivers, string) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }