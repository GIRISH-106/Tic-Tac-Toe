let buttons = document.querySelectorAll("#box");
let text = document.getElementById("text");

let turnO = true;

let winpattern = [
    [0,1,2],//1
    [3,4,5],//2
    [6,7,8],//3
    [0,3,6],//4
    [1,4,7],//5
    [2,5,8],//6
    [0,4,8],//7
    [2,4,6] //8
]

 buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
 })

 const checkWinner = ()=>{
    for(pattern of winpattern){
        let post1 = buttons[pattern[0]].innerText;
        let post2 = buttons[pattern[1]].innerText;
        let post3 = buttons[pattern[2]].innerText;

        if(post1 !=  "" && post2 != "" && post3 != ""){
            if(post1 === post2 && post2 ===post3){

                const stop = ()=>{
                    for(box of buttons){
                        box.disabled = true;
                    }
                    text.innerText = `Winner is ${post1}`
                }
                stop();
            }
        }
    }
 }