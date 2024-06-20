const burgerButton = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
firstButton = document.querySelector('.first__button')
firstTextContainer = document.querySelector('.first__text-container')
firstImgContiner = document.querySelector('.first__img-container')
const buttonSh = document.createElement('button')

let done = false;
buttonSh.innerHTML = 'Записаться на курс'
buttonSh.classList.add('first__button')

const swp = document.querySelector('.buy__swiper')



const mySwiper = new Swiper('.buy__swiper', {
    slidesPerView : 1.5,
    spaceBetween : 20,
    speed: 600,
    autoplay: {
        delay : 1000,
    },
    navigation: {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },
    pagination:{
        el:'.swiper-pagination',
        type:'progressbar'
    },
    // autoplay : {
    //     delay:1000
    // },
    mousewheel : {
        swnsitivity:1,
    },                                                                  
    loop : true,
    breakpoints: {
        480: {
            spaceBetween : 40,
            slidesPerView : 2,
        },
        700: {
          slidesPerView: 3,
        },
      }
  });




burgerButton.onclick = () =>{
    menu.classList.toggle('active')
    burgerButton.classList.toggle('active')
}





start = () => {
    if (Number(window.innerWidth) > 700){
        firstTextContainer.appendChild(buttonSh)
    }
    else{
        firstImgContiner.appendChild(buttonSh)
        done = true;
    }
    if (Number(document.documentElement.clientWidth) <= 480){
        swp.style.maxWidth = String(document.documentElement.clientWidth) + 'px';
    }
    else{
        swp.style.maxWidth = '100%'    
    }
}
swap = () => {
    firstTextContainer.removeChild(buttonSh)
    firstImgContiner.appendChild(buttonSh)
}
unswap = () =>{
    firstImgContiner.removeChild(buttonSh)
    firstTextContainer.appendChild(buttonSh)

}

start()

window.addEventListener('resize', function(){
    if (!done){
        if ( Number(window.innerWidth) <= 700){
            swap()
            done = true;
        }
    }
    else{
        if ( Number(window.innerWidth) >= 700){
            unswap()
            done = false;
        }
    }
    if (Number(document.documentElement.clientWidth) <= 480){
        swp.style.maxWidth = String(document.documentElement.clientWidth) + 'px';
    }
    else{
        swp.style.maxWidth = '100%';
    }
})




const myPopup = document.querySelector('.popup')
const links = document.querySelectorAll('.slide-a')
const popupClose = document.querySelector('.popup__close')
const popupButtonClose = document.querySelector('.button__close')
const choiceText = document.querySelector('.popup__choice-container')
const popupLinks = document.querySelector('.popup__links')
const copyEls = (el) => {
    let myParent = el.parentElement;
    let link = myParent.querySelector('.slide-image').src;
    let title = myParent.querySelector('.slide-title').textContent;
    let profession = myParent.querySelector('.slide-text').textContent;
    return [link, title , profession]
}

links.forEach( (el) => {
    el.addEventListener('click', () => {
        values = copyEls(el)
        popupImage.src = values[0];
        popupName.textContent = values[1];
        popupProfession.textContent = values[2];
        myPopup.classList.add('open')
        myPopup.addEventListener('click' , (el) => {
            if (!el.target.closest('.popup__wrapper')){
                myPopup.classList.remove('open')
                document.body.style.overflowY = 'visible'
            }
        })
        document.body.style.overflowY = 'hidden';
    })
} )
const popupMenuCloseFunction = () =>{
    popupLinks.classList.toggle('choice__active')
    popupArrow.classList.toggle('active')
}
const popupCloseFunction = () =>{
    myPopup.classList.remove('open')
    document.body.style.overflowY = 'visible'    
}



popupButtonClose.addEventListener('click' , () => {
    popupCloseFunction()
})

popupClose.addEventListener('click', () => {
    popupCloseFunction()
})

choiceText.addEventListener('click' , () => {
    popupMenuCloseFunction();
})
popupLinks.onclick = (el) => {
    popupMainChoice.textContent = el.target.textContent;
    popupMenuCloseFunction();
}