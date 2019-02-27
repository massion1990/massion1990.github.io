var oH1 = document.querySelector('h1');
var oBtn = document.querySelector('button');

function color16(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
	return color;
}

var timer = setInterval(function(){
	oH1.style.color = color16();
}, 2000);