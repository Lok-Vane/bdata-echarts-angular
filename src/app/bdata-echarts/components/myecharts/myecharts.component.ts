import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { EchartsService } from 'src/app/core';

@Component({
  selector: 'app-myecharts',
  templateUrl: './myecharts.component.html',
  styleUrls: ['./myecharts.component.less']
})
export class MyechartsComponent implements OnInit, OnChanges {

  constructor(
    private Echarts: EchartsService
  ) { }
  @ViewChild('chart', { static: true }) chart: ElementRef;
  @Input() options: any = {};     // ECharts setting options

  ngOnInit() {
    // this.EChartsSetting();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes.options.currentValue);
    this.EChartsSetting();
  }

  EChartsSetting() {
    this.Echarts.showLoading(this.chart.nativeElement);
    this.Echarts.setting(this.chart.nativeElement, this.options);
    setTimeout(() => {
      this.Echarts.hideLoading(this.chart.nativeElement);
    }, 5000);
  }

}
