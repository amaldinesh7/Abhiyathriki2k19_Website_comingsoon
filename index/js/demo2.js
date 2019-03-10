
(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	if (window.matchMedia("(max-width: 600px)").matches) {
		open = false;
		console.log("open")
		handler();
	}

	function handler(){
	  if(!open) {
	    this.innerHTML = "x";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else {
	    this.innerHTML = "+";
			classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
