'use strict';

// Nav
const gnbContents = [
    '.gnb_movie',
    '.gnb_reserve',
    '.gnb_theater',
    '.gnb_event',
    '.gnb_benefit',
];
const gnbDepth = document.querySelector('.gnb_depth1');
const nav = document.querySelector('nav');
const gnbList = gnbContents.map(id => document.querySelector(id));

gnbList.forEach(menu => {
    menu.addEventListener('mouseenter', () => {
        nav.classList.add('on')
    });

    gnbDepth.addEventListener('mouseleave', () => {
        nav.classList.remove('on')
    });

});


// 상단 레이어
const layerContainer = document.querySelector('.link_area');
const layerContents = [
    '#layer_sitemap',
    '#layer_search',
    '#layer_mymega',
];

const layerPopUp = layerContents.map(id => document.querySelector(id));

layerContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;

    if (filter == null) {
        return;
    }

    const active = document.querySelector('.link_area>a.on');
    if (active != null) {
        active.classList.remove('on')
    }
    e.target.classList.add('on')

    layerPopUp.forEach(layer => {
        if (filter === layer.dataset.type) {
            layer.classList.toggle('on')
        } else {
            layer.classList.remove('on')
            if (active) {
                active.classList.remove('on')
            }
        }
    });
});

// 예매율,관객순 탭
const rankBtnContainer = document.querySelector('.tab_rank ul');
const rankContents = ['#rate','#audience'];
const rankList = rankContents.map(id => document.querySelector(id))

rankBtnContainer.addEventListener('click',(e)=>{
    const type = e.target.dataset.value;
    
    if(type == null){
        return;
    }
    
    const active = document.querySelector('.tab_rank li.on');
    if (active != null) {
        active.classList.remove('on')
    }
    e.target.parentNode.classList.add('on')

    rankList.forEach(layer => {
        if (type === layer.dataset.type) {
            layer.classList.add('on')
        } else {
            layer.classList.remove('on')
        }
    });

})

// Slider
document.addEventListener("DOMContentLoaded", function () {
  // 변수 지정
  const slideWrap = document.querySelector(".slide_wrap"),
    slideContainer = document.querySelector(".slide_container"),
    slides = document.querySelectorAll(".slide"),
    pagerBtn = document.querySelectorAll(".pager span");

  let slideCount = slides.length,
    currentIndex = 0,
    timer = null;

  // 슬라이드 가로로 배열하기
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 100 + "%";
  }

  // 슬라이드 이동함수
  function goToSlide(idx) {
    slideContainer.classList.add("animate");
    slideContainer.style.left = -100 * idx + "%";
    currentIndex = idx;

    for (let y = 0; y < pagerBtn.length; y++) {
      pagerBtn[y].classList.remove("on");
    }
    pagerBtn[idx].classList.add("on");

    for (let s = 0; s < slideCount; s++) {
      slides[s].classList.remove("fade_in");
    }
    slides[idx].classList.add("fade_in");
  }

  goToSlide(0);

  //자동 슬라이드 함수
  function startAutoSlide() {
    timer = setInterval(function () {
      let nextIdx = (currentIndex + 1) % slideCount;

      goToSlide(nextIdx);
    }, 4500);
  }

  startAutoSlide();

  // 슬라이드 정지 함수
  function stopAutoSlide() {
    clearInterval(timer);
  }

  //pager로 슬라이드 이동하기
  
});

















// 푸터 레이어 극장찾기
const theater = document.querySelector('#layer_theater')
const layerFooterBtn = document.querySelector('.footer_top .wrap>button')
const footerClose = document.querySelector('.footer_btn')

const layerBtnHandler = (val)=>()=>{
    val.classList.toggle('on')
}

layerFooterBtn.addEventListener('click',layerBtnHandler(theater));
footerClose.addEventListener('click',layerBtnHandler(theater));