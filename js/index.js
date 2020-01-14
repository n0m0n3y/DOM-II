// Your code goes here

//soundFiles
const spart = document.querySelector('body');
spart.addEventListener('mouseenter',()=>{
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
newNav.addEventListener('click', (event)=>{
    alert ('These buttons will take you ANY WHERE! You did not take heed I see, welcome to the DarkSide!');
event.preventDefault(event);
});

const funBus = document.querySelector('.funBusImg');
funBus.addEventListener('mouseover', ()=>{
    
    alert ('RUNNNNNNNN!!!!!! WHILE YOU CAN THIS SITE IS POISONED!');
});

const funBusH =document.querySelector('h2');
funBusH.addEventListener('select',
    ()=>{
h2.style.color ="red";
    });
console.log(funBusH);




const clickFor = document.querySelector('.btn');
clickFor.addEventListener('click',(event)=>{
 bleep.play();
  event.stopPropagation();
    
});

const btnOne = document.querySelector('.one');
btnOne.addEventListener('dblclick', (event)=>{
    alert ('OK OK OK, Last Chance. Just Leave Now, Before Things Get DARK. ');
   
});

const btnTwo = document.querySelector('.two');
btnTwo.addEventListener('mouseleave', (event)=>{
    mario.play();
   
});

const btnThree = document.querySelector('.three');
btnThree.addEventListener('mouseover', (event)=>{
    anObama.play();
    


});

