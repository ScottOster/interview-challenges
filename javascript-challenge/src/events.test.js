const { groupEventsByDay, moveEventToDay } = require('./events');

describe('groupEventsByDay', () => {
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

describe('moveEventToDay', () => {
  it('should return an object when passed an object ', () => {
    const eventsByDay = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-01T13:01:11Z',
          endsAt: '2021-01-01T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 102,
          startsAt: '2021-01-02T13:01:11Z',
          endsAt: '2021-01-02T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };
    const actualOutput = moveEventToDay(eventsByDay);
    expect(typeof actualOutput).toBe('object');
  });

  it('should adjust the start and end date of event with specific id, and move event to correct new day  ', () => {
    const eventsByDay = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-01T13:01:11Z',
          endsAt: '2021-01-01T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 102,
          startsAt: '2021-01-02T13:01:11Z',
          endsAt: '2021-01-02T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      2: [
        {
          id: 103,
          startsAt: '2021-01-03T13:01:11Z',
          endsAt: '2021-01-03T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      3: [
        {
          id: 104,
          startsAt: '2021-01-04T13:01:11Z',
          endsAt: '2021-01-05T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    const actualOutput = moveEventToDay(eventsByDay, 102, 5);

    const expectedOutput = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-01T13:01:11Z',
          endsAt: '2021-01-01T15:01:11Z',
          title: 'Daily walk',
        },
      ],

      2: [
        {
          id: 103,
          startsAt: '2021-01-03T13:01:11Z',
          endsAt: '2021-01-03T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      3: [
        {
          id: 104,
          startsAt: '2021-01-04T13:01:11Z',
          endsAt: '2021-01-05T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      5: [
        {
          id: 102,
          startsAt: '2021-01-06T13:01:11Z',
          endsAt: '2021-01-06T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    expect(expectedOutput).toEqual(actualOutput);
  });
  it('should work for adding events to already existing days  ', () => {
    const eventsByDay = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-01T13:01:11Z',
          endsAt: '2021-01-01T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 102,
          startsAt: '2021-01-02T13:01:11Z',
          endsAt: '2021-01-02T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      2: [
        {
          id: 103,
          startsAt: '2021-01-03T11:01:11Z',
          endsAt: '2021-01-03T12:01:11Z',
          title: 'Daily walk',
        },
      ],
      3: [
        {
          id: 104,
          startsAt: '2021-01-04T13:01:11Z',
          endsAt: '2021-01-05T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    const actualOutput = moveEventToDay(eventsByDay, 103, 3);

    const expectedOutput = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-01T13:01:11Z',
          endsAt: '2021-01-01T15:01:11Z',
          title: 'Daily walk',
        },
      ],

      1: [
        {
          id: 102,
          startsAt: '2021-01-02T13:01:11Z',
          endsAt: '2021-01-02T15:01:11Z',
          title: 'Daily walk',
        },
      ],

      3: [
        {
          id: 103,
          startsAt: '2021-01-04T11:01:11Z',
          endsAt: '2021-01-04T12:01:11Z',
          title: 'Daily walk',
        },
        {
          id: 104,
          startsAt: '2021-01-04T13:01:11Z',
          endsAt: '2021-01-05T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    expect(expectedOutput).toEqual(actualOutput);
  });

  it('should work when changing the earliest event , and adjust all subsequent plans from the new zero day', () => {
    const eventsByDay = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-01T13:01:09Z',
          endsAt: '2021-01-01T15:01:09Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 102,
          startsAt: '2021-01-02T13:01:11Z',
          endsAt: '2021-01-02T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      2: [
        {
          id: 103,
          startsAt: '2021-01-03T13:01:11Z',
          endsAt: '2021-01-03T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      3: [
        {
          id: 104,
          startsAt: '2021-01-04T13:01:11Z',
          endsAt: '2021-01-05T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    const actualOutput = moveEventToDay(eventsByDay, 101, 1);

    const expectedOutput = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-02T13:01:09Z',
          endsAt: '2021-01-02T15:01:09Z',
          title: 'Daily walk',
        },
        {
          id: 102,
          startsAt: '2021-01-02T13:01:11Z',
          endsAt: '2021-01-02T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 103,
          startsAt: '2021-01-03T13:01:11Z',
          endsAt: '2021-01-03T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      2: [
        {
          id: 104,
          startsAt: '2021-01-04T13:01:11Z',
          endsAt: '2021-01-05T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };
    expect(expectedOutput).toEqual(actualOutput);
  });

  it('should be able to move events backwards (schedule for earlier day)', () => {
    const eventsByDay = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-01T13:01:09Z',
          endsAt: '2021-01-01T15:01:09Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 102,
          startsAt: '2021-01-02T13:01:11Z',
          endsAt: '2021-01-02T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      2: [
        {
          id: 103,
          startsAt: '2021-01-03T13:01:09Z',
          endsAt: '2021-01-03T15:01:09Z',
          title: 'Daily walk',
        },
      ],
      3: [
        {
          id: 104,
          startsAt: '2021-01-04T13:01:11Z',
          endsAt: '2021-01-05T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };
    const actualOutput = moveEventToDay(eventsByDay, 103, 1);

    const expectedOutput = {
      0: [
        {
          id: 101,
          startsAt: '2021-01-01T13:01:09Z',
          endsAt: '2021-01-01T15:01:09Z',
          title: 'Daily walk',
        },
      ],
      1: [
        {
          id: 103,
          startsAt: '2021-01-02T13:01:09Z',
          endsAt: '2021-01-02T15:01:09Z',
          title: 'Daily walk',
        },
        {
          id: 102,
          startsAt: '2021-01-02T13:01:11Z',
          endsAt: '2021-01-02T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      3: [
        {
          id: 104,
          startsAt: '2021-01-04T13:01:11Z',
          endsAt: '2021-01-05T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };
    expect(expectedOutput).toEqual(actualOutput);
  });
});
