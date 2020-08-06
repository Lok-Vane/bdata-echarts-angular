import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'src/assets/lib/china.js';
import { EchartsOptions } from 'src/app/core';
import { EchartsService } from 'src/app/core';

@Component({
  selector: 'app-ec-map',
  templateUrl: './ec-map.component.html',
  styleUrls: ['./ec-map.component.less']
})
export class EcMapComponent implements OnInit {

  @ViewChild('chart', { static: true }) chart: ElementRef;

  constructor(
    public EOptions: EchartsOptions,
    private Echarts: EchartsService
  ) { }

  ngOnInit() {
    this.Echarts.setting(this.chart.nativeElement, this.EOptions.optionMap);
  }

}
