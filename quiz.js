const questions=document.getElementsByClassName("container");
q_count=0
for(let i=1;i<questions.length;i++){
    questions[i].style.display="none"
}

document.getElementsByClassName("button-left")[0].addEventListener('click',()=>{

    if (q_count>=1){
        console.log(q_count)

questions[q_count].style.display="none";
--q_count
renderQuestion()
questions[q_count].style.display="grid";

}
})
document.getElementsByClassName("button-right")[0].addEventListener('click',()=>{
    if (q_count<questions.length-1){
        console.log(q_count)
    questions[q_count].style.display="none";
    ++q_count
    renderQuestion()

    questions[q_count].style.display="grid";

}}
    )

    let questionbank = [
        {
            question: 'Which part is known as the powerhouse of cell ?',
            options: ['footballer','chef','n1ga','goat'],
            correctAns:'goat'
        },
        {
            question : 'shameer is from  ?',
            options : ['koyikkod','kunnamkulam','he never born','who cares about that gay'],
            correctAns: 'who cares about that gay'
        },
        
        {
            
            question : 'who is chad ?',
            options : ['hari','adil','rep','dheeraj'],
            correctAns : 'rep'
        },
        {
question : 'who is chad ?',
            options : ['hari','adil','rep','dheeraj'],
            correctAns : 'rep'
        }
    ];

    let scoredisplay = document.getElementById('scoredisplay')
    let score = 0


function renderQuestion(){
console.log(q_count)
    document.querySelector('h1').innerHTML = questionbank[q_count].question;

    allOptions= document.getElementsByClassName("option")

     }
     renderQuestion()

for(i=0;i<allOptions.length;i++){
    allOptions[i].addEventListener("click",()=>{
        if(questionbank[q_count].correctAns=this.value){
            score++
            scoredisplay.innerHTML = score
            document.getElementById('option2container').style.backgroundColor = "green"
        }
        
    })
    allOptions[i].innerHTML=questionbank[q_count].options[i]

}








        // score++
        // scoredisplay.innerHTML = score

        // document.getElementById('option1container').style.backgroundColor = "green"
        

    
       