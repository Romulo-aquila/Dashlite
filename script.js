let menuItem = document.getElementById('menu-icon');
let txtMenu = document.querySelectorAll('.text-menu');
let AsideBar = document.querySelectorAll('.nav-bar');
let ItemsBar = document.querySelectorAll('.menu-bar-item');

function nonee(event) {
    let Perfil = document.querySelectorAll('.perfil-info');
    let Titlemenu01 = document.getElementById('menu-title01');
    let itemsNav = document.querySelectorAll('.items-nav')
    let logo = document.querySelectorAll('.logo-title')
    let Categoria = document.getElementById('Category');
    let HR001 = document.getElementById('division-hr');

    const container = document.getElementById('Container');


    if (Perfil[0].style.display == "flex") {
        Perfil[0].style.display = "none";
        


     txtMenu.forEach(txt => {
        txt.style.display = "none";
    })

        Titlemenu01.style.display = "none";
        AsideBar[0].style.width = "8.7%";
        AsideBar[0].style.right = "91.5%";
        AsideBar[0].style.padding = "0 0px";
        container.style.marginLeft = "16vh";

        itemsNav[0].style.justifyContent = "center";
        logo[0].style.display = "none";
        Categoria.style.display = "none";
        HR001.style.display = "none";
 } else {

    Perfil[0].style.display = "flex";
    txtMenu.forEach(txt => {
        txt.style.display = "block";
    })


        Titlemenu01.style.display = "block";
        AsideBar[0].style.width = "25%";
        AsideBar[0].style.right = "75.8%";
        AsideBar[0].style.padding = "0 16px";
        container.style.marginLeft = "50vh";
        
        itemsNav[0].style.justifyContent = "space-between";
        logo[0].style.display = "block";
        Categoria.style.display = "flex";
        HR001.style.display = "block";
    }
event.preventDefault();

}

menuItem.addEventListener("click", nonee);

var options = {
    chart: {
      width: 850,
      height: 420,
      type: 'bar',
    },
    series: [{
      name: 'Vendas',
        data: [{
          x: 'Jan',
          y: 12,
         }, 
        {
          x: 'Fev',
          y: 24,
          fillColor: '#2accff'
        }, {
          x: 'Mar',
          y: 34,
        },
        {
        x: 'Abr',
        y: 44,
        fillColor: '#2accff'
        },
        {
          x: 'Mai',
          y: 54,
        },
        {
           x: 'Jun',
           y: 64,
           fillColor: '#2accff'
        },
        {
           x: 'Jul',
           y: 74,
        },
          {
          x: 'Ago',
          y: 84,
          fillColor: '#2accff'
        },
          {
            x: 'Set',
            y: 74,
        },
        {
          x: 'Out',
          y: 54,
          fillColor: '#2accff'
          },
        {
            x: 'Nov',
            y: 64,
        },
        {
          x: 'Dec',
          y: 94,
          fillColor: '#2accff'
          },
        ],
      }],
      plotOptions: {
        bar: {
          columnWidth: '35%',
          borderRadius: 12,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
    }
    
  
  var chart = new ApexCharts(document.querySelector("#chart-container"), options);
  
  chart.render();



  var options01 = {
    chart: {
      height: 310,
      width: 310,
      type: "radialBar",
    },
    series: [74.2],
    colors: ["#148dea"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 16,
          size: "65%"
        },
        startAngle: -135,
        endAngle: 135,
        track: {
          background: '#333',
          startAngle: -135,
          endAngle: 135,
        },
        dataLabels: {
          name: {
            fontSize: "10.5px",
            color: "#888",
            show: true,
          },
          value: {
            fontSize: "30px",
            fontWeight: "bold",
            color: "#fff",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#2accff"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["TAXA DE REPETIÇÃO"],
  };
  
  new ApexCharts(document.querySelector("#circle_Chart"), options01).render();

const devices = document.getElementById('devices_Chart');

  new Chart(devices, {
    type: 'pie',
    data: { 
      labels: [
      'Desktop',
      'Mobile',
      'Tab'
    ],
    datasets: [{
      label: 'Acessos',
      data: [72, 44, 16],
      backgroundColor: [
        '#3434b5',
        '#26b1df',
        'rgb(159, 5, 159)'
      ],
      borderColor: "#141a29" ,
      hoverOffset: 4,
      }]
    }
  });