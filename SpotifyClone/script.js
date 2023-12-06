console.log("Welcome to Spotify")

// Initialize the variables
let songIndex = '1';
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'))



let songs = [
    { songName: "Celebrity Killer /Sidhu Moose Wala", filePath: "songs/1.mp3" , coverPath:"pika.jpg" },
    { songName: "Click that B / Karan Aujla", filePath: "songs/2.mp3" , coverPath: "pika.jpg" },
    { songName: "Gangsta / Karan Aujla", filePath: "songs/3.mp3" , coverPath: "pika.jpg" },
    { songName: "Malwa Block / Sidhu Moose Wala", filePath: "songs/4.mp3" , coverPath: "pika.jpg" },
    { songName: "Ptola / Mickey Singh", filePath: "songs/5.mp3" , coverPath:"pika.jpg" },
    { songName: "Schedule / Manni sandhu", filePath: "songs/6.mp3" , coverPath:"pika.jpg" },
    { songName: "Trucker / Arjan Dhillon", filePath: "songs/7.mp3" , coverPath:"pika.jpg" },

]

songItem.forEach((element , i)=>{
     element.getElementsByClassName("imageClass")[0].src = songs[i].coverPath
     element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})

// audioElement.play();

// Handle play/pause click
let n = true
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    }

    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        document.getElementById(songIndex).classList.remove('fa-circle-pause');
        document.getElementById(songIndex).classList.add('fa-circle-play');


    }
})
// Listen to event
audioElement.addEventListener('timeupdate' , ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;
})

const makeAllPlays =  ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=7){
    songIndex =1; 
    }
    else {
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=1){
    songIndex =7; 
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

})

