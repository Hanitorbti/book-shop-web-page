//-------------------sliders-scroler

setInterval(()=>{
    pageX = document.body.offsetWidth;
    console.log(pageX)
    if(pageX <= 1059){
        mainSerachBox = document.querySelector('.search-box')
        miniSearchBox = document.querySelector('.mini-serach')
        mainSerachBox.classList.add('hide')
        miniSearchBox.classList.remove('hide')
    }
    else{
        mainSerachBox.classList.remove('hide')
        miniSearchBox.classList.add('hide')
    }
},100)


function scroler(slider){
    let mouseDown = false;
    let startX, scrollLeft;

    const startDragging = (e) => {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };
    
    const stopDragging = (e) => {
        mouseDown = false;
    };
    
    const move = (e) => {
        e.preventDefault();
        if(!mouseDown) { return; }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
    };

    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
}


const slider1 = document.querySelector('.items-container');
const slider2 = document.querySelector('.top-writers-container');
const slider3 = document.querySelectorAll('.all-cat-box-box-books-items-container')
scroler(slider1);
scroler(slider2);
scroler(slider3[0]);
scroler(slider3[1]);
scroler(slider3[2]);



//-------------------offer-hover-custom

let OfferImg = document.querySelectorAll('.offer .items-container div .pi');
let offerTitle = document.querySelectorAll('.offer .items-container div .pn');

for (let index = 0; index < OfferImg.length; index++) {
  OfferImg[index].addEventListener('mouseenter', () => {
    OfferImg[index].style.height = '67%';
    OfferImg[index].style.margin = '5px 43px 0 43px';
    offerTitle[index].style.color = '#756026';
    
  }
  )
};

for (let index = 0; index < OfferImg.length; index++) {
  OfferImg[index].addEventListener('mouseleave', () => {
    OfferImg[index].style.height = '70%'  
    OfferImg[index].style.margin = '0 40px';
    offerTitle[index].style.color = 'var(--dark)';
  
  })
};


//-------------------all-caegories-hover-show

let catt = document.querySelector('.desktop .categories #all-categories');
let allcat = document.querySelector('.desktop .categories #all-categories .allcat');

catt.addEventListener(('mouseenter'), () => {
    allcat.classList.remove('hide')

})

catt.addEventListener(('mouseleave'), () => {
    allcat.classList.add('hide')

})

//-------------------two-top-buybutton-animation

ttl = document.querySelectorAll('.desktop .two-top .left');
readMore = document.querySelectorAll('.read-more');

function twoTopBuybuttonAnimation (num){
    ttl[num].addEventListener('mouseenter',() => {
        readMore[num].style.transition = 'all 1s';
        readMore[num].style.marginRight = `${ttl[num].clientWidth / 2 - readMore[num].clientWidth}px`;
    })    
    
    ttl[num].addEventListener('mouseleave',() => {
        readMore[num].style.transition = 'all 1s';
        readMore[num].style.marginRight = '40px';

    })
    
    readMore[num].addEventListener('mouseenter',() => {
        readMore[num].style.transition = 'all .2s';
        readMore[num].style.marginTop = '0';
    })
    readMore[num].addEventListener('mouseleave',() => {
        readMore[num].style.transition = 'all .2s';
        readMore[num].style.marginTop = '15px';
    })
    
}

twoTopBuybuttonAnimation(0)
twoTopBuybuttonAnimation(1)
