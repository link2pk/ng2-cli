

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bDate' })
export class BirthdaypipeComponent implements PipeTransform {
  transform(value: number): number {


    var num = parseInt(String(value).substr(-1));
    var returnValue;

    if (value == 11 || value == 12 || value == 13) {
     
      returnValue = value + 'th';
    } else {
      switch (num) {

        case 1:
          returnValue = value + 'st'
          break;
        case 2:
          returnValue = value + 'nd'
          break;
        case 3:
          returnValue = value + 'rd'
          break;
        default:
          returnValue = value + 'th'
          break;
      }
    }
    return returnValue;

  }
}

