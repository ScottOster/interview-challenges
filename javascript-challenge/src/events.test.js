const { groupEventsByDay } = require('./events');

/*
create new object so its not mutating 
sort events ascending by date 
from this we have first event date/time
calculate difference in days for each event and add them to new object under key of said day difference
(may need to check if key exists already)
each days events should be sorted in ascnding order of starts at 






*/

describe.only('groupEventsByDay', () => {
  it('should return an object when passed an array ', () => {
    const actualOutput = groupEventsByDay(['test']);
    expect(typeof actualOutput).toBe('object');
  });
  it('should return an object with the correct keys and values, when passed array of events starting on different days', () => {
    const input = [
      {
        id: 3,
        startsAt: '2021-03-23T13:01:11Z',
        endsAt: '2021-03-23T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 1,
        startsAt: '2021-03-21T13:01:11Z',
        endsAt: '2021-03-21T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 4,
        startsAt: '2021-03-24T13:01:11Z',
        endsAt: '2021-03-24T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 5,
        startsAt: '2021-03-25T13:01:11Z',
        endsAt: '2021-03-25T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 2,
        startsAt: '2021-03-22T13:01:11Z',
        endsAt: '2021-03-22T15:01:11Z',
        title: 'Daily walk',
      },
    ];

    const actualOutput = groupEventsByDay(input);

    const expectedOutput = {
      0: [
        {
          id: 1,
          startsAt: '2021-03-21T13:01:11Z',
          endsAt: '2021-03-21T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 2,
          startsAt: '2021-03-22T13:01:11Z',
          endsAt: '2021-03-22T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      2: [
        {
          id: 3,
          startsAt: '2021-03-23T13:01:11Z',
          endsAt: '2021-03-23T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      3: [
        {
          id: 4,
          startsAt: '2021-03-24T13:01:11Z',
          endsAt: '2021-03-24T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      4: [
        {
          id: 5,
          startsAt: '2021-03-25T13:01:11Z',
          endsAt: '2021-03-25T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    expect(actualOutput).toEqual(expectedOutput);
  });
  it('should add multiple events to the same day where applicable', () => {
    const input = [
      {
        id: 3,
        startsAt: '2021-03-23T13:01:11Z',
        endsAt: '2021-03-23T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 1,
        startsAt: '2021-03-21T13:01:11Z',
        endsAt: '2021-03-21T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 4,
        startsAt: '2021-03-24T13:01:11Z',
        endsAt: '2021-03-24T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 5,
        startsAt: '2021-03-25T13:01:11Z',
        endsAt: '2021-03-25T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 2,
        startsAt: '2021-03-22T13:01:11Z',
        endsAt: '2021-03-22T15:01:11Z',
        title: 'Daily walk',
      },

      {
        id: 6,
        startsAt: '2021-03-23T16:01:11Z',
        endsAt: '2021-03-23T18:01:11Z',
        title: 'Daily walk',
      },
    ];

    const actualOutput = groupEventsByDay(input);

    const expectedOutput = {
      0: [
        {
          id: 1,
          startsAt: '2021-03-21T13:01:11Z',
          endsAt: '2021-03-21T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 2,
          startsAt: '2021-03-22T13:01:11Z',
          endsAt: '2021-03-22T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      2: [
        {
          id: 3,
          startsAt: '2021-03-23T13:01:11Z',
          endsAt: '2021-03-23T15:01:11Z',
          title: 'Daily walk',
        },
        {
          id: 6,
          startsAt: '2021-03-23T16:01:11Z',
          endsAt: '2021-03-23T18:01:11Z',
          title: 'Daily walk',
        },
      ],
      3: [
        {
          id: 4,
          startsAt: '2021-03-24T13:01:11Z',
          endsAt: '2021-03-24T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      4: [
        {
          id: 5,
          startsAt: '2021-03-25T13:01:11Z',
          endsAt: '2021-03-25T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    expect(actualOutput).toEqual(expectedOutput);
  });
});

test('moveEvent', () => {});
