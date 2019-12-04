import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'authPipe'
})

export class AuthPipe implements PipeTransform {
    transform(value) {
        return value.toUpperCase();
    }
}