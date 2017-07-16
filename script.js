var output = document.getElementById("output");

function myFunction() {
    if(this.readyState == 4 && this.status == 200) {
        output.innerHTML = this.responseText;
    }
}
var myRequest = new XMLHttpRequest();
myRequest.onload = myFunction;
myRequest.open("GET", "api.php");
myRequest.send();
console.log(myRequest);