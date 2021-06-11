const differenceInCalendarDays = require('date-fns/differenceInCalendarDays');
const addDays = require('date-fns/add');
const removeDays = require('date-fns/sub');

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

const eventDatesChanger = (changeInDays, startsAt, endsAt) => {
  const newDatesArray = [];

  if (changeInDays > 0) {
    newDatesArray.push(
      addDays(new Date(startsAt), {
        days: changeInDays,
      }),
    );

    newDatesArray.push(
      addDays(new Date(endsAt), {
        days: changeInDays,
      }),
    );
  } else {
    newDatesArray.push(
      removeDays(new Date(startsAt), {
        days: Math.abs(changeInDays),
      }),
    );

    newDatesArray.push(
      removeDays(new Date(endsAt), {
        days: Math.abs(changeInDays),
      }),
    );
  }

  const datesWithoutMilliseconds = newDatesArray.map((date) => {
    return date.toISOString().split('.')[0] + 'Z';
  });

  return datesWithoutMilliseconds;
};

module.exports = { findDaysFromStart, eventSorter, eventDatesChanger };
