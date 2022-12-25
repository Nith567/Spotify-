const songslist=[
        {songName:"Hoyna Hoyna - SenSongsMp3.Co.mp3",coverpath:"covers/1.jpg"},
        {songName:"06 Toliprema __ SenSongsMp3.Co.mp3",coverpath:"covers/2.jpg"},
        {songName:"03 [iSongs.info] 03 - Hey Pillagaada.mp3",coverpath:"covers/3.jpg"},
        {songName:"Anaganaga Oka Uru (Female) - SenSongsMp3.Co.mp3",coverpath:"covers/4.jpg"},
        {songName:"kesariya.mp3",coverpath:"covers/5.jpg"}
]
let songItem=Array.from(document.getElementsByClassName("songitem"));
songItem.forEach((ele,i)=>{
 ele.getElementsByTagName("img")[0].src=songslist[i].coverpath
ele.getElementsByClassName("songName")[0].innerText=songslist[i].songName;
})

//console.log(songItem);
let audiosong=new Audio("01 Psycho Saiyaan  __ SenSongsMp3.Co.mp3");
const playButton=document.getElementById("play");
const GIF=document.getElementById("gif");
let progressBar=document.getElementById("range");
//document.getElementById("time").innerHTML=audiosong.duration;
let progress;
 audiosong.addEventListener("timeupdate",()=>{
    //console.log("timeupdate");
    progress=parseInt((audiosong.currentTime/audiosong.duration)*100);
      document.getElementById("range").value=progress;
   //   console.log(progress);
 })
    function toggleSound() {
       var audioElem = document.getElementById('play');
       if (audiosong.paused || audiosong.currentTime<=0) {
           audiosong.play();
           GIF.style.opacity=1;
           audioElem.className = "far fa-3x fa-circle-pause";
       } else {
           audiosong.pause();
           audioElem.className = "far fa-3x fa-circle-play";
           GIF.style.opacity=0;
       }
    }
progressBar.addEventListener("click",()=>{
     audiosong.currentTime=(progressBar.value*audiosong.duration)/100;
})
var currentElement;
// Array.from(document.getElementByClassName("songplay")).forEach((element)=>{
//    element.addEventListener("e",()=>{
//     console.log(e);
//    }) 
// })
//play DIFFERENT BUTTON
let make_play=()=>{
     Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
       // element.className="fas fa-2x fa-circle-play";
 element.classList.remove("fa-circle-pause");
  element.classList.add("fa-circle-play");
     })
     }
     let index;
Array.from(document.getElementsByClassName("songplay")).forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        //console.log(e.target);
          make_play();
       // e.target.className="far fa-2x fa-circle-pause";
console.log(e.target.id);
index=e.target.id;  
// console.log(index);
 currentElement= document.getElementById(`${index}`);
e.target.classList.remove("fa-circle-play");
e.target.classList.add("fa-circle-pause");
audiosong.src=`${index}`;
audiosong.currentTime=0;
audiosong.play();
})
}) 
let bkwd=document.getElementById("back");
let frwd=document.getElementById("next");
var j;

var previousElement;
var nextElement;
// bkwd.addEventListener("click",()=>{
// //     for (var i = 0; i < allElements.length; i++) {
// //         if (allElements[i].id === currentElement.id) {
// //           previousElement = previousElement - allElements[i - 1].id;

// //           break;
// //         }
// //       }
 
// //       console.log(previousElement);
// //     //   console.log(currentElement.id);
// //    //   console.log(previousElement);
//  audiosong.src=`${previousElement}`;
// previousElement=allElements[j].id;
//  audiosong.currentTime=0;
//  audiosong.play();
//  })
// bkwd.addEventListener("click", function() {
//     audiosong.currentTime -= 10; // skip back 10 seconds
//     audio.play();
//   });




var allElements = Array.from(document.querySelectorAll(".songplay"));
var previousElement;
   bkwd.addEventListener("click", function() {
   for (var i = 0; i < allElements.length; i++) {
    if (allElements[i] === currentElement) {
        previousElement = allElements[i - 1].id;
        // allElements[i]=previousElement;
        currentElement=allElements[i-1];
        console.log(currentElement.id);
               }
                   }
                   console.log(previousElement);
audiosong.src=`${previousElement}`;
audiosong.currentTime=0;
 audiosong.play();
   })

   frwd.addEventListener("click", function() {
    audiosong.currentTime += 10; // skip back 10 seconds
    audiosong.play();
  });