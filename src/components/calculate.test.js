/*eslint-disable*/
import calculate from '../logic/calculate';

describe('Test for the button AC', () => {
  test('it should return Obj with null values', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '+',
    };
    const btnValue = 'AC';

    const response = calculate(obj, btnValue);

    expect(response.total).toBe(null);
    expect(response.next).toBe('0');
    expect(response.operation).toBe(null);
  });
});

describe('Test for button with type of number ', () => {
  test('case 1: total and operation are null', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const btnValue = '0';
    const response = calculate(obj, btnValue);
    expect(response).toEqual({});
  });
});
