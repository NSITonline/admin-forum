
 function submitQues() {
	var node=document.createElement("LI");

	var ques = document.getElementById('quesinput').value;
	var textnode = document.createTextNode(ques);
	//var x=ques;
	//console.log(x);
	node.appendChild(textnode);
	document.getElementById("quesList").appendChild(node);
}

