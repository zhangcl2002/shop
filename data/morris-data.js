$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015 Q1',
            分红: 2666,
            投连: null,
            万能: 2647
        }, {
            period: '2015 Q2',
            分红: 2778,
            投连: 2294,
            万能: 2441
        }, {
            period: '2015 Q3',
            分红: 4912,
            投连: 1969,
            万能: 2501
        }, {
            period: '2015 Q4',
            分红: 3767,
            投连: 3597,
            万能: 5689
        }, {
            period: '2016 Q1',
            分红: 6810,
            投连: 1914,
            万能: 2293
        }, {
            period: '2016 Q2',
            分红: 5670,
            投连: 4293,
            万能: 1881
        }, {
            period: '2016 Q3',
            分红: 4820,
            投连: 3795,
            万能: 1588
        }, {
            period: '2016 Q4',
            分红: 15073,
            投连: 5967,
            万能: 5175
        }, {
            period: '2017 Q1',
            分红: 10687,
            投连: 4460,
            万能: 2028
        }, {
            period: '2017 Q2',
            分红: 8432,
            投连: 5713,
            万能: 1791
        }],
        xkey: 'period',
        ykeys: ['分红', '投连', '万能'],
        labels: ['分红', '投连', '万能'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "分享销售",
            value: 12
        }, {
            label: "到店销售",
            value: 30
        }, {
            label: "约谈销售",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2011',
            a: 100,
            b: 90
        }, {
            y: '2012',
            a: 75,
            b: 65
        }, {
            y: '2013',
            a: 50,
            b: 40
        }, {
            y: '2014',
            a: 75,
            b: 65
        }, {
            y: '2015',
            a: 50,
            b: 40
        }, {
            y: '2016',
            a: 75,
            b: 65
        }, {
            y: '2017',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['南方', '北方'],
        hideHover: 'auto',
        resize: true
    });

});
