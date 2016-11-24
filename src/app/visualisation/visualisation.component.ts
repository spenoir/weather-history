import { Component, OnInit } from '@angular/core';

import {TemperaturesService} from "../temperatures.service";

declare var d3 : any;
declare var nv : any;

@Component({
  selector: 'app-visualisation',
  providers: [TemperaturesService],
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.scss']
})
export class VisualisationComponent implements OnInit {
  options; minData; maxData;
  availableMonths; selectedMinMonths; selectedMaxMonths;

  constructor(private temperaturesService: TemperaturesService) {

  }

  getValues (response, month) {

    return response.map(obj => {
      return {year: parseFloat(obj['Year_' + month.toLowerCase()]), temp: parseFloat(obj[month])};
    }).sort(function (a, b) {

      if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      }
      return 0;
    });

  }

  ngOnInit() {

    let minTemps = this.temperaturesService.getTemps('UK-min-temps.json');
    let maxTemps = this.temperaturesService.getTemps('UK-max-temps.json');

    this.availableMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'SPR', 'SUM', 'AUT', 'WIN', 'ANN'];
    this.selectedMinMonths = ['AUT', 'WIN'];
    this.selectedMaxMonths = ['SPR', 'SUM'];

    this.options = {
      chart: {
        type: 'multiBarChart',
        height: 500,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.year;},
        y: function(d){return d.temp;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        duration: 100,
        xAxis: {
          axisLabel: 'Year'
        },
        yAxis: {
          axisLabel: 'Temperature',
          axisLabelDistance: -10
        }
      }
    };

    this.monthsChange(null, 'min');
    this.monthsChange(null, 'max');
  }

  public monthsChange (event, month: string) {

    this.temperaturesService.getTemps(`UK-${month}-temps.json`).toPromise().then(response => {

      let data = [];

      this[`selected${month.charAt(0).toUpperCase() + month.substr(1, month.length-1)}Months`].forEach(month => {
        data.push({key: month, values: this.getValues(response, month)});
      });

      this[`${month}Data`] = data;

    });

  }
}
