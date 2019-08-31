import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclamation'
})
export class ExclamationPipe implements PipeTransform {

  constructor(){

  }
  transform(value: string): string {

   return `${value}!`;
  }

}
