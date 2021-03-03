// mobile-nav


// Er word een functie aangemaakt waarbij er een variable X word gedeclareerd. Hierbij word er verwezen naar het ID in de HTML my top nav en word een een if statement aangemaakt die aangeeft met verschillende operators: "Als x gelijk aan is topnav dan is X resonsive. Anders wordt X topnav."

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
// Charts

Chart.defaults.global.defaultFontFamily = 'Space Mono';

var ctx = document.getElementById('chart1').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      datasets: [{
        label: 'Distance traveled in million kilometers',
        labels: [10,20,30,40,50,60],
        data: [50],
        backgroundColor: ['#3555FF'],
        defaultFontFamily: ['Space Mono'],
        barPercentage: ['0.2'],
        borderColor: ['#438EFF'],
        borderWidth: 1
      }]
    }
});


var ctx = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'monthly average temparatures',
            backgroundColor: '#FFD260',
            borderColor: '#FF9D43',
            data: [-180, -220, -110, -57, 12, 27, 50, 85]
        }]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('chart3').getContext('2d');
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        data: [700, 560, 610, 430, 710, 750, 490],
        backgroundColor: '#E7C4A6',
        borderColor: '#B88B61',
        label: 'monthly storm activity'
    }]
  },

  options: {}
});