import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZeroFormat'
})
export class LeadingZeroFormatPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    value = parseInt(value, 10);
    
    return value < 10 ? `0${value}` : value;
  }
}
