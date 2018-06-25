import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'row'
})
export class RowPipe implements PipeTransform {

  transform(row: { [key: string]: string }, ks: { value: string, type: string }[]): any {
    // should think about this
    return ks
      .map((obj) => {
        return {...obj, value: row[obj.value]};
      });
  }
}
