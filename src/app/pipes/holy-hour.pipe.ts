import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'holyHour',
})
export class HolyHourPipe implements PipeTransform {
  transform(time: string): string {
    const date = new Date(time);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;

    // Convert to 12-hour format
    hours = hours % 12 || 12;
    const suffix = isPM ? 'PM' : 'AM';

    return `${hours}${
      minutes > 0 ? ':' + minutes.toString().padStart(2, '0') : ''
    } ${suffix}`;
  }
}
