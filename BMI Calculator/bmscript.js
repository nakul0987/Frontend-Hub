let weight=document.querySelector('.weightInput')
let height=document.querySelector('.heightInput')
let btn=document.querySelector('.calculateBtn')
let display=document.querySelector('.output')

btn.addEventListener('click',()=>{
    let weightVal=weight.value
    let heightVal=height.value

    let finalHeight=Math.pow(heightVal,2)
    let bmiCalc=weightVal/finalHeight

    display.innerHTML=bmiCalc
})
