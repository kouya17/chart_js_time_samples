var ctx = document.getElementById('time_isoWeekday_false').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'time.isoWeekday - false',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: [{
                x: '2020-04-26T00:00:00',
                y: 1
            }, {
                x: '2020-04-27T00:00:00',
                y: 2
            }, {
                x: '2020-05-03T00:00:00',
                y: 3
            }, {
                x: '2020-05-04T00:00:00',
                y: 4
            }]
        }],
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    //! 横軸の目盛り刻みを週刻みにする
                    unit: 'week',
                    //! isoWeekday を false に設定する
                    isoWeekday: false,
                    displayFormats: {
                        week: 'YYYY/M/D ddd'
                    }
                }
            }]
        }
    }
});