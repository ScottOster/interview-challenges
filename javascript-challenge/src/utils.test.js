const { daysFromStart, eventSorter } = require('../src/utils');

describe('daysFromStart', () => {
  it('should return a number when passed two ISO strings', () => {
    const activityDate = '2021-01-29T13:01:11Z';
    const earliestDate = '2021-01-27T13:01:11Z';
    const actualOutput = daysFromStart(activityDate, earliestDate);
    expect(typeof actualOutput).toBe('number');
  });
  it('should return correct number of days difference when passed two ISO strings', () => {
    const activityDate = '2021-01-29T13:01:11Z';
    const earliestDate = '2021-01-27T13:01:11Z';
    const actualOutput = daysFromStart(activityDate, earliestDate);
    expect(actualOutput).toBe(2);
  });

  it('should return correct number of days difference when passed two ISO strings', () => {
    const activityDate = '2022-01-29T13:01:11Z';
    const earliestDate = '2021-01-27T13:01:11Z';
    const actualOutput = daysFromStart(activityDate, earliestDate);
    expect(actualOutput).toBe(367);
  });
});

describe('eventSorter', () => {
  it('should return an array when passed an array ', () => {
    const actualOutput = eventSorter([]);

    expect(actualOutput).toEqual([]);
  });

  it('should return correctly sorted array of objects in date ascending order', () => {
    const input = [
      {
        id: 107,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 50,
        startsAt: '2020-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 150,
        startsAt: '2021-02-29T13:01:11Z',
        endsAt: '2021-02-27T15:01:11Z',
        title: 'Daily walk',
      },
    ];

    const expectedOutput = [
      {
        id: 50,
        startsAt: '2020-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 107,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 150,
        startsAt: '2021-02-29T13:01:11Z',
        endsAt: '2021-02-27T15:01:11Z',
        title: 'Daily walk',
      },
    ];

    const actualOutput = eventSorter(input);

    expect(actualOutput).toEqual(expectedOutput);
  });
  it('should return correctly sorted array of objects in date ascending order, even if all events are on same day', () => {
    const input = [
      {
        id: 250,
        startsAt: '2021-01-27T13:03:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 200,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 225,
        startsAt: '2021-01-27T13:02:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
    ];

    const expectedOutput = [
      {
        id: 200,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 225,
        startsAt: '2021-01-27T13:02:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 250,
        startsAt: '2021-01-27T13:03:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
    ];

    const actualOutput = eventSorter(input);

    expect(actualOutput).toEqual(expectedOutput);
  });
});
