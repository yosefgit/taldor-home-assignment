import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<any>, key: string, filter: string): Array<any> {
    if(!array || !key || !filter){
        return array;
    }

    return array.filter(item => item[key] === filter);
  }

}
