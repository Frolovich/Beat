


let bg = document.querySelector('#particles-js');

document.addEventListener("keydown", (event) => {
    bg.style.backgroundColor = getRandomColor();    
    let key = event.key;
    playMusic(key);
})


 

function getRandomColor(){
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i=0; i<6; i++){
        color = color + letters[Math.floor(Math.random() * letters.length)]
    }
    return color
}



function playMusic(key){
    let audio;
    switch(key){
        case "d":
            audio = new Audio("ressource/kick1.wav");
            audio.play();
            break;
        case "e":
            audio = new Audio("ressource/kick.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("ressource/kick2.mp3");
            audio.play();
            break;
        case "z":
            audio = new Audio("ressource/Clap1.wav");
            audio.play();
            break;
    }
}