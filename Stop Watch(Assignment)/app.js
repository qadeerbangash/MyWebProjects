//STOP WATCH
var hour=0;
var min=0
var sec=0
var milseconds=0

var hourheading=document.getElementById("hour")
var minheading=document.getElementById("min")
var secheading=document.getElementById("sec")
var milsecondsheading=document.getElementById("milseconds")
var interval

function timer(){
    milseconds++
    milsecondsheading.innerHTML=milseconds
    if(milseconds >= 100){
        sec++
        secheading.innerHTML=sec
        milseconds=0
    } else if(sec >= 60){
        min++
        minheading.innerHTML=min
        sec=0
    }
    else if(min >= 60){
        min=0
        hourheading.innerHTML=hour
        hour++
    }
    else if (hour = 24){
        hour=0
    }
}
//10*100=1000
//10=1000 milisecons or hundreds miliseconds

function start(){
    interval=setInterval(timer,10)
    document.getElementById('start').disabled=true


}
function stop(){
    clearInterval(interval)
    document.getElementById('start').disabled=false
    document.getElementById('stop').disabled=true
}

function reset(){
    document.getElementById('start').disabled=false
    document.getElementById('stop').disabled=false
    document.getElementById('reset').disabled=false
    hour=0
    min=0
    sec=0
    milseconds=0
    hourheading.innerHTML=hour
    minheading.innerHTML=min
    secheading.innerHTML=sec
    milsecondsheading.innerHTML=milseconds
    clearInterval(interval)
}
