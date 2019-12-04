import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availablePipe'
})
export class AvailablePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value === true){
      return 'YES';
    }else if(value === false){
      return 'NO';
    }
  }

}
