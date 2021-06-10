var differenceInCalendarDays = require('date-fns/differenceInCalendarDays');

const findDaysFromStart = (activityDate, earliestDate) => {
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

  return sortedEventsArray;
};

module.exports = { findDaysFromStart, eventSorter };
