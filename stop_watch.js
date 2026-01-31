console.log("stop_watch")
let stop_watch_time=document.getElementById("stop_watch_time")
let button_start=document.getElementById("button_start")
let time_numbers=parseInt(stop_watch_time.innerHTML)
console.log("time_numbers=",time_numbers)

function increase_time()
{
    time_numbers=time_numbers+1
    stop_watch_time.innerHTML=time_numbers
}
function start()
{
    console.log("starting")
    let intervalId=setInterval(increase_time,1000)
}


button_start.addEventListener("click",start)