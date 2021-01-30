// Add click event listener for all .drum class buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var innerHtmlElement = this.innerHTML;

        makeSound(innerHtmlElement);
        buttonAnimation(innerHtmlElement);
    });
}

document.addEventListener("keydown", function (e) {
    // e is the event that triggered the function sort of a call back
    makeSound(e.key);
    buttonAnimation(e.key);
});

// Function that creates sound objects with different drum sounds
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);
    }
}

// function to add class .pressed to the pressed button
function buttonAnimation(key) {
    var pressedButton = document.querySelector("." + key);

    pressedButton.classList.add("pressed");

    setTimeout(() => {
        pressedButton.classList.remove("pressed");
    }, 100);
}
