let myImage = document.querySelector('img');
const text1 = document.getElementById("text");
$(document).ready(function(){
    swal("Dear Dade");
})

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === "asset/give_cake.gif"){
    }else if(mySrc === "asset/bear2.gif"){
        myImage.setAttribute('src', "asset/bear1.gif");
        text1.innerText='Semoga apa yang kamu semogakan tidak hanya menjadi sekadar semoga, tapi secepatnya terwujudkan!';
    }else if(mySrc === "asset/bear1.gif"){
        myImage.setAttribute('src', "asset/bear4.gif");
        text1.innerText='moga harimu semanis dirimu\n sehat selalu semangat terus berkobar :)';
    }else if(mySrc === "asset/bear4.gif"){
        myImage.setAttribute('src', "asset/rose_bear.gif");
        text1.innerText='\n Met Ultah Ya..\n Salam Manis Yusuf';
    }
    else if(mySrc === "asset/rose_bear.gif"){
        
    }
    else{
        myImage.setAttribute('src', "asset/bear2.gif");
        text1.innerText='\nsemoga kamu selalu diberi kebahagiaan';
    }
}