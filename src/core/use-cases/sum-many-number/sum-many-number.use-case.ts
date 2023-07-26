import { AbstractUseCase } from '../use-case.abstract';

export class SumManyNumbersUseCase extends AbstractUseCase<Input, Output, void> {
  async execute(input: Input): Promise<Output> {
    const { values } = input;
    const value = values.reduce((total, element) => total + element, 0);

    return { value };
  }
}

type Input = {
  values: number[];
};

type Output = {
  value: number;
};
