/*eslint-disable*/
import React from 'react';
import renderer from 'react-test-renderer';
import Design from './Calculator';
import calculate from '../logic/calculate';
it('should render correctly', () => {
  const data = {
    total: '',
    operation: '',
    next: '0',
  };
  const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const tree = renderer
    .create(<Design obj={data} data={buttonNames} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
describe('number can be entered', () => {
  test('entered number from 0-9', () => {
    let buttonName = '4';
    let result = calculate({
      total: null, next: null, operation: null,
    }, buttonName);
    expect(result.next).toEqual('4');
    buttonName = '2';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('42');
  });
});
describe('get answer', () => {
  test('= pressed', () => {
    const result = calculate({
      total: '40', next: '10', operation: '-',
    }, '=');
    expect(result.total).toEqual('30');
  });
});
describe('Decimal number can be entered', () => {
  test('if (.) is pressed', () => {
    let buttonName = '5';
    let result = calculate({
      total: null, next: null, operation: null,
    }, buttonName);
    expect(result.next).toEqual('5');
    buttonName = '.';
    result = calculate(result, buttonName);
    buttonName = '3';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('5.3');
  });
});
describe('Negative number can be entered', () => {
  test('if (+/-) is pressed', () => {
    let btnName = '5';
    let result = calculate({
      total: null, next: null, operation: null,
    }, btnName);
    expect(result.next).toEqual('5');
    btnName = '+/-';
    result = calculate(result, btnName);
    expect(result.next).toEqual('-5');
  });
});
