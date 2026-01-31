console.log()
let colorLabel=document.getElementById("colorLabel")
let start_button=document.getElementById("start_button")
let color_list=["red","green","blue"]
let color_number=0
colorLabel.style.color="green"

function change_color()
{
    color_number=color_number+1
    if (color_number>2)
    {
        color_number=0
    }
    colorLabel.style.color=color_list[color_number]
}

function start()
{
    let intervalid=setInterval(change_color,100)
}

start_button.addEventListener("click",start)