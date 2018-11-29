import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/delay';

@Injectable()
export class MyResolverService implements Resolve<Observable<number>> {

    constructor() { }

    resolve() {
        //return of('Hello MyResolver!').delay(2000);
        return timer(2000);
      }
}
