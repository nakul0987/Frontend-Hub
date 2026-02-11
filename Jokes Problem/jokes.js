let content=document.querySelector('.jokeDesc');
let content2=document.querySelector('.jokeDesc2');
let jokeUrl='https://v2.jokeapi.dev/joke/Any?safe-mode';

async function getJoke() {
    try{
        let res=await fetch(jokeUrl);
        let data=await res.json();
        content.innerHTML=data.setup;
        content2.innerHTML=data.delivery;
    }
    catch(e){
        console.log("ERROR: ",e);
    }
}

getJoke();
