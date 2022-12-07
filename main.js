const chevronRight = document.querySelector('.chevron-right')
const chevronLeft = document.querySelector('.chevron-left')
const slider = document.querySelector('.slider')
const imageNumber = document.querySelectorAll('.image')
let indexNumber = 1
chevronLeft.addEventListener('click',() => {
    console.log('jestem');
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${indexNumber * 800}px)`
     indexNumber++
}
const firstSlider = () => {
     slider.style.transform = `translateX(0px)`
     indexNumber = 1
}
const previousSlide = () => {
      slider.style.transform = `translateX(-${(indexNumber-2) * 800}px)`
     indexNumber--
}
const lastSlide = () => {
      slider.style.transform = `translateX(${-(imageNumber.length - 1) * 800}px)`
     indexNumber = 4
}
chevronRight.addEventListener('click',() => {
    
   indexNumber < imageNumber.length ? nextSlide() : firstSlider()
    
})

chevronLeft.addEventListener('click',() => {
    indexNumber > 1 ? previousSlide() : lastSlide()
})

// second carusel
const caruselSlider = document.querySelector('.carusel-slider')
let counter = 0
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const caruselIMages = document.querySelectorAll('.carusel-slider img')
let size = caruselIMages[0].clientWidth
const dotContainer = document.querySelector('.dot-container')
let interval = null


prevBtn.addEventListener('click',() => {

    
    if(counter < caruselIMages.length -1 ){
        counter++
    }else{
        counter = 0
    }
   clearInterval(interval)
   autoPLaySLider()
    caruselIMages.forEach(elem=>elem.parentElement.classList.remove('active'))
      const dot = document.querySelectorAll('.slider-dot')
    console.log(dot[counter]);
    
     dot.forEach(dot=>dot.classList.remove('dot-active'))
     
     dot[counter].classList.add('dot-active')
     caruselIMages[counter].parentElement.classList.add('active')
    caruselSlider.style.transform = `translateX(${-size * counter}px)`
})
nextBtn.addEventListener('click',() => {
    
    if(counter <= 0){
        counter = caruselIMages.length - 1
    }else{
        counter --
    }
      clearInterval(interval)
   autoPLaySLider()
   const dot = document.querySelectorAll('.slider-dot')
    dot.forEach(dot=>dot.classList.remove('dot-active'))
   
    dot[counter].classList.add('dot-active')
    caruselIMages.forEach(elem=>elem.parentElement.classList.remove('active'))
    caruselIMages[counter].parentElement.classList.add('active')
    caruselSlider.style.transform = `translateX(${-size * counter}px)`
})
window.addEventListener('resize', () => {
    console.log(counter);
    size = caruselIMages[0].clientWidth
    caruselSlider.style.transform = `translateX(${-size * counter}px)`
})
const handleDotSlider = (idx) => {
   const dot = document.querySelectorAll('.slider-dot')
     clearInterval(interval)
   autoPLaySLider()
    counter = idx
    dot.forEach(elem=>elem.classList.remove('dot-active'))
    dot[counter].classList.add('dot-active')
     console.log(dot[counter]);
     caruselSlider.style.transform = `translateX(${-size * counter}px)`
     caruselIMages.forEach(elem=>elem.parentElement.classList.remove('active'))
    caruselIMages[counter].parentElement.classList.add('active')
}
const creatingSLiderDot = () => {
    for(let i = 0; i < caruselIMages.length ; i++){
        const div = document.createElement('div')
        div.className = 'slider-dot'
        dotContainer.appendChild(div)
       

    }
     caruselIMages[counter].parentElement.classList.add('active') 
     const dot = document.querySelectorAll('.slider-dot')
     dot.forEach((elem,idx)=>elem.addEventListener('click',()=>handleDotSlider(idx)))
     dot[counter].classList.add('dot-active')
}
creatingSLiderDot()
const autoPLaySLider = () =>{
    interval = setInterval(() => {
         if(counter < caruselIMages.length -1 ){
        counter++
    }else{
        counter = 0
    }
    caruselIMages.forEach(elem=>elem.parentElement.classList.remove('active'))
      const dot = document.querySelectorAll('.slider-dot')
    console.log(dot[counter]);
    
     dot.forEach(dot=>dot.classList.remove('dot-active'))
     
     dot[counter].classList.add('dot-active')
     caruselIMages[counter].parentElement.classList.add('active')
    caruselSlider.style.transform = `translateX(${-size * counter}px)`
    },2000)
}
autoPLaySLider()