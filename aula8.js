function changeText(id){
	id.innerHTML="Sextoooou!!!";
}

function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}

function mOver(obj){
	obj.innerHTML="Isso mesmo, fui eu!";
}

function mOut(obj){
	obj.innerHTML="Advinha quem comeu seu cu?";
}

function mDown(obj){
	obj.style.backgroundColor="#AABBCC";
	obj.innerHTML="Partiu ficar rico jogando na BET365!!!";
}

function mUp(obj){
	obj.style.backgroundColor="#DDA0DD"; //para alterar a cor de fundo
	obj.innerHTML="Pocotó voaaaaaaaaaaaa!!!1";
}

var nome;
var email;
var num=0;
function escrever(quadro){
	info="Usuario numero:"+(++num)+"\n";
	info+="Nome:"+nome+"\n";
	info+="Email:"+email+"\n";
	quadro.value+=info;
}

function mudaCor(cor){
	document.bgColor=cor;	
}

function mudaCor(cor){
	document.bgColor=cor;
}

