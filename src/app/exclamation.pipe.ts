import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'exclamation'
})
export class ExclamationPipe implements PipeTransform {

  constructor(private uppercase: UpperCasePipe){

  }
  transform(value: string): string {
   return `${this.uppercase.transform(value)}!`;
  }

}
