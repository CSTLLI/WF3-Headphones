/* ************************************************************************************** */
/*                                                                                        */																					  
/* Project: Headphones                                  / $$      /$$ /$$$$$$$$ /$$$$$$   */
/*                  			                        | $$  /$ | $$| $$_____//$$__  $$  */
/* script.js                                     	    | $$ /$$$| $$| $$     |__/  \ $$  */
/*                                                  	| $$/$$ $$ $$| $$$$$     /$$$$$/  */
/* By: vcastell <valeriocastellipro@gmail.com>	        | $$$$_  $$$$| $$__/    |___  $$  */
/*                                              		| $$$/ \  $$$| $$      /$$  \ $$  */
/* Created: 2022/01/23 14:58:01 vcastell     	        | $$/   \  $$| $$     |  $$$$$$/  */
/* Updated: 2022/01/23 15:56:42 vcastell                |__/     \__/|__/      \______/   */
/*                                                                    				      */
/******************************************************************************************/

document.querySelectorAll('.option').forEach(option => {
	option.addEventListener('click', changeStyle);
})

function changeStyle() {
	document.querySelectorAll('.option').forEach(option => {
		option.classList.remove('active');
	})

	let num = this.dataset.option;

    document.querySelector('.color-option').src = `images/headphones/color-option0${num}.jpg`;
	document.querySelector('.color-option').alt = `Option0${num}`;

	if (num == 1){
		document.querySelector('.product-title').innerHTML = `Rose Gold`;
	}else if( num == 2){
		document.querySelector('.product-title').innerHTML = `Gray`;
	}else if( num == 3){
		document.querySelector('.product-title').innerHTML = `Gold`;
	}else if( num == 4){
		document.querySelector('.product-title').innerHTML = `Blue Gold Red`;
	}else if( num == 5){
		document.querySelector('.product-title').innerHTML = `Gray Red Blue`;
	}else if( num == 6){
		document.querySelector('.product-title').innerHTML = `Red Blue Gold`;
	}

	this.classList.add('active');	
}