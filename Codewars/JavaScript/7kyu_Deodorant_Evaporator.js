function evaporator(content, evap_per_day, threshold) { 
  let result = 0, contentPercent = 100;
  while (contentPercent > threshold) {
    contentPercent *= 1 - (evap_per_day / 100.0);
    result++;
  }
  return result;
}

console.log(evaporator(10, 10, 5));

// others
function evaporator2(content, evap_per_day, threshold){ // 양변에 log
  threshold = threshold / 100
  evap_per_day = evap_per_day / 100
  return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
}