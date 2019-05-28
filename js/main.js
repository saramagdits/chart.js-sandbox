// Select canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Fetch JSON data
// https://data.cdc.gov/api/views/bi63-dtpu/rows.json?accessType=DOWNLOAD
fetch('https://data.cdc.gov/api/views/bi63-dtpu/rows.json?accessType=DOWNLOAD')
  .then(res => res.json())
  .then(json => makeChart(json));
  // .then(json => JSON.stringify(json));


// Create chart using response data
const makeChart = (data) => {
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: data.meta.view.name,
        backgroundColor: 'rgb(255, 255, 255, 0)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
      },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgb(255, 255, 255, 0)',
          borderColor: 'rgb(0, 99, 255)',
          data: [10, 2, 4, 2, 23, 5, 18]
        }]
    },

    // Configuration options go here
    options: {}
  });
};

