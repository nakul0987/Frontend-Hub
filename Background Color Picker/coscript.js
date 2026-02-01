let redBtn=document.querySelector('.red');
let greenBtn=document.querySelector('.green');
let blueBtn=document.querySelector('.blue');
let yellowBtn=document.querySelector('.yellow');

redBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = "orangered";
})

greenBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = "greenyellow";
})

blueBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = "skyblue";
})

yellowBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = "yellow";
})
