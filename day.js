//returns the day of the week for given date

function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[now.getDay()];
}

function greeting(date) {
  return `hello, world! Happy ${dayName(date)}`;
}
