export interface ICalculatorComponent {
  _value: number;

  _sum(x: number, y: number): number;
  _subtract(x: number, y: number): number;
  _multiply(x: number, y: number): number;
  _divide(x: number, y: number): number;
}
