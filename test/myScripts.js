
function myLoop2(){
  var start2 = document.getElementById("start2").value;
  var end2 = document.getElementById("end2").value;
  var jump= document.getElementById("jump").value;

  console.log(typeof start2);
  console.log(typeof end2);
  console.log(typeof jump);
  
  start2 = Number(start2);
  end2 = Number(end2);
  jump = Number(jump);
  
    for(var i=start2; i<=end2; i+=jump){
    document.write('<p>'+ i);
    
  }
}
