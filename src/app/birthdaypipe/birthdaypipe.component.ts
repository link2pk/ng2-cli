

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bDate' })
export class BirthdaypipeComponent implements PipeTransform {
  transform(value: number): number {


    var num = parseInt(String(value).substr(-1));
    var returnValue;

    if (value == 11 || value == 12 || value == 13) {
     
      returnValue = `th`;
    } else {
      switch (num) {

        case 1:
          returnValue = 'st'
          break;
        case 2:
          returnValue = 'nd'
          break;
        case 3:
          returnValue = 'rd'
          break;
        default:
          returnValue = 'th'
          break;
      }
    }
    return returnValue;

  }
}

