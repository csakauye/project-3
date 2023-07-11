let url = "http://127.0.0.1:5000/api/ufo";
function isLocalHost(url) {
    return url.indexOf('localhost') !== -1 || url.indexOf('127.0.0.1') !== -1;
  }
  
  // 👇️ true
console.log(isLocalHost(url));

let ufoData = 0;

// Printing data to console

function createMap(ufos, light, circle, triangle, fireball, other) {
  // Creating tile layer 
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

  // Creating base object to hold streetmap
  let baseMap = {
    "Street Map": streetmap
  };

  let ufoMaps = {
    "Ufos": ufos, 
    "Light": light, 
    "Circle": circle, 
    "Triangle": triangle,
    "Fireball": fireball, 
    "Other": other
  };

  // Creating map object
  let myMap = L.map("map", {
    center: [39.50, -98.35], 
    zoom: 5, 
    layers: [streetmap, ufos, light, circle, triangle, fireball, other]
  });

  // Creating layer control 
  L.control.layers(baseMap, ufoMaps, {
    collapsed: false
  }).addTo(myMap);
}

// Creating function to pick color based on ufo shape 
function colorPicker(shape) {
  if (shape == "Light") return "Yellow";
  else if (shape == "Circle") return "Lime"; 
  else if (shape == "Triangle") return "RoyalBlue";
  else if (shape == "Fireball") return "Red";
  else return "Orchid";
}

// Creating ufo markers 
function createUfos(data) {
  let sightings = [];
  let lights = [];
  let circles = [];
  let triangles = [];
  let fireballs = [];
  let others = [];

  for (let i = 0; i < data.length; i++) {
    let alien = data[i];

    let ufoMarker = L.circle([alien.lat, alien.lng],
      { 
        fillOpacity: 0.5,
        color: colorPicker(alien.Shape),
        radius: 40000
      }).bindPopup("<h3> Description of Encounter: " + alien.Summary + "</h3>");
    
    // Putting ufos into separate layers based on shape
    if (alien.Shape == "Light") lights.push(ufoMarker);
    else if (alien.Shape == "Circle") circles.push(ufoMarker);
    else if (alien.Shape == "Triangle") triangles.push(ufoMarker);
    else if (alien.Shape == "Fireball") fireballs.push(ufoMarker);
    else others.push(ufoMarker);

    // Putting all ufos into one layer 
    sightings.push(ufoMarker);
  }

  createMap(L.layerGroup(sightings), L.layerGroup(lights), L.layerGroup(circles), L.layerGroup(triangles), 
  L.layerGroup(fireballs), L.layerGroup(others));
}

d3.json(url).then(function(data) 
{createUfos(data)});


