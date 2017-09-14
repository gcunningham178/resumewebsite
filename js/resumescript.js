var xmlhttp = new XMLHttpRequest();
var url = "js/references.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//Function that outputs references based on json
//function myFunction(arr) {
//    var out = "";
//    var i;
//    for(i = 0; i < arr.length; i++) {
//        out +=         
//                        " <li class='w3-hover-green'><span>" + arr[i].name + "</span><br>" +
//                        " <span> Email: " + arr[i].email + "</span>" +
//                        " <span>" + arr[i].phone + "</span></li>";
//            }
//    document.getElementById("refer").innerHTML = out;
//}

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
  
  
  //for (i = 0; i < skillSec.length; i++)
  //{
  //   skilllinks[i].className = skilllinks[i].className.replace("w3-black", "");
  //}
  //
  document.getElementById(sectionId).style.display = "block";
  evt.currentTarget.className += " w3-black";
}

