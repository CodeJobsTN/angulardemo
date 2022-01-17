import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elementCount'
})
export class ElementCountPipe implements PipeTransform {

  transform(list: any[]): number {
    return list.length;
  }

}
