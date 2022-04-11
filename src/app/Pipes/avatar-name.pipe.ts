import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarName',
})
export class AvatarNamePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    return value.substr(1, 1).trim();
  }
}
