let yourScore=0;
let comScore=0;
let choices=document.querySelectorAll(".choice");
let move=document.querySelector("#move");
let comScorepara=document.querySelector("#comScore");
let userScorepara=document.querySelector("#yourScore");


let genComChoice=()=>{
    let option=["stone","paper","sesser"];
    let randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];
};
let ShowWinner=(win)=>{
    if(win===true){
        yourScore++;
        comScorepara.innerText=yourScore;
        move.style.backgroundColor="green";
        console.log("Wow Great, You Won");
        move.innerText="Wow Great, You Won";
    
    }
    else{
        comScore++;
        userScorepara.innerText=comScore;
        console.log("Oops You loose Better Luck Next Time");
        move.innerText="Oops You loose Better Luck Next Time";
        move.style.backgroundColor="red";
    }
};

let gamePlay=(userChoice)=>{
    console.log("Your Choice =",userChoice); 
    const ComChoice=genComChoice();
    console.log("Computer Choice =",ComChoice);
    if(userChoice === ComChoice){
        console.log("match was draw");
    }else{
        let win=true;
        if(userChoice ==="stone"){
            win = ComChoice === "paper" ? false : true;
        }else if(userChoice=== "paper"){
            win = ComChoice === "stone" ? true : false;
        }else{
                win = ComChoice === "stone" ? false : true;
        }
        
        ShowWinner(win);
        }
    
    };
    






choices.forEach((choice)=>{
    // console.log(choice);//print indivdual div
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        // console.log("choice  was  clicked",userChoice); 
        gamePlay(userChoice);
    });



}); 