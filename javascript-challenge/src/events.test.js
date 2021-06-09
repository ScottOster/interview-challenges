const { groupEventsByDay } = require('./events');

/*
create new object so its not mutating 
sort events ascending by date 
from this we have first event date/time
calculate difference in days for each event and add them to new object under key of said day difference
(may need to check if key exists already)
each days events should be sorted in ascnding order of starts at 






*/

describe('groupEventsByDay', () => {
  it('should return an object when passed an array ', () => {
    const actualOutput = groupEventsByDay([]);
    expect(typeof actualOutput).toBe('object');
  });
});

test('moveEvent', () => {});
