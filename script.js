const radius = 40;
const nodes = [];
var entity = "weight";//take off if need be
const linePoints = [];


setup();
function setup(){
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  canvas.style = "";
  
  button = document.getElementById("entity-switch");
  button.innerHTML = entity;
  
}

function draw(event){


  if (entity == "node"){
    if(nodes.every(isTouching) )
      ctx.beginPath();
      ctx.arc(event.clientX, event.clientY, radius, 0, 2 * Math.PI);
      ctx.stroke();
      nodes.push({x: event.clientX, y:  event.clientY, val: promptForVal()});
  }

  else if(entity == "weight"){
    if(linePoints.length == 0)
    {
      linePoints.push(event.clientX, event.clientY);
    }
    else if(linePoints.length == 2){
      ctx.moveTo(linePoints[0], linePoints[1]);
      ctx.lineTo(event.clientX, event.clientY);
      ctx.stroke();
      linePoints.pop();
      linePoints.pop();
    }
  }
}

function promptForVal(){
  return 5;
}

function onCircle(el){
  return Math.sqrt(Math.pow(el.x - event.clientX, 2) + Math.pow(el.y - event.clientY, 2)) <= radius;
}
  
function isTouching(el){
  return Math.sqrt(Math.pow(el.x - event.clientX, 2) + Math.pow(el.y - event.clientY, 2)) > 2*radius;
}

function updateEntity(){
  if(entity == "node"){
    entity = "weight";
  }
    
  else {
    entity = "node";
  }
  
  document.getElementById("entity-switch").innerHTML = entity;
}