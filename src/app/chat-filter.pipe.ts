import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatFilter'
})
export class ChatFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
