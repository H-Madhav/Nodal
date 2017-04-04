
angular.module('nodal', ["ngRoute"])
.config(function($routeProvider) {
    
    $routeProvider
    .when("/", {
    	templateUrl : "templates/index.html"
    })
    .when("/features", {
    	templateUrl : "templates/features.html"
    })
    .when("/contactUs", {
    	templateUrl : "templates/contact.html"
    });
});


function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-999px";
}

