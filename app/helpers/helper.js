'use strict';
const moment = require('moment');
const fs = require('fs');
const Helper = {
    async process(file) {
        let rawData = fs.readFileSync(file);
        let data = JSON.parse(rawData);
        let lastDate = moment(data[data.length - 1].ts).endOf('month');
        let start = lastDate.subtract(1, 'years').valueOf();
        let metrics = [];
        let mth = 0;
        let mt = 0;
        let sum = 0;
        let count = 0;
        data.forEach((d) => {
            if (d.ts > start) {
                mt = moment(d.ts).month() + 1;
                if(mth !== mt) {
                    // if (metrics.length > 0) {
                    //     metrics.map((m) => {
                    //         if(m.month === mt-1){
                    //             console.log('MMMMMMMM ', m.month, mt)
                    //             m.value = sum/count;
                    //         }
                    //     });
                    // }
                    // console.log(mt, ' sum: ', sum, ' count: ', count);
                    sum = 0;
                    count = 0;
                    let obj = {
                        month: mt,
                        value: 0
                    };
                    mth = mt;
                    metrics.push(obj);
                    sum += d.val;
                    count++;
                } else {
                    sum += d.val;
                    count++;
                }
            }
        });
        // if (metrics.length > 0) {
        //     metrics.map((m) => {
        //         if (m.month === mt - 1)
        //             m.value = sum / count;
        //     });
        // }
        // console.log(mt, ' sum: ', sum, ' count: ', count);
        console.log('metricsmetrics: ', metrics);
        return 'dddd';
    }
};
module.exports = Helper;