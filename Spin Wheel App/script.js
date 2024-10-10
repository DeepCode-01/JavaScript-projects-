const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

const rotationValue = [
  {
    minDegree: 0,
    maxDegree: 30,
    value: 2,
  },
  {
    minDegree: 31,
    maxDegree: 90,
    value: 1,
  },
  {
    minDegree: 91,
    maxDegree: 150,
    value: 6,
  },
  {
    minDegree: 151,
    maxDegree: 210,
    value: 5,
  },
  {
    minDegree: 211,
    maxDegree: 270,
    value: 4,
  },
  {
    minDegree: 271,
    maxDegree: 330,
    value: 3,
  },
  {
    minDegree: 331,
    maxDegree: 360,
    value: 2,
  },
];

// size of each piece of wheel
const data = [16, 16, 16, 16, 16, 16];

// colors for wheel
let peiColor = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];

var myChart = new Chart(wheel, {
  // plugin for text

  Plugin: [ChartDataLabels],
  type: "pie",
  data: {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        backgroundColor: peiColor,
        data: data,
      },
    ],
  },

  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend:{
        display:false
      },
      datalabels:{
        color:"#ffffff",
        formatter: (_,context)=> context.chart.data.labels[context.data]
      }
    },
  },
});
