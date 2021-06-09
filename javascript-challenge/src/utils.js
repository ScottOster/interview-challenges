var differenceInCalendarDays = require('date-fns/differenceInCalendarDays');

const daysFromStart = (activityDate, earliestDate) => {
  const difference = differenceInCalendarDays(
    new Date(activityDate),
    new Date(earliestDate),
  );
  return difference;
};

const eventSorter = (newEventsArray) => {
  const sortedEventsArray = newEventsArray.sort((a, b) => {
    return new Date(a.startsAt) - new Date(b.startsAt);
  });
  console.log(sortedEventsArray);
  return sortedEventsArray;
};

module.exports = { daysFromStart, eventSorter };
