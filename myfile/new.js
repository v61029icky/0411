window.onload = function ()
{
   var str = "";

   for(var i = 0; i<3; i +=1)
   {
   	str +=
   	  '<div class="col-4">'+
        '<div class="card">'+
          '<div id="sketch'+i+'"></div>'+
          '<div class="card-body">'+
            '<p>'+i+'</p>'+
          '</div>'+
        '</div>'+
      '</div>';
   }
   document.getElementById("cards").innerHTML = str;

   var brushSketch = function (p5j)
{
  p5j.setup = function()
  {
    p5j.createCanvas(250, 250);
    p5j.background(168, 216, 185);
  }
  p5j.draw = function ()
  {
    var cx = p5j.map(p5j.mouseX, 0, p5j.width, 0, 255);
    var cy = p5j.map(p5j.mouseY, 0, p5j.height, 0, 255);
    var nsize = p5j.width/8+p5j.cos(p5j.mouseY*p5j.PI/180)*p5j.width/16;
    

    p5j.circle (p5j.width/2, p5j.height/2, p5j.mouseX ,p5j.mouseY );
    p5j.fill ( cx, cy,150, 50);


    p5j.fill(cx, cy, 150, 50);
    p5j.rect(p5j.mouseX, p5j.mouseY, nsize);
    p5j.noStroke();
  }
  /*p5j.draw = function ()
  {
    var msize = p5j.map(p5j.mouseX, 0, p5j.width, 0, p5j.height);
    p5j.ellipse (width/2, height/2, msize/2,msize/2 );
    p5j.fill ( p5j.mouseX, p5j.mouseY, 0);
  }*/
}
new p5(brushSketch, 'sketch0');
new p5(brushSketch, 'sketch1');
new p5(brushSketch, 'sketch2');

}
