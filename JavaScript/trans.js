var trans=document.getElementsByClassName("trans")[0];
var money=document.getElementsByClassName("money")[0];
let transTotal =3100;
setInterval(()=>{
    if(transTotal<4000){;
        transTotal++;
        trans.innerHTML=transTotal;
    }
    else{
        trans.innerHTML="4000+"
        money.innerHTML="Sucessfull Transaction";
    }
},);