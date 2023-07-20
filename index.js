//sound functions
let crash = new Audio('sounds/crash.mp3');
let kick = new Audio('sounds/kick-bass.mp3');
let snare = new Audio('sounds/snare.mp3');
let tom1 = new Audio('sounds/tom-1.mp3');
let tom2 = new Audio('sounds/tom-2.mp3');
let tom3 = new Audio('sounds/tom-3.mp3');
let tom4 = new Audio('sounds/tom-4.mp3');




//selection module
document.addEventListener('keydown', function(event){

    switch(event.key){
        case "w":
        tom1.currentTime = 0;
        tom1.play();
        break;   

        case "a":
        tom2.currentTime = 0;    
        tom2.play()
        break;  
        
        case "s":
        tom3.currentTime = 0;    
        tom3.play();
        break; 
        
        case "d":
        tom4.currentTime = 0;    
        tom4.play()
        break; 
        
        case "j":
        snare.currentTime = 0;    
        snare.play()
        break; 
        
        case "k":
        crash.currentTime = 0;    
        crash.play()
        break; 
        
        case "l":
        kick.currentTime = 0;    
        kick.play()
        break;
        
        default: console();
        
    }

   
})


