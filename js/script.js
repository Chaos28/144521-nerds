var link = document.querySelector(".modal-open");

    	var popup = document.querySelector(".modal");
    	var close = popup.querySelector(".modal-close");

    	 var name = popup.querySelector("[name=name]");
  		var email = popup.querySelector("[name=email]");

    	var form = popup.querySelector("form");

    	link.addEventListener("click", function (evt) {
    	evt.preventDefault();
    	popup.classList.add("modal-show");


  	});

	    close.addEventListener("click", function (evt) {
	    evt.preventDefault();
	    popup.classList.remove("modal-show");
  	});