
//Set url for API and initialize variable to hold data
let url = "http://127.0.0.1:5000/api/ufo";
let ufo = ""

//Make an API Call
d3.json(url).then(function(data){ufo=data
  //Initialize empty lists to count shapes 
    let lights = 0;
    let circles = 0;
    let triangles = 0;
    let fireballs = 0;
    let others = 0;
    
    let alien = ""
  //loop through data to count shapes 
    for(let i = 0;i<ufo.length;i++){
        alien = ufo[i]
        if (alien.Shape == "Light") lights+=1;
        else if (alien.Shape == "Circle") circles+=1;
        else if (alien.Shape == "Triangle") triangles+=1;
        else if (alien.Shape == "Fireball") fireballs+=1;
        else others+=1;
    }
  //add number of shapes to list 
    let shapes = []
    shapes.push(lights);
    shapes.push(circles);
    shapes.push(triangles);
    shapes.push(fireballs);
    shapes.push(others);

  //checking to see if it completed
    console.log(shapes)
  //Creating a pie chart of shapes   
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
  
  // Initializing empty lists to count states 
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

  //Looping through the data to count occurrences of states  
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
  };

  //Pushing those to a list 
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


// Make Bar chart of most common states 
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
  }});

  //Initialize empty list for months
months = [0,0,0,0,0,0,0,0,0,0,0,0]
  for(let i = 0;i < ufo.length;i++){
    sighting = ufo[i];
    date = new Date(Date.parse(sighting.Clean_Date));
    month = date.getMonth();
    months[month] +=1;
    console.log(typeof date)
   

  };
  console.log("These are the dates " + months);
  
  new Chart("line", {
    type: "line",
    data: {
      labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",'Sept',"Oct","Nov","Dec"],
      datasets: [{ 
          data: months,
          label: "Sightings",
          borderColor: "Orchid",
          fill: false
        }]},
    options:{
      legend: {
        labels: {color:"#f1f1f1"},
        display: false
    }
    }
  });

  
  
  
  });
