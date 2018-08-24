// // Nav Toggle

// var toggle = document.getElementById('toggle');
// toggle.addEventListener('click', nav_menu, false);

window.addEventListener('resize',resize,true);
window.addEventListener('load',resize,true);

// function nav_menu(){
// 	var menu = document.getElementById('nhav-menu');
// 	menu.style.display = 'none';
// 	alert('dsa');
// }

function resize(){
	var width  = window.innerWidth;
	var height = window.innerHeight;
	var menu = document.getElementById('nav-menu');

	if ( width < 770 ) {
		menu.classList.add('hidden');
	}else {
		menu.classList.remove('hidden');
	}
	
}

$(document).ready(function() {


	$('#toggle').click(function(){
		var menu = document.getElementById('nav-menu');
		menu.classList.toggle('hidden');

	});

})