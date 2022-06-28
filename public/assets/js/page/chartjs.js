"use strict";

var dataset = [[10,24,30],[14,22,32],[31,62,42],[100,20,40]]
var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['MKP Pak Tani', "Panen Raya", "Boron Plus"],
    datasets: [
      {
        label: 'Stok Awal',
        data: dataset[0],
        backgroundColor: '#296dc0',
      },
      {
        label: 'Kuantitas Keluar',
        data: dataset[1],
        backgroundColor: '#ff0173',
      },
      {
        label: 'Kuantitas Masuk',
        data: dataset[2],
        backgroundColor: '#87212a',
      },
      {
        label: 'Stok Akhir',
        data: dataset[3],
        backgroundColor: '#9b157d',
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      position: "bottom"
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
  }
});