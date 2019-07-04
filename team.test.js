const teamObj = require('./team.js');

test('test that new team objects is created', () => {
  const result = teamObj('Unicron', 'Master')
  expect(result).toEqual({'teamName': 'Unicron', 'level': 'Master', 'points': 0})
});
