const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')
const clock = document.querySelector('.timer')

let second = 0;
let minute = 0;
let hour = 0;
let timer;

function getTimeSecond(second){
    const data = new Date(second * 1000)

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' 
    })
}

function startClock(){
    timer = setInterval(() => {
        second++

        clock.innerHTML = getTimeSecond(second)
    }, 1000);
}

start.addEventListener('click', (e)=>{
    e.preventDefault()
    clearInterval(timer)

    clock.classList.remove('paused')
    clock.classList.remove('reseted')
    startClock()
})

pause.addEventListener('click', (e)=>{
    e.preventDefault()
    clearInterval(timer)

    clock.classList.add('paused')
})

reset.addEventListener('click', (e)=>{
    e.preventDefault()
    clearInterval(timer)

    clock.classList.add('reseted')

    second = 0
    clock.innerHTML = '00:00:00'
})