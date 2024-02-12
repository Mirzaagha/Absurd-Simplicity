function Intersection(v,v2){
  var k1 = (v[3]-v[1])/(v[2]-v[0]);
  var b1 = v[1] - v[0]*k1;
  var k2 = (v2[3]-v2[1])/(v2[2]-v2[0]);
  var b2 = v2[1] - v2[0]*k2;
  var x,y;
  x = (b2-b1)/(k1-k2);
  y = k1 * x + b1;
  if(false){
        
  }
}
