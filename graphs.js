let url = "http://127.0.0.1:5000/api/ufo";
let ufo = ""
d3.json(url).then(function(data){ufo=data
    let lights = 0;
    let circles = 0;
    let triangles = 0;
    let fireballs = 0;
    let others = 0;
    
    let alien = ""
    
    for(let i = 0;i<ufo.length;i++){
        alien = ufo[i]
        if (alien.Shape == "Light") lights+=1;
        else if (alien.Shape == "Circle") circles+=1;
        else if (alien.Shape == "Triangle") triangles+=1;
        else if (alien.Shape == "Fireball") fireballs+=1;
        else others+=1;
    }
    
    let shapes = []
    shapes.push(lights);
    shapes.push(circles);
    shapes.push(triangles);
    shapes.push(fireballs);
    shapes.push(others);
    
    console.log(shapes)    
    new Chart(document.getElementById("graph"), {
        type: 'pie',
        data: {
          labels: ["Lights", "Circles", "Triangles", "Fireballs", "Others"],
          datasets: [{
            backgroundColor: ["Yellow", "Lime","RoyalBlue","Red","Orchid"],
            data:shapes,
            color: "#f1f1f1"
          }]
        },
        options: {
          plugins: {
            legend: {
                labels: {color:"#f1f1f1"}
            }
          },  
          title: {
            display: true,
            text: 'Most Popular UFO Shapes'
          }
        }
    });});
