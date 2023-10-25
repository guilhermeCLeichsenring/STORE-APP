import { Component } from '@angular/core';
import { ICalculatorComponent } from './Icalculator.componet';
import { Operation } from './calculator.component.operation';

interface OperationValue {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements ICalculatorComponent {
  ope: Operation = '+';
  first: number = 0;
  last: number = 0;
  _value: number = 0;

  value: string = '';

  operations: OperationValue[] = [
    { value: '+', viewValue: '+' },
    { value: '-', viewValue: '-' },
    { value: '*', viewValue: '*' },
    { value: '/', viewValue: '/' },
  ];

  _sum(x: number, y: number): number {
    return x + y;
  }
  _subtract(x: number, y: number) {
    return x - y;
  }
  _multiply(x: number, y: number) {
    return x * y;
  }
  _divide(x: number, y: number) {
    return x / y;
  }

  _OperationType(first: number, ope: Operation, last: number): number {
    var anwser = 0;

    switch (ope) {
      case '+':
        anwser = this._sum(first, last);

        break;
      case '-':
        anwser = this._subtract(first, last);
        break;
      case '*':
        anwser = this._multiply(first, last);
        break;
      case '/':
        anwser = this._divide(first, last);
        break;
      default:
        break;
    }

    return anwser;
  }

  calculator(): void {
    var anwser = this._OperationType(this.first, this.ope, this.last);

    this._value = anwser;
  }

  showValue(): void {
    console.log(this._value, this.first, this.last);
    this.value = this._value.toString();
  }
}
