function divide(){
  var g1=document.getElementById("g1").value;
  var g2=document.getElementById("g2").value;
  var g3=document.getElementById("g3").value;
  var g4=document.getElementById("g4").value;
  
  g1=Number(g1);
  g2=Number(g2);
  g3=Number(g3);
  g4=Number(g4);
  
  console.log(g1);
  console.log(g2);
  console.log(g3);
  console.log(g4);
  
  var min = Math.min(g1,g2,g3,g4);
  var ans =(g1+g2+g3+g4-min)/3;
  var ansceil = Math.ceil(ans);
  var ansfloor = Math.floor(ans);
  document.getElementById("ans").innerHTML="Your average grade is " + ansfloor +".You are close to" + ansceil + ".";
}
