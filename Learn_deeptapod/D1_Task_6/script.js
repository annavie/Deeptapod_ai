var savedText = "";       
function displayInput() {
    var inputText = document.getElementById("textInput").value;
    savedText += inputText + "<br>"; 
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p>" + savedText + "</p>"; 
}
function clearText() {
    savedText = ""; 
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
}