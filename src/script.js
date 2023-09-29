let audioElement=new Audio("../assets/audio_files/Ganesha_Pancharatnam.mp3");
let playPause=document.getElementById("playPause");
let playing_gif=document.getElementById("playing_gif");
let songImage=document.getElementById("songImage");
let progressBar=document.getElementById("progressBar");
let MasterSongName=document.getElementById("songName");
let songItem=Array.from(document.getElementsByClassName("songItem"))
let songIndex=0;


let songDetails=[
    {songName:"Ganesha Pancharatnam", filePath:"../assets/audio_files/Ganesha_Pancharatnam.mp3", coverPath:"../assets/gif/ganesha.gif"},
    {songName:"Vishnu Sahasranamam", filePath:"../assets/audio_files/Vishnu_Sahasranamam.mp3", coverPath:"../assets/gif/mahavishnu.gif"},
    {songName:"Nama Ramayanam", filePath:"../assets/audio_files/Nama_Ramayanam.mp3", coverPath:"../assets/gif/rama.jpeg"},
    {songName:"Kurai Ondrum Illai", filePath:"../assets/audio_files/Kurai_Ondrum_Illai.mp3", coverPath:"../assets/gif/krishna.jpeg"},
    {songName:"Madhurashtakam", filePath:"../assets/audio_files/Madhurashtakam.mp3", coverPath:"../assets/gif/little_krishna_1.jpeg"},
    {songName:"Jagadodharana", filePath:"../assets/audio_files/Jagadodharana.mp3", coverPath:"../assets/gif/little_krishna_2.jpeg"},
    {songName:"Hanuman Chalisa", filePath:"../assets/audio_files/Hanuman_Chalisa.mp3", coverPath:"../assets/gif/hanuman.jpeg"},
];

playPause.addEventListener("click",()=>{
    makeAllPlays();
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
        playing_gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        playing_gif.style.opacity=0;
    }
})

audioElement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener("change",()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(e.target.classList.contains("fa-pause"))
        {
            audioElement.pause();
            e.target.classList.remove("fa-pause");
            e.target.classList.add("fa-play");
            playPause.classList.remove("fa-pause");
            playPause.classList.add("fa-play");
            playing_gif.style.opacity=0;
        }
        else
        {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            songURL=songDetails[songIndex].coverPath;
            songImage.style.backgroundImage="url('"+songURL+"')";
            audioElement.src = songDetails[songIndex].filePath;
            MasterSongName.innerText = songDetails[songIndex].songName;
            e.target.classList.add("fa-pause");
            e.target.classList.remove("fa-play");
            audioElement.currentTime = 0;
            audioElement.play();
            playPause.classList.remove("fa-play");
            playPause.classList.add("fa-pause");
            playing_gif.style.opacity=1;
        }
    })
})

document.getElementById("next").addEventListener("click", () => {
    makeAllPlays();
    if(songIndex>=songDetails.length-1)
    {
        songIndex=0;
    }
    else
        songIndex+=1;

    audioElement.src = songDetails[songIndex].filePath;
    songURL=songDetails[songIndex].coverPath;
    songImage.style.backgroundImage="url('"+songURL+"')";
    MasterSongName.innerText = songDetails[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
})

document.getElementById("previous").addEventListener("click", () => {
    makeAllPlays();
    if(songIndex<=0)
    {

        songIndex=songDetails.length-1;

    }
    else
        songIndex-=1;
     
    audioElement.src = songDetails[songIndex].filePath;
    songURL=songDetails[songIndex].coverPath;
    songImage.style.backgroundImage="url('"+songURL+"')";
    MasterSongName.innerText = songDetails[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
})

