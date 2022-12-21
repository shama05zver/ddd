// Кнопка about
const btnAbout = document.querySelector('#scroll1')
//  Section
const sectionFirst = document.querySelector('#section1')
// Кнопка Work
const btnWork = document.querySelector('#btnwork')
// Подвал
const sectionFooter = document.querySelector('#footer')
// Кнопка Price list and reviews
const btnPrice = document.querySelector('#price')
// Перелистывание в секцию прайс
const sectionPrice = document.querySelector('#sectionPrice')

function scrollTo(element){
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

btnAbout.addEventListener('click', () => {
    scrollTo(sectionFirst)
})

btnWork.addEventListener('click', () => {
    scrollTo(sectionFooter)
})

const offset = 100
const scrollUp = document.querySelector('.scroll-up')
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path')
const pathLength = scrollUpSvgPath.getTotalLength()

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms'

const getTop = () => window.pageYOffset || document.documentElement.scrollTop

// Функция считающая сколько надо сделать заливки!
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight
    const dashoffset = (pathLength - (getTop() * pathLength / height))

   scrollUpSvgPath.style.strokeDashOffset = dashoffset
}

// Функция для переключения классов активна-неактивна!
window.addEventListener('scroll', () => {
    updateDashoffset()
    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active')
    } else {
        scrollUp.classList.remove('scroll-up--active')
    }
})
// Функция отвечающая на нажатие ктопки!
scrollUp.addEventListener('click', () => {
    window.scroll({
        top:0, 
        behavior: 'smooth' 
    })
})


const openBtn = document.querySelector('#open')
const dialog = document.querySelector('dialog')

//const registryBtn = document.querySelector('.registry')
const cancelBtn = document.querySelector('#cancel')

openBtn.onclick = () => {
    dialog.showModal()
}

////registryBtn.onclick = () => {
////    dialog.close()
//}

cancelBtn.onclick = () => {
    dialog.close()
}


// Функция для ввода цифр
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

btnPrice.addEventListener("click", () => {
    scrollTo(sectionPrice)
})


