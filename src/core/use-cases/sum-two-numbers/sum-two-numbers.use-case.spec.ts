import { SumTwoNumbersUseCase } from './sum-two-numbers.use-case';

describe('sum-two-numbers.use-case', () => {
  it('should be 3', async () => {
    const sut = new SumTwoNumbersUseCase();

    const { value } = await sut.execute({ numberOne: 1, numberTwo: 2 });

    expect(value).toBe(3);
  });
});
