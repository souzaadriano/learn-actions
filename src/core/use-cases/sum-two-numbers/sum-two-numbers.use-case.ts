import { AbstractUseCase } from '../use-case.abstract';

export class SumTwoNumbersUseCase extends AbstractUseCase<Input, Output, void> {
  async execute(input: Input): Promise<Output> {
    const { numberOne, numberTwo } = input;
    const value = numberOne + numberTwo;
    return { value };
  }
}

type Input = {
  numberOne: number;
  numberTwo: number;
};

type Output = {
  value: number;
};
