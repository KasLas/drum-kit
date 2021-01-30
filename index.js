// Add click event listener for all .drum class buttons

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
    alert("I have been clicked");
}
