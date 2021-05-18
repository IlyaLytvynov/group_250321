
function toogleLight() {
    const lampRed = document.querySelector('.lamp_red');
    console.log(lampRed);

    lampRed.onclick = function(){
        if(lampRed.style.backgroundColor === 'red'){
            lampRed.style.backgroundColor = 'transparent';
        } else {
            lampRed.style.backgroundColor = 'red';
        }    
    };

    const lampYellow = document.querySelector('.lamp_yellow');
    console.log(lampYellow);

    lampYellow.onclick = function(){
        if(lampYellow.style.backgroundColor === 'yellow'){
            lampYellow.style.backgroundColor = 'transparent';
        } else {
            lampYellow.style.backgroundColor = 'yellow';
        }    
    };

    const lampGreen = document.querySelector('.lamp_green');
    console.log(lampGreen);

    lampGreen.onclick = function(){
        if(lampGreen.style.backgroundColor === 'green'){
            lampGreen.style.backgroundColor = 'transparent';
        } else {
            lampGreen.style.backgroundColor = 'green';
        }    
    };
}


toogleLight()
