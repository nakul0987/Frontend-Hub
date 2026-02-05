let countBtn=document.querySelector('.click');
let resetBtn=document.querySelector('.reset');
let prevScore=document.querySelector('.numberCount');

let count=0;

countBtn.addEventListener('click',()=>{
    count++;
    countBtn.innerHTML=count;
});


resetBtn.addEventListener('click',()=>{
    countBtn.innerHTML='Click';
    count=0;
})

