var ctx = document.getElementById('distribution_linear').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'distribution - linear',
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
                x: '1996-01-01T00:00:00',
                y: 40
            }]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                //! distribution に linear を指定
                distribution: 'linear',
                time: {
                    unit: 'day'
                }
            }]
        }
    }
});