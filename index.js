// Add click event listener for all .drum class buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var drum1 = new Audio("sounds/tom-1.mp3");
        drum1.play();
    });
}
