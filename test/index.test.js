/* eslint-env jest */
const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords(input)', () => {
  test('capitalizes the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('javaScript jest eslint')).toBe('JavaScript Jest Eslint');
  });

  test('handles single word input', () => {
    expect(capitalizeWords('gabriella')).toBe('Gabriella');
  });

  test('returns empty string when given empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });
});

describe('filterActiveUsers(users)', () => {
  test('returns only users with isActive === true', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Carol', isActive: true },
    ];
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true },
      { name: 'Carol', isActive: true },
    ]);
  });

  test('does not mutate the original array', () => {
    const users = [
      { name: 'A', isActive: true },
      { name: 'B', isActive: false },
    ];
    const copy = users.map(u => ({ ...u }));
    filterActiveUsers(users);
    expect(users).toEqual(copy);
  });

  test('handles empty array', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

describe('logAction(action, username)', () => {
  const fixed = new Date('2024-11-27T12:00:00Z');

  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(fixed);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('returns the exact format with ISO timestamp', () => {
    const out = logAction('login', 'Alice');
    expect(out).toBe(`User Alice performed login at ${fixed.toISOString()}`);
  });

  test('works with other actions/users', () => {
    const out = logAction('delete-post', 'Bob');
    expect(out).toBe(`User Bob performed delete-post at ${fixed.toISOString()}`);
  });
});
