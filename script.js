const playbtn = document.querySelector('#play');
const audio = document.querySelector('#audio');
var isPlaying = false;

playbtn.addEventListener('click', ()=> {

    console.log(`music playing ${isPlaying}`);
    if(isPlaying){
        audio.pause();
        isPlaying = false;
        playbtn.innerText = 'Play';
    }
    else{
        audio.play();
        playbtn.innerText = 'Pause';
        isPlaying = true;
    }
});

audio.addEventListener('ended', () =>{
    isPlaying = false;
    playbtn.innerText = 'Play';
})


