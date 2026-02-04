let inputCache = document.querySelector('.cacheInput')
let btn = document.querySelector('.submitBtn')
let outputCatch = document.querySelector('.cacheHere')
let refresh = document.querySelector('.refreshBtn')
let cache = ''

refresh.addEventListener('click', () => {
  let chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    cache=''

  for (let i = 0; i < 8; i++) {
    cache += chars[Math.floor(Math.random() * 72)]
  }
  outputCatch.innerHTML = cache
  console.log(cache)
})

btn.addEventListener('click', () => {
  let inputValue = inputCache.value
    console.log(inputValue)
  if (inputValue == cache) {
    alert('Cache Matched!')
    inputValue=''
  } else{
    alert('Try Again')
  }
})
