function CreateCustomer()
{
 var objRequest = new XMLHttpRequest();
  var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
   var customerid = document.getElementById("custid").value;
   var customername = document.getElementById("custname").value;
   var customercity = document.getElementById("custcity").value;
   var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"'+ customercity+'"}';
   objRequest.onreadystatechange = function()
   {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {             var result = JSON.parse(objRequest.responseText);
    OperationResult(result);
    }}; 
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
    }
    function OperationResult(output)
    {
    if (output.WasSuccessful == 1)
    { document.getElementById("result").innerHTML = "The operation was successful!";}
    else
    { document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;}
}

function ChangeAddress()
{
 var objRequest = new XMLHttpRequest();
  var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
   var ordernumber = document.getElementById("ordnum").value;
   var shiptoname = document.getElementById("shiptoname").value;
   var shiptoaddress= document.getElementById("shipaddress").value;
   var shiptocity = document.getElementById("shiptocity").value;
    var shiptopost = document.getElementById("shiptopost").value;
   var newaddress = '{"OrderID":"' + ordernumber + '","ShipName":"' + shiptoname +'","ShipAddress":"'+shiptoaddress+'","ShipCity":"'+ shiptocity +'","ShipPostcode":"'+ shiptopost+'"}';
   objRequest.onreadystatechange = function()
   {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {             var result = JSON.parse(objRequest.responseText);
    OperationResult2(result);
    }}; 
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newaddress);
    }
    function OperationResult2(output)
    {
    if (output == 1)
    { document.getElementById("result2").innerHTML = "The operation was successful!";}
    else
    { document.getElementById("result2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;}
}




function deletecust()
{alert("CONFIRM");


var objRequest= new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    url += document.getElementById("delcustid").value;
objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
        GenerateOutput3(output);
    }
};
objRequest.open("GET", url, true);
objRequest.send();
}
function GenerateOutput3(result3)
{
if (result3.DeleteCustomerResult.WasSuccessful == 1)
    { document.getElementById("result3").innerHTML = "The operation was successful!";}
    else
    { document.getElementById("result3").innerHTML = "The operation was not successful!";}
     
}

 

function menuchoice()
   {
   
if (document.getElementById("menu").value=="Add Customer")
{
    
    document.getElementById("section1").style.display="block";
    document.getElementById("section2").style.display="none";
    document.getElementById("section3").style.display="none";

}
else if (document.getElementById("menu").value=="Change Ship-To Address")
{
    
    document.getElementById("section2").style.display="block";
   document.getElementById("section1").style.display="none";
    document.getElementById("section3").style.display="none";
}
else if (document.getElementById("menu").value=="Delete Customer")
{

document.getElementById("section3").style.display="block";
document.getElementById("section2").style.display="none";
    document.getElementById("section1").style.display="none";
    }
   else
   {
    document.getElementById("section2").style.display="none";
    document.getElementById("section1").style.display="none";
    document.getElementById("section3").style.display="none";
   }
   }