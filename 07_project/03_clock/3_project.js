
const div = document.querySelector('div');

setInterval(function(){
    const currentTime = new Date()
    /*const currentHours = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()
    const currentSecond = currentTime.getSeconds()
    div.innerHTML=`${currentHours} : ${currentMinute} : ${currentSecond}`;*/
    div.innerHTML=currentTime.toLocaleTimeString();
},1000)