/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisualisationComponent } from './visualisation.component';
import {TemperaturesService} from "../temperatures.service";
import {Observable} from "rxjs/Rx";


class MockTemperaturesService extends TemperaturesService {

  constructor() {
    super(null);
  }

  getTemps(fileName) {
    return Observable.of([
      {"JAN":"-4.1","Year_jan":"1940","FEB":"-4","Year_feb":"1963","MAR":"-1.1","Year_mar":"1955","APR":"0.4","Year_apr":"1922","MAY":"3.9","Year_may":"1941","JUN":"6.7","Year_jun":"1927","JUL":"8.6","Year_jul":"1919","AUG":"8.5","Year_aug":"1922","SEP":"6.2","Year_sep":"1952","OCT":"3.3","Year_oct":"1919","NOV":"-0.7","Year_nov":"1915","DEC":"-4.1","Year_dec":"2010","WIN":"-3.07","Year_win":"1963","SPR":"1.95","Year_spr":"1962","SUM":"8.66","Year_sum":"1972","AUT":"3.4","Year_aut":"1919","ANN":"3.76","Year_ann":"1919"}
    ]);
  }

}

describe('VisualisationComponent', () => {
  let component: VisualisationComponent;
  let fixture: ComponentFixture<VisualisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows list of blog items by default', () => {
    debugger;
    expect()
  });
});
