
function change_click(){
    var button = document.getElementById("button");
    if(button.textContent === "Hello") {
        button.textContent = "Byeeee!";
    } else {
        button.textContent ="Hello"
    }

}