const  array =[
    {
        question : " What is HTML ?",
        option1 : ` HTML describes the structure of a webpage`,
        option2 : `HTML consists of a set of elements that helps the browser how to view the content`,
        option3 : "HTML is the standard markup language mainly used to create web pages",
        option4 : "All of the mentioned" ,
        answer : 'd'
    },
    {
        question : "HTML stands for .",
        option1 :"HyperText Markup Language",
        option2 :"HyperText Machine Language",
        option3 :"HyperText Marking Language",
        option4 :"HighText Marking Language",
        answer : 'a'
    },
    {
        question: " Which of the following is used to read an HTML page and render it?",
        option1 :"Web server",
        option2 :"Web network",
        option3:"Web browser",
        option4 :"Web matrix",
        answer : 'c'
    },
    {
        question: " CSS full form.",
        option1 :"Case Study Sheets",
        option2 :"Casecading Style Sheets",
        option3:"Case Style Sheets",
        option4 :"Casecading Study Sheets",
        answer : 'b'
    },
    {
        question: " Which of the following tag is used for inserting the largest heading in HTML?",
        option1 :"head",
        option2 :"h1 tag",
        option3:"h6 tag",
        option4 :"heading",
        answer : 'b'
    }
]
// const formdata = document.getElementById('form').su

var questionCount = 0
var score = 0
let question = document.getElementById('question')
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')
// const question = document.getElementById('question')s
 
function LoadQuestion(){
    question.innerText = array[questionCount].question
    option1.innerText = array[questionCount].option1
    option2.innerText = array[questionCount].option2
    option3.innerText = array[questionCount].option3
    option4.innerText = array[questionCount].option4
}
var checkedOption = document.getElementsByName('option') ;
function getsubmittedAnswer(){
    for(var i=0;i<array.length;i++){
        if(checkedOption[i].checked){
            console.log(checkedOption[i].className)
            if(checkedOption[i].className == array[questionCount].answer  ){
                console.log("Correct");
                score+= 1 ;
                console.log(score)
                if(questionCount +1 >= array.length){    
                document.getElementById("form").style.display ="none";
                document.getElementById("submit").style.display ="none";
                document.getElementById("results").innerHTML ="Quiz completed" + `<br>` +  `<br>` +  "You Scored "+score;
                }
                if(questionCount+1<=array.length){
                    console.log(questionCount)
                    questionCount++
                    LoadQuestion()
                }
            }
            else{
                console.log("Incorrect", score);
                if(questionCount +1 >= array.length){    
                    document.getElementById("form").style.display ="none";
                    document.getElementById("submit").style.display ="none";
                    document.getElementById("results").innerHTML ="Quiz completed" + `<br>` +  `<br>` +  "You Scored "+score;
                    }
                    if(questionCount+1<=array.length){
                        console.log(questionCount)
                        questionCount++
                        LoadQuestion()
                    }
                }
    
            }
        }
      
    }
document.getElementById("body").addEventListener("load",LoadQuestion() ) 
// console.log(array[i])


