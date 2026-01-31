let timer_time=document.getElementById("timer_time")
let start_button=document.getElementById("start_button")
let time_number=parseInt(timer_time.innerHTML)

function decrease_time()
{
    if (time_number>0)
    {
    time_number=time_number-1
    timer_time.innerHTML=time_number
   }
}

function start()
{
    let interValid=setInterval(decrease_time,10)
}

start_button.addEventListener("click",start)