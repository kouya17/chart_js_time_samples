var ctx = document.getElementById('bounds_ticks').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        datasets: [{
            label: 'bounds - ticks',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: [1, 10, 20, 30, 40]
        }],
        labels: ['1995-12-17T00:00:00', '1995-12-18T00:00:00',
            '1995-12-21T00:00:00', '1995-12-25T12:00:00',
            '1996-01-01T00:00:00', '1996-01-10T00:00:00',]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                //! bounds に ticks を指定
                bounds: 'ticks',
                time: {
                    unit: 'day'
                }
            }]
        }
    }
});