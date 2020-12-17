function generateCity() {
  var nationNum = Math.random(61)
  var cityNum = Math.random(5)
  var cityList = JSON.parse("cities.json")
  var nationList = JSON.parse("nations.json")
  console.log(cityList.list.nationNum.cityNum+", "+nationList.list.nationNum);
}
