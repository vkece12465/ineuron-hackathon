var student=document.getElementsByClassName("countStudent")[0];
var countStu=document.getElementsByClassName("student")[0];
let countStudent =39300;
setInterval(()=>{
    if(countStudent<40000){;
        countStudent++;
        student.innerHTML=countStudent;
    }
    else{
        student.innerHTML="40000+"
        countStu.innerHTML="Students enrolled";
    }
},);