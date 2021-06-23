'use strict';
// 헤더 광고영역
const adClose = document.querySelector('.btn_close')

adClose.addEventListener('click', () => {
  document.querySelector('.header_ad').style.display = "none";
  document.querySelector('#main_section01').classList.add('close')
  document.querySelector('#header').classList.add('close')
})


// 이벤트 팝업 쿠키
const noticePopUp = document.querySelector('.main_notice_popup');
const checkbox = document.querySelector('#shut');
const popupClose = document.querySelector('.btn_notice');

// 쿠키생성
const setCookie = (name, value, day) => {
  let date = new Date();
  date.setDate(date.getDate() + day)

  let myCookie = '';
  myCookie += name + '=' + value + ';';
  myCookie += 'Expires=' + date.toUTCString();

  document.cookie = myCookie;
}
// setCookie('popup', 'Main', 1)

// 쿠키삭제
const delCookie = (name) => {
  let date = new Date();
  date.setDate(date.getDate() - 1)

  let setCookie = '';

  setCookie += name + '=Main;';
  setCookie += 'Expires=' + date.toUTCString();

  document.cookie = setCookie;
}

// 쿠키확인
const checkCookie = (name) => {
  let cookies = document.cookie.split(';');
  let visited = false;

  for (let i in cookies) {
    if (cookies[i].indexOf(name) > -1) {
      visited = true;
    }
  }
  
  if (visited) {
    // 재방문
    noticePopUp.style.display = 'none';
  } else {
    // 신규방문
    noticePopUp.style.display = 'block';
  }
  
}
checkCookie('popup');

popupClose.addEventListener('click',()=>{
  if(checkbox.checked){
    // 팝업을 다시 안본다. 팝업 닫고, 쿠키생성
    setCookie('popup', 'Main', 1)
    noticePopUp.style.display = 'none';
  }else {
    // 팝업을 계속본다. 팝업 닫고, 쿠키 삭제
    noticePopUp.style.display = 'none';
    delCookie('popup');
  }
})


// 네비게이션 메뉴
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


// 레이어 팝업
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
const rankContents = ['#rate', '#audience'];
const rankList = rankContents.map(id => document.querySelector(id))

rankBtnContainer.addEventListener('click', (e) => {
  const type = e.target.dataset.value;

  if (type == null) {
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

// 슬라이더
document.addEventListener("DOMContentLoaded", function () {

  const slideWrap = document.querySelector(".slide_wrap");
  const slideContainer = document.querySelector(".slide_container");
  const slides = document.querySelectorAll(".slide");
  const pagers = document.querySelectorAll(".pager span");
  const prev = document.querySelector('.slider_util .prev');
  const next = document.querySelector('.slider_util .next');
  const pause = document.querySelector('.slider_util .pause');
  const play = document.querySelector('.slider_util .play');
  const pageCount = document.querySelector('.slider_count')

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
    pageCount.textContent = `${currentIndex + 1} / ${slideCount}`;

    for (let y = 0; y < pagers.length; y++) {
      pagers[y].classList.remove("on");
    }
    pagers[idx].classList.add("on");

    for (let s = 0; s < slideCount; s++) {
      slides[s].classList.remove("fade_in");
    }
    slides[idx].classList.add("fade_in");

    // 슬라이드 pager
    const pagerUpdate = () => {
      if (currentIndex == 0) {
        prev.classList.add('off')
      } else {
        prev.classList.remove('off')
      }

      if (currentIndex == slideCount - 1) {
        next.classList.add('off')
      } else {
        next.classList.remove('off')
      }
    }

    pagerUpdate();
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


  //pager 슬라이드 이동
  prev.addEventListener('click', () => {
    goToSlide(currentIndex - 1)
  })

  next.addEventListener('click', () => {
    goToSlide(currentIndex + 1)
  })

  pause.addEventListener('click', () => {
    stopAutoSlide();
    play.classList.add('on');
    pause.classList.add('on');
  });
  play.addEventListener('click', () => {
    startAutoSlide();
    pause.classList.remove('on');
    play.classList.remove('on');
  });

});

// 푸터 레이어
const theater = document.querySelector('#layer_theater')
const layerFooterBtn = document.querySelector('.footer_top .wrap>button')
const footerClose = document.querySelector('.footer_btn')

const layerBtnHandler = (val) => () => {
  val.classList.toggle('on')
}

layerFooterBtn.addEventListener('click', layerBtnHandler(theater));
footerClose.addEventListener('click', layerBtnHandler(theater));