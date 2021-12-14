import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVehiculos'
})
export class FilterVehiculosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const item of value) {
      if (item.marca.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(item);
      };
    };
    return resultPosts;
  }
}
