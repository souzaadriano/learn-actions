import { SumTwoNumbersUseCase } from '@/core/use-cases/sum-two-numbers/sum-two-numbers.use-case';

export abstract class SumTwoNumbersFactory {
  static get() {
    return new SumTwoNumbersUseCase();
  }
}
