var button = document.getElementById("enter");
var input = document.getElementById("userip");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
const delbut = document.getElementsByTagName("li");
var li = document.querySelectorAll("li");

for(var i = 0 ; i<list.length ;i++)
{
	list[i].addEventListener("click" , liclick);
}

function liclick() {
	this.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		li.addEventListener("click" , liclick);

		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete Item"));
		li.appendChild(deleteButton);
		deleteButton.onclick = deleteItem;
}

function addListAfterClick(){
	if(inputLength() > 0) 
	{
		createListElement();
	}
}

function addListAfterKeyPress(event){

	if(inputLength() > 0 && event.keyCode == 13) 
	{
		createListElement();
	}
}

button.addEventListener("click",addListAfterClick);


input.addEventListener("keypress",addListAfterKeyPress);


function addDeleteButton(){
	var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete Item"));
		list[i].appendChild(deleteButton);
		deleteButton.onclick = deleteItem;
}

for(var  i = 0 ; i < list.length ; i++)
{
	addDeleteButton();
}

function deleteItem()
{
	this.parentNode.remove();
}