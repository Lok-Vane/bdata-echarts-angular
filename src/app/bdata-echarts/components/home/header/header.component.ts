import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @ViewChild('showTime', { static: true }) showTime: ElementRef;
  public timer: any;

  constructor() { }

  ngOnInit() {
    // console.log(this.showTime.nativeElement.innerHTML);
    // console.log(document.querySelector('.showTime').innerHTML);
    // console.log(this.showTime.nativeElement === document.querySelector('.showTime'));
    const showTimeElement = this.showTime.nativeElement;

    (() => {
      this.timer = null;
      this.timer = setTimeout(time, 1000);
      function time() {
        clearTimeout(this.timer);
        const date = new Date();
        const tips = `当前时间：`;
        const temp = `${date.getFullYear()}-
              ${(date.getMonth() + 1).toString().padStart(2, '0')}-
              ${(date.getDate()).toString().padStart(2, '0')}`;
        showTimeElement.innerHTML = `${tips}${temp}
              ${(date.getHours()).toString().padStart(2, '0')}:
              ${(date.getMinutes()).toString().padStart(2, '0')}:
              ${(date.getSeconds()).toString().padStart(2, '0')}`;
        this.timer = setTimeout(time, 1000);
      }
    })();

  }

}
