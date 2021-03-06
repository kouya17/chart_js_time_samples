var ctx = document.getElementById('time_stepSize_1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'time.stepSize - 1',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: [{
                x: '1994-01-01T00:00:00',
                y: 1
            }, {
                x: '1994-02-01T00:00:00',
                y: 10
            }, {
                x: '1994-03-01T00:00:00',
                y: 20
            }]
        }],
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    //! 横軸の目盛り刻みを日刻みにする
                    unit: 'day',
                    //! 目盛り線の刻みを1にする
                    stepSize: 1
                }
            }]
        }
    }
});