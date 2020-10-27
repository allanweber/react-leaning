import { describe, test } from '@jest/globals';
import expect from 'expect';
import counter from '../counter';

describe('Should test counter', () => {
  test('should INCREMENT and DECREMENT', () => {
    expect(counter(0, { type: 'INCREMENT' })).toEqual(1);

    expect(counter(1, { type: 'INCREMENT' })).toEqual(2);

    expect(counter(2, { type: 'DECREMENT' })).toEqual(1);

    expect(counter(1, { type: 'DECREMENT' })).toEqual(0);
  });

  test('test other states', () => {
    expect(counter(1, { type: 'SOMETHING ELSE' })).toEqual(1);
    expect(counter(undefined, {})).toEqual(0);
  });
});
