import { hello } from './app';

describe('NodeAppTest', () => {
  it('should = hello', () => {
    expect(hello()).toEqual('hello');
  });
});
