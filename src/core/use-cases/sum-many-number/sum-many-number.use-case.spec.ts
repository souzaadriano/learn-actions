import { SumManyNumbersUseCase } from './sum-many-number.use-case';

describe('sum-many-number.use-case', () => {
  it('should sum all number and return value is 8', async () => {
    const sut = new SumManyNumbersUseCase();
    const values = [1, 2, 1, 4];
    const { value } = await sut.execute({ values });

    expect(value).toBe(8);
  });
});
