// adding event listener ->     target.addEventListener(type of event, listener)   -> for more see on documentation MDN

// for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",listener);     // here event given = clicking a button 
// }
// Here this statement works as whenever the event mentioned in the statement(here, click) occurs then the function named with
// listener should be called. 
// In this the function listner is passed as a argument to the addEventListner function by its name.
// Similary we can pass differnt functions as argument to a particular function to work differently in different situations as 
// demanded.
// These functions are called higher order functions which can have functions as arguments.


function listener(){
    alert("I got clicked");
}

// for playing sound against pressing a button on screen
for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){           // can also write anonymous function here 
                                                                                            //directly without any name.
        // this.style.color = "#fff";      // this is the current object on which the event listner is added currently.
                                                                                            

    //    var audio = new Audio("sounds/tom-1.mp3");           to create a audio html element object.
    //    audio.play();


        var buttonPressed = this.innerHTML;
        playSound(buttonPressed);
        buttonAnimation(buttonPressed);
        
    });     
}

// for playing a sound against pressing a keyboard key.
document.addEventListener("keypress",function(event){          // this param passed in callback function gets the object which
                                                        // has details related to the event that triggered this callback function.
    var buttonPressed = event.key;
    playSound(buttonPressed);
    buttonAnimation(buttonPressed);
});

// Implementing a common function for both type of operations.
function playSound(buttonPressed){
    switch(buttonPressed){
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
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
    }
}

// Button Pressed Animation
function buttonAnimation(buttonPressed){
    var activeButton = document.querySelector("." + buttonPressed);
    activeButton.classList.add("pressed");
    // Now we must remove this pressed class from the list inorder to get the previous state of buttons.
    // For this we can use a setTimeout function of javascript which takes two parameters - the function to be called and the
    // time period to wait for before calling that function.
    
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);      // time in millisecond (here 100 millisecond = 0.1 sec);
}

