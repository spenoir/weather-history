/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TemperaturesService } from './temperatures.service';

describe('Service: Temperatures', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperaturesService]
    });
  });

  it('should ...', inject([TemperaturesService], (service: TemperaturesService) => {
    expect(service).toBeTruthy();
  }));
});
