window.addEventListener("load", function() {
    document.getElementById("message").innerHTML =
        "The page has loaded!";
});

document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("message").innerHTML =
        "You clicked the button!";
});

document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
    this.innerHTML = "You moved your mouse over me!";
});

document.addEventListener("keydown", function(event) {
    document.getElementById("keyMessage").innerHTML =
        "You pressed: " + event.key;
});
