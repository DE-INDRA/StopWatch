
const display=document.getElementById("screen");

let startTime=0;
let ellapsedTime=0;
let running=false;
let timer=null;
function start(){
    if(!running){
        startTime=Date.now()-ellapsedTime;
        timer=setInterval(update,10);
        running=true;
    }
}
function stop(){
    if(running){
        clearInterval(timer);
        running=false;
        ellapsedTime=Date.now()-startTime;
    }
}
function reset(){
    clearInterval(timer);
    startTime=0;
    ellapsedTime=0;
    running=false;
    display.textContent=`00:00:00:00`;

}
function update(){
    let currentTime=Date.now();
    ellapsedTime=currentTime-startTime;
    let hour=Math.floor(ellapsedTime/(1000*60*60));
    let minute=Math.floor(ellapsedTime/(1000*60)%60);
    let second=Math.floor(ellapsedTime/1000 % 60);
    let millisecond=Math.floor(ellapsedTime%1000/10);
    hour=hour.toString().padStart(2,0);
    minute=minute.toString().padStart(2,0);
    second=second.toString().padStart(2,0);
    millisecond=millisecond.toString().padStart(2,0);
    display.textContent=`${hour}:${minute}:${second}:${millisecond}`;
}
