const quizDB=[
    {
        question:"Q1.What is full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
d:"HyperText Makeup Language",
ans:"ans3"
    },
    {
        question:"Q2.What is full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
d:"Cascading Super Sheets",
ans:"ans1"
    },
    {
        question:"Q3.What is full form of HTTP?",
        a:"Hypertext Transfer Product",
        b:"Hpertext Test Protocol",
        c:"Heyt Transfer Protocol",
d:"HyperText Transfer Protocol",
ans:"ans4"
    },
    {
        question:"Q4.What is full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
d:"JordanShoes",
ans:"ans1"
    }
];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const optionSelected=document.querySelector("input")
const answers=document.querySelectorAll(".answer");

const showScore=document.querySelector("#showScore");
let questionCount=0;
let score=0;
const loadQuestion=(i=0)=>{

question.innerHTML=quizDB[questionCount].question;
option1.innerHTML=quizDB[questionCount].a;
option2.innerHTML=quizDB[questionCount].b;
option3.innerHTML=quizDB[questionCount].c;
option4.innerHTML=quizDB[questionCount].d;

}
loadQuestion();

const  getCheckAnswer=()=>{
    let answer;
    answers.forEach((el)=>{
        if(el.checked){
            answer=el.id;
        }
   
    });
    return answer;
}

const deselectAll=()=>{
    answers.forEach((el)=>{
        el.checked=false;
})
}

submit.addEventListener("click",()=>{
   const checkedAnswer= getCheckAnswer();
   deselectAll();

   if(checkedAnswer===quizDB[questionCount].ans){
score++;
   }
   questionCount++;
   if(questionCount<quizDB.length){
loadQuestion();
   }
   else{
showScore.innerHTML=`
<h3>You scored ${score}/${quizDB.length}</h3>
<button class="btn" onClick="location.reload()">Play Again</button>`
showScore.classList.remove("scoreArea");
   }
});