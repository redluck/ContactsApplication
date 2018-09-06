import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class MyResolverService implements Resolve<Observable<string>> {

    constructor() { }

    resolve() {
        return Observable.of('Hello MyResolver!').delay(2000);
      }
}
