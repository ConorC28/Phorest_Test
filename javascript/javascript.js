var Username = "global/cloud@apiexamples.com";
var Password =  "VMlRo/eh+Xd8M~l";
var Endpoint = "https//api-gateway-dev.phorest.com/third-party-api-server/api/business/";

function searchClients(Username = 'global/cloud@apiexamples.com', Password =  'VMlRo/eh+Xd8M~l' ){
  var Username = "global/cloud@apiexamples.com";
  var Password =  "VMlRo/eh+Xd8M~l";
  var Endpoint = "https//api-gateway-dev.phorest.com/third-party-api-server/api/business/";



  var x = document.getElementById("data");
  if (x.style.display != "block") {
    x.style.backgroundColor = "red";
  } else {
    x.style.backgroundColor = "green";
  }
  fetch('https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/clientcourse/')
  .then(response => response.json())
  .then(json => display(json))
}



function getData(){
  var x = document.getElementById("data");
  if (x.style.display != "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => display(json))
}

function display(json) {
  let myData = ''
   $.each(json, function(key,value) {
    myData += '<div class="square"> ' +
    '<div class="circle">' +
    value.id+'</div><div>'+
    value.userId+ '</div><div>'+
    value.title+'</div><div>'+
    value.completed+'</div>'+
    '</div><br>'
 })
    document.getElementById("data").innerHTML= myData
}
