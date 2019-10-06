// authentication values

var userName = "global/cloud@apiexamples.com";
var passWord = "VMlRo/eh+Xd8M~l";


//save token

function authenticateUser(username, password)
{
    var token = username + ":" + password;

    var hash = btoa(token);

    return "Basic " + hash;
}

function searchClients(){

  var request_ = new XMLHttpRequest();

      request_.open("GET", "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client/", true);
      request_.setRequestHeader("Authorization", authenticateUser(userName, passWord));
      request_.send();

      request_.onreadystatechange = function () {

          if (request_.readyState == 4 && request_.status == 200) {


// save user input to compare with json object values
            var searchContent = document.getElementById('searchContent').value;

            var response = request_.responseText;
            var obj = JSON.parse(response);
            var str = JSON.stringify(obj._embedded.clients, null, 2);
            var cliId = JSON.stringify(obj._embedded.clients.clientId, null, 2);

            var client1id = JSON.stringify(obj._embedded.clients[0].clientId);
            var jClients = JSON.parse(str);

            
            document.getElementById("searchCount").innerHTML = obj._embedded.clients.length;
            document.getElementById("searchData").innerHTML = str;
//alert(obj._embedded.clients[0].clientId);



console.log(client1id);


                   }
            }
          }
