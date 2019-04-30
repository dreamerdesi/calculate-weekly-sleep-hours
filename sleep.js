// calculate the hours slept a 7 day  week period
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

// the ideal hours per night you want to sleep
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}
// calculate the actual hours you slept against the ideal sleep hours
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('you got the perfect amount of sleep, sis.');
} else if (actualSleepHours > idealSleepHours) {
  console.log('you got more sleep than needed!');
} else {
  console.log('you need more sleep, sis. you have a sleep debt of'  + (idealSleepHours - actualSleepHours) + ' hours sleep this week.');
}
  
}
// run the function of calculation of sleep
calculateSleepDebt();
