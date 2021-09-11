function additems(){
    let data=document.getElementById('inp').value;
    document.getElementById('two').innerHTML+=`<h1 class='items'>${data}</h1>`;
	
	//document.getElementById('two').innerHTML = document.getElementById('two').innerHTML +`<h1 class='items'>${data}</h1>`;
    document.getElementById('inp').value="";
}

function changeColor(){

   document.getElementById('two').style.backgroundColor="#4a86e8";

}
document.getElementById('submit').value;