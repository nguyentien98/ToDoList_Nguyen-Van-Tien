/*
* Author: Tiến Nguyễn 
*/
function getNumbers() {
	return byClass('item').length - byClass('done').length;
}

function update() {
	oneClass('count').innerHTML = getNumbers()+' item left';
}

window.onload = function(){
	update();
}

function byId(id){
	return document.getElementById(id);
}

function byClass(className){
	return document.getElementsByClassName(className);
}

function oneClass(className) {
	return document.getElementsByClassName(className)[0];
}

function activeControl(e) {
	for(let i = 0; i < oneClass('control').children.length; i++){
		if (oneClass('control').children[i].classList.contains('active')) {
			oneClass('control').children[i].classList.remove('active');
		}
	}
	e.classList.add('active');
}


function removeItem(e) {
	e.parentElement.remove();
	update();
}

function toggleCheck(e) {
	if (e.checked) {
		e.parentElement.classList.add('done');
	} else {
		e.parentElement.classList.remove('done');
	}
	update();
}
byId('form').addEventListener('submit', function(){
	if (byId('todo').value !='') {
		let html = '<div class="item"><input type="checkbox" onclick="toggleCheck(this)"><b>'+byId('todo').value+'</b><span class="remove" onclick="removeItem(this)">X</span></div>';
		oneClass('list-item').innerHTML += html;
	}
	byId('todo').value = '';
	update();
});

byId('active').addEventListener('click', function(){
	activeControl(this);
	for(let i = 0; i < oneClass('list-item').children.length; i++){
		if (oneClass('list-item').children[i].classList.contains('done')) {
			oneClass('list-item').children[i].style.display = 'none';
		} else {
			oneClass('list-item').children[i].style.display = 'block';
		}
	}
});
byId('all').addEventListener('click', function(){
	activeControl(this);
	for(let i = 0; i < oneClass('list-item').children.length; i++){
		oneClass('list-item').children[i].style.display = 'block';
	}
});
byId('completed').addEventListener('click', function(){
	activeControl(this);
	for(let i = 0; i < oneClass('list-item').children.length; i++){
		if (!oneClass('list-item').children[i].classList.contains('done')) {
			oneClass('list-item').children[i].style.display = 'none';
		} else {
			oneClass('list-item').children[i].style.display = 'block';
		}
	}
});