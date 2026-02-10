let btn = document.querySelector('.submitBtn')
let wordUI = document.querySelector('.wordHere')
let display = document.querySelector('.output')

btn.addEventListener('click', async () => {
  try {
    display.innerHTML = "";

    let response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordUI.value}`)
    let data=await response.json()

    let definitions = data[0].meanings[0].definitions;

    for(let i=0;i<5;i++){
        let li=document.createElement("li")
        li.textContent = definitions[i].definition;
        display.appendChild(li);
    }
  } catch (err) {
    display.innerHTML = 'Error Occur in API or Word not Found'
  }
})
