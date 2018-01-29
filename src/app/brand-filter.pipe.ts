import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(products: any[], field : string, value : string[]): any[] {     
    if (!products) return [];   
    if (!value || !value.length) return products;     
    return products.filter((pr: any) => {
        return value.indexOf(pr[field]) > -1
    });
  }

}
