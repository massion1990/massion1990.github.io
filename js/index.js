var oH1 = document.querySelector('h1');
var flag = true;
oH1.onclick = function(){
	if(flag){
		this.style.color = 'green';
	}else{
		this.style.color = 'red';
	}
	flag = !flag;
}