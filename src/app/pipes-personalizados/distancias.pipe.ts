import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distancias'
})
export class DistanciasPipe implements PipeTransform {
  transform(metros: number, unidad: string = 'km'): number {
    switch (unidad) {
      case 'km':
        return metros / 1000;
      case 'hm':
        return metros / 100;
      case 'cm':
        return metros * 100;
      default:
        return 0;
    }
  }
}
