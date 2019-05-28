// Select canvas
const ctx = document.getElementById('myChart').getContext('2d');
const select = document.getElementById('cause');


// Fetches JSON data and redraws the chart
// https://data.cdc.gov/api/views/bi63-dtpu/rows.json?accessType=DOWNLOAD
// https://data.cdc.gov/api/views/6rkc-nb2q/rows.json?accessType=DOWNLOAD

const updateChart = (cause) => {
fetch('https://data.cdc.gov/api/views/6rkc-nb2q/rows.json?accessType=DOWNLOAD')
  .then(res => res.json())
  .then(json => json.data.filter(i => i[9] === cause).sort((a,b) => a[8]-b[8]))
  .then(data => makeChart(data));
};


// Create chart using response data
const makeChart = (data) => {
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: data.map(i => i[8]),
      datasets: [{
        label: data[0][9],
        backgroundColor: 'rgb(255, 255, 255, 0)',
        borderColor: 'rgb(255, 99, 132)',
        data: data.map(i => i[10])
      }]
    },

    // Configuration options go here
    options: {}
  });
};

// Updates the chart whenever a cause is selected from the dropdown.
select.onchange = (e) => updateChart(e.target.value);
