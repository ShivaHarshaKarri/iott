import { Component, OnInit, Output, EventEmitter, Input,OnDestroy } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { Observable, Subscription } from 'rxjs/Rx';
import { ChartDataService } from '../chart-data.service';
@Component({
  selector: 'app-chart23',
  templateUrl: './totalfields.component.html',
  styleUrls: ['./totalfields.component.css']
})
export class totalfieldsComponent implements OnInit {
  @Input() value:string;
  public chartInst: any;
  public chartInst1: any;
  private timer;
  public a=[]
  public b=[]
  public results=[]
    // Subscription object
  private sub: Subscription;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};

  line = {
    chart: {
        type: 'spline',
        animation: true, // don't animate in old IE
        marginRight: 10
        // events: {
        //     load: function () {
        //
        //         // set up the updating of the chart each second
        //         console.log("time functioin");
        //         var series = this.series[0];
        //         setInterval(function () {
        //             var x = (new Date()).getTime(), // current time
        //                 y = Math.random();
        //             series.addPoint([x, y], true, true);
        //         }, 1000);
        //     }
        // }
    },
    title: {
        text: 'Field 1'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                window['highCharts'].dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                window['highCharts'].numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Soil Moisture data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 2
                });
            }
            return data;
        }())
    }]
  };
  line1 = {
    chart: {
        type: 'spline',
        animation: true, // don't animate in old IE
        marginRight: 10
        // events: {
        //     load: function () {
        //
        //         // set up the updating of the chart each second
        //         console.log("time functioin");
        //         var series = this.series[0];
        //         setInterval(function () {
        //             var x = (new Date()).getTime(), // current time
        //                 y = Math.random();
        //             series.addPoint([x, y], true, true);
        //         }, 1000);
        //     }
        // }
    },
    title: {
        text: 'Field 2'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                window['highCharts'].dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                window['highCharts'].numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Soil Moisture data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 2
                });
            }
            return data;
        }())
    }]
  };
  constructor(iconRegistry: MatIconRegistry, private chartDataService: ChartDataService, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    changeValue(){
      //this.gauge.series[0].data = [parseInt(this.value)];
      //this.gauge.series[0].tooltip.valueSuffix = this.valueSuffix;
      //this.updateSeriesData(this.gauge.series[0].data);

    }
    saveInstance(chartInstance): void {
      this.chartInst = chartInstance;
      console.log(this.chartInst);
      this.timer = Observable.timer(2000,1000);
        // subscribing to a observable returns a subscription object
        this.sub = this.timer.subscribe(t => this.addPoint());
    }
    saveInstance1(chartInstance1): void {
        this.chartInst1 = chartInstance1;
        console.log(this.chartInst1);
        this.timer = Observable.timer(2000,1000);
          // subscribing to a observable returns a subscription object
          this.sub = this.timer.subscribe(t => this.addPoint());
      }
    updateSeriesData(data:any): void {
      //console.log(this.chart);
      //this.chartInst.series[0].setData(data);
    }

    ngOnInit() {
      this.line = this.line;
      this.line1=this.line1;
    }
    getddata(){
        this.chartDataService.geturl().subscribe(response => {
            let xx=JSON.parse(JSON.stringify(response));
            let yy=parseInt(xx)
            this.a.push(yy)
            console.log(this.a[(this.a.length)-1])
        });
        // this.apiservice.geturl().subscribe(response => {
        //     let x=JSON.parse(JSON.stringify(response));
        //     // console.log(parseFloat(x));
        //     const y=parseInt(this.x);
        //     this.results.push(y);
        //     console.log(this.results[(this.results.length)-1])
    }
    gethumid(){
        this.chartDataService.geturl1().subscribe(response => {
            let xxx=JSON.parse(JSON.stringify(response));
            let yyy=parseInt(xxx)
            this.b.push(yyy)
            console.log(this.b[(this.b.length)-1])
        });
    }
    addPoint():void{
      if(this.chartInst){
          this.getddata();
        var x = (new Date()).getTime(), // current time
            y = this.a[(this.a.length)-1]
        this.chartInst.series[0].addPoint([x, y], true, true);
      }
      if(this.chartInst1){
        this.gethumid();
        var x = (new Date()).getTime(), // current time
            y = this.b[(this.b.length)-1]
        this.chartInst1.series[0].addPoint([x, y], true, true);
      }
    }

    ngOnDestroy(){
        console.log("Destroy timer");
        // unsubscribe here
        this.sub.unsubscribe();

    }

}
