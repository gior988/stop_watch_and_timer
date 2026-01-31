let alphabet=document.getElementById("alphabet")
let start_button=document.getElementById("start_button")
let alphabet_list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let alphabet_number=0
function change_alphabet()
{
    alphabet_number=alphabet_number+1
     if(alphabet_number>25)
    {
      alphabet_number=0
    }

    alphabet.innerHTML=alphabet_list[alphabet_number]
}

function start ()
{
    let interValid=setInterval(change_alphabet,100)

}

start_button.addEventListener("click",start)