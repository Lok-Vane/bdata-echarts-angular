import { Component, OnInit, ViewChild } from '@angular/core';
import { EchartsOptions } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @ViewChild('A', { static: true }) A: any;
  @ViewChild('B', { static: true }) B: any;
  @ViewChild('C', { static: true }) C: any;
  @ViewChild('D', { static: true }) D: any;
  @ViewChild('E', { static: true }) E: any;
  @ViewChild('F', { static: true }) F: any;
  public yearData = [{
    year: '2019', // 年份
    data: [ // 两个数组是因为有两条线
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ]
  },
  {
    year: '2020', // 年份
    data: [ // 两个数组是因为有两条线
      [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
      [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
    ]
  }
  ];

  constructor(
    public EOptions: EchartsOptions
  ) { }

  ngOnInit() {
    // console.log(this.EOptions.optionMap);

    const AList = document.querySelectorAll('h3 a');
    AList[0].addEventListener('click', () => {
      AList[0].classList.remove('active');
      AList[0].classList.add('active');
      AList[1].classList.remove('active');
      this.EOptions.chartB.options.series[0].data = this.yearData[0].data[0];
      this.EOptions.chartB.options.series[1].data = this.yearData[0].data[1];
      const temp = this.EOptions.chartB.options;
      this.EOptions.chartB.options = JSON.parse(JSON.stringify(temp));
      // this.B.EChartsSetting();
    });
    AList[1].addEventListener('click', () => {
      AList[1].classList.remove('active');
      AList[1].classList.add('active');
      AList[0].classList.remove('active');
      this.EOptions.chartB.options.series[0].data = this.yearData[1].data[0];
      this.EOptions.chartB.options.series[1].data = this.yearData[1].data[1];
      const temp = this.EOptions.chartB.options;
      this.EOptions.chartB.options = JSON.parse(JSON.stringify(temp));
      // this.B.EChartsSetting();
    });
  }

}
