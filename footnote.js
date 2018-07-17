var footnoting = 0;

function footnote(element, num){
	num++;
	element.innerText = `[${num}]`;
	element.href=`#ref${num}`;
	element.id=`ft${num}`;
	element.addEventListener("click", function(e){
		var element = document.getElementById(`bold${footnoting}`);
		if(element)element.className = "normal";
		footnoting = num;
		element = document.getElementById(`bold${footnoting}`);
		if(element)element.className = "bold";
	});
	document.getElementById("footer").innerHTML += `<br><a id="ref${num}"><a href="#ft${num}"><b id="bold${num}" class="normal">[${num}]</b></a> ${element.title}</a>`;
}

addEventListener("load", function(){
	var elements = document.querySelectorAll("a.ref[title]");
	console.log(1);
	[].slice.call(elements).map(footnote);
});