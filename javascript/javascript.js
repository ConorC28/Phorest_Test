var userName = "global/cloud@apiexamples.com";
var passWord = "VMlRo/eh+Xd8M~l";

function authenticateUser(user, password)
{
    var token = user + ":" + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(token);

    return "Basic " + hash;
}


function searchClients(json){





  var request_ = new XMLHttpRequest();

      request_.open("GET", "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client/", true);
      request_.setRequestHeader("Authorization", authenticateUser(userName, passWord));
      request_.send();



      request_.onreadystatechange = function () {

          if (request_.readyState == 4 && request_.status == 200) {


            var data = JSON.parse(request_.responseText);
            var response = request_.responseText;
            var obj = JSON.parse(response);
            var str = JSON.stringify(obj._embedded.clients, null, 2);

            console.log(obj._embedded.clients)

    document.getElementById("searchData").innerHTML = str;

              // handle data as needed...

          }
      }


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
    document.getElementById("searchData").innerHTML= myData
}





    // request.open("GET", "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/clientcourse/", false);
    // request.setRequestHeader("Authorization", authenticateUser(userName, passWord));
    // request.send();
    // fetch('https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/clientcourse/')
    // .then(response => response.json())
    // .then(json => display(json))
    // view request status
    //alert(request.status);
    //response.innerHTML = request.responseText;









// function searchClients(){
// var x = document.getElementById("searchData");
// fetch('https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client/')
// .then(response => response.json())
// .then(json => display(json))
// }
//
// function display(json) {
//   let myData = ''
//    $.each(json, function(key,value) {
//     myData += '<div class="square"> ' +
//     '<div class="circle">' +
//     value.id+'</div><div>'+
//     value.userId+ '</div><div>'+
//     value.title+'</div><div>'+
//     value.completed+'</div>'+
//     '</div><br>'
//  })
//     document.getElementById("searchData").innerHTML= myData
// }


// javascript
function getData(){
fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => response.json())
.then(json => display(json))
}

// function display(json) {
//   let myData = ''
//    $.each(json, function(key,value) {
//     myData += '<div class="square"> ' +
//     '<div class="circle">' +
//     value.id+'</div><div>'+
//     value.userId+ '</div><div>'+
//     value.title+'</div><div>'+
//     value.completed+'</div>'+
//     '</div><br>'
//  })
//     document.getElementById("data").innerHTML= myData
// }
