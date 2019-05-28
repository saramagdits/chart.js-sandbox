const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
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
