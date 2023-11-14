const questions=document.getElementsByClassName("container");
q_count=0
for(var i=1;i<questions.length;i++){
    questions[i].style.display="none"
}

document.getElementsByClassName("button-left")[0].addEventListener('click',()=>{

    if (q_count>=1){
        console.log(q_count)

questions[q_count].style.display="none";
--q_count
questions[q_count].style.display="grid"
}
})
document.getElementsByClassName("button-right")[0].addEventListener('click',()=>{
    if (q_count<questions.length-1){
        console.log(q_count)
    questions[q_count].style.display="none";
    ++q_count
    questions[q_count].style.display="grid"
}}
    )



