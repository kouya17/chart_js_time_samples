var ctx = document.getElementById('ticks_source_data').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'ticks.source - data',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: [{
                x: '1995-12-17T00:00:00',
                y: 1
            }, {
                x: '1995-12-18T00:00:00',
                y: 10
            }, {
                x: '1995-12-21T00:00:00',
                y: 20
            }, {
                x: '1995-12-25T12:00:00',
                y: 30
            }, {
                x: '1996-01-10T00:00:00',
                y: 40
            }]
        }],
        labels: ['1996-01-01T00:00:00']
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                ticks: {
                    //! ticks.source に data を指定
                    source: 'data'
                }
            }]
        }
    }
});