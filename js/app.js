
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-999px";
}


angular.module("nodal", ["ngRoute"])
.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "Contact/contactIndex.html"
	})
	.when("/form", {
	    templateUrl : "Contact/contactForm.html"	
	})
	.when("/thankU", {
	    templateUrl : "Contact/thankU.html"	
	})
	.when("/contact.html", {
		templateUrl : "Contact/contactIndex.html"
	});
});
