let value1=document.getElementById('value1');
let value2=document.getElementById('value2');
let value3=document.getElementById('value3');

let values=[
    '😁','🐼','🦓','🦄','🫏','🫎','🐻','🐕','🐾' 
];

inpSpeed=document.getElementById('inpSpeed');

function getRandomValue(){
     return values[Math.floor(Math.random()*9)]
}
let animationId;
function updateanimation(newSpeed){
    if(animationId) clearInterval(animationId);
    animationId=setInterval(()=>{
        value1.innerText=getRandomValue();
        value2.innerText=getRandomValue();
        value3.innerText=getRandomValue();
 },1000/newSpeed)
}

inpSpeed.onchange= function(ev){
    console.log('Speed Change',ev.target.value);
    
    document.documentElement.style.setProperty('--speed',ev.target.value);
    updateanimation(ev.target.value);
}