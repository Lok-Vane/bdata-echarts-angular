import { Injectable } from '@angular/core';
import * as echarts from 'echarts';

@Injectable({
    providedIn: 'root'
})

export class EchartsService {
    /** 初始化 ECharts 图表 */
    setting(DOM, options) {
        const echart = echarts.init(DOM);
        echart.setOption(options);
        // echart.on('click', (params) => {
        //     console.log(params);
        // });
        window.addEventListener('resize', () => {
            echart.resize();
        });
    }
    /** ECharts 加载中蒙层 */
    showLoading(DOM) {
        const echart = echarts.init(DOM);
        echart.showLoading({
            text: 'loading...',
            color: 'rgba(0, 0, 0, 0.8)',
            maskColor: 'rgba(255, 255, 255, 0.2)',
        });
    }
    /** ECharts 移除蒙层 */
    hideLoading(DOM) {
        const echart = echarts.init(DOM);
        echart.hideLoading();
    }
}
