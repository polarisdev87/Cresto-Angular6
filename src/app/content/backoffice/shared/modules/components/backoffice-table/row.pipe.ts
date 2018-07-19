import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'row'
})
export class RowPipe implements PipeTransform {

  public transform(row: { [key: string]: string }, ks: { value: string, type: any }[]): any {
    // should think about this
    return ks
      .map((obj) => {
        return {...obj, value: row[obj.value]};
      });
  }
}
