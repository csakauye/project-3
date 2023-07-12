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
    new Chart(document.getElementById("pie"), {
        type: 'pie',
        data: {
          labels: ["Lights", "Circles", "Triangles", "Fireballs", "Others"],
          datasets: [{
            backgroundColor: ["Yellow", "Lime","RoyalBlue","Red","Orchid"],
            data:shapes,
            color: "#0d0d0d"
          }]
        },
        options: {
          plugins: {
            legend: {
                labels: {color:"#0d0d0d"}
            }
          },  
          title: {
            display: true,
            text: 'Most Popular UFO Shapes'
          }
        }
    });
  let CA   = 0;	
  let FL	 = 0;
  let AZ	 = 0;
  let WA	 = 0;
  let NC	 = 0;
  let NY	 = 0;
  let CO	 = 0;
  let PA	 = 0;
  let OR	 = 0;
  let OH   = 0;

  for(let i = 0; i < ufo.length;i++){
    sighting = ufo[i];
    if(sighting.State == "CA") CA +=1;
    else if(sighting.State == "FL") FL += 1;
    else if(sighting.State =="AZ") AZ +=1;
    else if(sighting.State == "WA") WA +=1;
    else if(sighting.State == "NC") NC +=1;
    else if(sighting.State == "NY") NY +=1;
    else if(sighting.State == "CO") CO +=1;
    else if(sighting.State == "PA") PA +=1;
    else if(sighting.State == "OR") OR +=1;
    else if(sighting.State == "OH") OH +=1;
  }
  let states = []
  states.push(CA)
  states.push(FL)
  states.push(AZ)
  states.push(WA)
  states.push(NC)
  states.push(NY)
  states.push(CO)
  states.push(PA)
  states.push(OR)
  states.push(OH)
console.log(`State ` + states)
// Bar chart
new Chart(document.getElementById("bar"), {
  type: 'bar',
  data: {
    labels: ["CA", "FL", "AZ", "WA", "NC","NY",	"CO",	"PA",	"OR",	"OH"],
    datasets: [
      {
        backgroundColor: ["Orchid","Yellow","Lime","RoyalBlue","Red","MediumSeaGreen","DarkOrange","DarkTurquoise","MediumPurple","SlateGray"],
        data: states,
        color: "#f1f1f1"
      }
    ]
  },
  options: {
    plugins:{
      title: {
        display: false,
        text: 'Sightings by US State'
      },
      legend: {
        labels: {color:"#f1f1f1"},
        display: false
    }}
    
    
}})
  
  
  
  });
