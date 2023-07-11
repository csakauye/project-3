let url = "http://127.0.0.1:5000/api/ufo";
function isLocalHost(url) {
    return url.indexOf('localhost') !== -1 || url.indexOf('127.0.0.1') !== -1;
  }
  
  // 👇️ true
console.log(isLocalHost(url));
  
d3.json(url).then(data => console.log(data));