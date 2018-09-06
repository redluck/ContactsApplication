/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyResolverService } from './my-resolver.service';

describe('Service: MyResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyResolverService]
    });
  });

  it('should ...', inject([MyResolverService], (service: MyResolverService) => {
    expect(service).toBeTruthy();
  }));
});
