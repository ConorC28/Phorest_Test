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


// $(document).ready(function () {
//        var json = [{"User_Name":"John Doe","score":"10","team":"1"},{"User_Name":"Jane Smith","score":"15","team":"2"},{"User_Name":"Chuck Berry","score":"12","team":"2"}];
//        var tr;
//        for (var i = 0; i < json.length; i++) {
//            tr = $('<tr/>');
//            tr.append("<td>" + json[i].User_Name + "</td>");
//            tr.append("<td>" + json[i].score + "</td>");
//            tr.append("<td>" + json[i].team + "</td>");
//            $('table').append(tr);
//        }
//    });




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
            var objStringified = JSON.stringify(obj._embedded.clients, null, 2);
            var cliId = JSON.stringify(obj._embedded.clients.clientId, null, 2);

            var client1id = JSON.stringify(obj._embedded.clients[0].clientId);
            var jClients = JSON.parse(objStringified);





// Working Search!!!!!!! Matches with

            console.log(searchContent);
            var results = [{}];
            var searchVal = "uInput";
            for (var i=0 ; i < obj._embedded.clients.length ; i++)
            {
              console.log("CONOR!!!!!!");
            if (obj._embedded.clients[i]["firstName"] == searchContent) {
            results.push(obj._embedded.clients[i]);
            console.log("KEVIN!!!!!!!");



          }
}




            // kinda working but showing undefined




                 //
                 // var result_stringified = JSON.stringify(objStringified, null, 4);
                 // var tr;
                 //
                 //
                 // for (var i = 0; i < objStringified.length; i++) {
                 //     tr = $('<tr/>');
                 //     tr.append("<td>" + objStringified[i].clientId + "</td>");
                 //     tr.append("<td>" + objStringified[i].firstName + "</td>");
                 //
                 //     $('table').append(tr);
                 // };




            // var object, dbParam, xmlhttp, myObj, x, txt = "";
            // object = { table: "customers", limit: 20 };
            // dbParam = JSON.stringify(object);
            // xmlhttp = new XMLHttpRequest();
            // xmlhttp.onreadystatechange = function() {
            //   if (this.readyState == 4 && this.status == 200) {
            //     myObj = JSON.parse(this.responseText);
            //     obj += "<table border='1'>"
            //     for (x in myObj) {
            //       obj += "<tr><td>" + myObj[x]+ "</td></tr>";
            //     }
            //     obj += "</table>"
            //     document.getElementById("demo").innerHTML = obj;
            //   }
            // };
            // xmlhttp.open("GET", "https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client/", true);
            // xmlhttp.setRequestHeader("Authorization", authenticateUser(userName, passWord),"Content-type", "application/x-www-form-urlencoded");
            // xmlhttp.send("x=" + dbParam);








// $.each(obj, function (k, strProperty) {
//
// var dbResAjx = getResultFromSql(k);
//
// dbResAjx.success(function (response) {
//             console.log(response);
//
//             //  myRecords = JSON.parse(response.text());
//             $('demo').dynatable({
//                 dataset: {
//                     records:   $.parseJSON(response)
//                 }
//             });
//         });
//
//         dbResAjx.error(function (response) {
//             console.log(response);
//         });
//     });




//       $(document).ready(function(){
//
// $.getJSON(obj.json, function(data){
//   var client_data = '';
//   $.each(data, function(key, value){
// client_data += '<tr>';
// client_data += '<td>'+obj.clientId+'<td>';
//
//   });
//
//
// });
//
//
//       });










            // document.getElementById("searchCount").innerHTML = obj._embedded.clients.length;
            // document.getElementById("searchData").innerHTML = objStringified;
            //
            //
            //
            // console.log(jClients);
            // console.log(client1id);
            // console.log(objStringified);






                   }
            }
          }
