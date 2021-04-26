import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numAbbr'
})
export class NumAbbrPipe implements PipeTransform {
  transform(value: number): string {
    // Adapted from https://stackoverflow.com/questions/10599933/
    let newValue: string = String(value);
    if (value >= 1000) {
      const suffixes = ["", "K", "M", "B", "T"] as const;
      const suffixNum = Math.floor(newValue.length / 3);
      let shortValue: string | number = 0;

      for (let precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision)
        );
        const dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
        if (dotLessShortValue.length <= 2) { break; }
      }

      if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
      }

      newValue = shortValue + suffixes[suffixNum];
    }

    return newValue;
  }
}

@NgModule({
  declarations: [NumAbbrPipe],
  exports: [NumAbbrPipe]
})
export class NumAbbrPipeModule {}
