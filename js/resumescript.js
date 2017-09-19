function showCurrentTab(evt, sectionId, contentSection, links)
{
  var i = 0;
  var sections = document.getElementsByClassName(contentSection);
  var linksList = document.getElementsByClassName(links);
  
  for (i = 0; i < sections.length; i++)
  {
     sections[i].style.display = "none";
     linksList[i].className = linksList[i].className.replace("w3-black", "");
  }
  
  document.getElementById(sectionId).style.display = "block";
  evt.currentTarget.className += " w3-black";
}

//AngularJS functionality 
var resumeApp = angular.module("resumeApp", []);

//Controller for handling all unit conversions
resumeApp.controller("convertCtrl", function($scope){
    //Initialized variables that bind model data 
    $scope.inches = 0;
    $scope.feet = 0;
    $scope.fHeit = 0;
    $scope.celsius = 0;
    $scope.miles = 0;
    $scope.kilometers = 0;
    $scope.meters = 0;
    $scope.yards = 0;
    $scope.grams = 0;
    $scope.pounds = 0;
    
    //Below are functions that handle the conversion to their respective units
    $scope.feet = function(){
        var ft = $scope.inches / 12;
        return ft.toFixed(2);
    };
    
    $scope.celsius = function(){
        var c = ($scope.fHeit - 32) * 5 / 9;
        return c.toFixed(2);
    };
    
    $scope.kilometers = function(){
        var km = $scope.miles * 1.60934;
        return km.toFixed(2);
    };
    
    $scope.yards = function(){
        var yd = $scope.meters / 0.9144;
        return yd.toFixed(2);
    };
    
    $scope.pounds = function(){
        var lb = $scope.grams / 454;
        return lb.toFixed(2);
    };
    
});
