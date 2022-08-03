var counter=document.getElementsByClassName("count")[0];
var courses=document.getElementsByClassName("dif-course")[0];

let count=0;


setInterval(()=>{
    if(count<400){;
    count++;
    counter.innerHTML=count;
    }
    else{
        counter.innerHTML="400+"
        courses.innerHTML="Different Courses";
    }
},.3);

