const questions=document.getElementsByClassName("container");
q_count=0
for(let i=1;i<questions.length;i++){
    questions[i].style.display="none"
}

function renderQuestion(){
    document.querySelectorAll('h1')[q_count].innerHTML=questionbank[q_count].question;

    allOptions=questions[q_count].getElementsByClassName("option")
    for(i=0;i<allOptions.length;i++){
        allOptions[i].innerHTML=questionbank[q_count].options[i];
    }

    
//     allOptions=questions[q_count].getElementsByClassName("option")
//         for(i=0;i<allOptions.length;i++){
//             allOptions[i].addEventListener("click",()=>{
//                          if(questionbank[q_count].correctAns=allOptions[q_count].innerHTML){
//                 //             score++
//                 //             scoredisplay.innerHTML = score
//                              allOptions[q_count].style.backgroundColor = "green";
//                 //         }   
//                                }
// })
//         }


    }

document.getElementsByClassName("button-left")[0].addEventListener('click',()=>{

    if (q_count>=1){
        console.log(q_count)

questions[q_count].style.display="none";
--q_count
questions[q_count].style.display="grid";
renderQuestion()

}
})
document.getElementsByClassName("button-right")[0].addEventListener('click',()=>{
    if (q_count<questions.length-1){
        console.log(q_count)
    questions[q_count].style.display="none";
    ++q_count
    questions[q_count].style.display="grid";
    renderQuestion()

}}
    )

    let questionbank = [
        {
            question:  'What is the capital of France?',
            options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
            correctAns:'Paris'
        },
        {
            question : 'Who wrote "Romeo and Juliet?',
            options : ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
            correctAns: 'William Shakespeare'
        },
        {  
            question : 'What is the largest planet in our solar system?',
            options : ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAns : 'Jupiter'
        },
        {
            question : 'In which year did the Titanic sink?',
            options : ['1912', '1920', '1905', '1931'],
            correctAns : '1912'
        }
    ];

    renderQuestion()









     // for(i=0;i<allOptions.length;i++){
//     allOptions[i].addEventListener("click",()=>{
//         if(questionbank[q_count].correctAns=this.value){
//             score++
//             scoredisplay.innerHTML = score
//             document.getElementById('option2container').style.backgroundColor = "green"
//         }
        
//     })
//     allOptions[i].innerHTML=questionbank[q_count].options[i]

// }








        // score++
        // scoredisplay.innerHTML = score

        // document.getElementById('option1container').style.backgroundColor = "green"
        

    
       