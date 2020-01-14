// Your code goes here
const gone = document.querySelector("img");

window.addEventListener("resize", () => {//8
  gone.src = "/img/gone.jpg";
});
console.log(gone);

//soundFiles
const spart = document.querySelector('body');
spart.addEventListener('mouseenter',()=>{//7
    anons.play();

    
});
const obama = document.querySelector('body');

obama.addEventListener('',()=>{
    obama.play();
});
const anObama = new Audio ();
anObama.src = '/img/thanks.mp3';
const mario = new Audio ();
mario.src = '/img/its-me-mario.mp3';
const anons = new Audio();
anons.src = '/img/sparta.mp3';
const bleep = new Audio();
bleep.src = '/img/fake-news.mp3';


const newNav = document.querySelector('.nav');
newNav.addEventListener('click', (event)=>{//6
    alert ('These buttons will not take you ANY WHERE! You did not take heed I see, welcome to the DarkSide!');
event.preventDefault();
});

const funBus = document.querySelector('.funBusImg');
funBus.addEventListener('mouseleave', ()=>{//dub
    
    alert ('RUNNNNNNNN!!!!!! WHILE YOU CAN THIS SITE IS POISONED!');
});



 


const clickFor = document.querySelector('.btn');
window.addEventListener('keypress',(event)=>{//5
 bleep.play();
  event.stopPropagation();
    
});

const btnOne = document.querySelector('.one');
btnOne.addEventListener('dblclick', (event)=>{//4
    alert ('OK OK OK, Last Chance. Just Leave Now, Before Things Get DARK. ');
   
});

const btnTwo = document.querySelector('.two');
btnTwo.addEventListener('mouseleave', (event)=>{//3
    mario.play();
   
});

const btnThree = document.querySelector('.three');
btnThree.addEventListener('mouseover', (event)=>{//2
    anObama.play();
    


});

const foot = document.querySelector('footer');
window.addEventListener('keydown', //1
    ()=>{
foot.style.backgroundColor="red";
    });
console.log(foot);

const vol = document.querySelector('body');
window.addEventListener('volumechange',(event)=>{
alert('DONT TOUCH THE VOL!');
console.log(vol);
});
