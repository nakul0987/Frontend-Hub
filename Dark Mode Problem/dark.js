let darkChecker=document.querySelector('#darkMode');
let title=document.querySelector('.heading');
let mainHead=document.querySelector('.mainHeading');

let whiteBgc=function(){
    document.body.style.backgroundColor='white';
    title.style.color='black';
    mainHead.style.color='black';
};

let blackeBgc=function(){
    document.body.style.backgroundColor='black';
    title.style.color='white';
    mainHead.style.color='white';
};

darkChecker.addEventListener('change',()=>{
    if(darkChecker.checked){
        blackeBgc();
    } else{
        whiteBgc();
    }
});
