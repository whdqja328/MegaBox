// // gnb
// let store = $(".gnb_store").parent();
// let menu = $("#gnb>ul>li").not(store);

// menu.hover(function () {
//     $(this).toggleClass("on")
//     $("#gnb").toggleClass("on")
// });

// let siteBtn = $(".btn_sitemap"),
//     searchBtn = $(".btn_search"),
//     mymegaBtn = $(".btn_mymega");

// // layer_sitemap
// siteBtn.click(function (e) {
//     e.preventDefault();
//     $(this).toggleClass("on")
//     $("#layer_sitemap").toggle();
//     $("#layer_search").css("display", "none");
//     $("#layer_mymega").css("display", "none");
//     searchBtn.removeClass("on")
//     mymegaBtn.removeClass("on")
// });

// // layer_search
// searchBtn.click(function (e) {
//     e.preventDefault();
//     $(this).toggleClass("on");
//     $("#layer_search").toggle();
//     $("#layer_sitemap").css("display", "none");
//     $("#layer_mymega").css("display", "none");
//     siteBtn.removeClass("on");
//     mymegaBtn.removeClass("on");
// });
// // layer_mymega
// mymegaBtn.click(function (e) {
//     e.preventDefault();
//     $(this).toggleClass("on");
//     $("#layer_mymega").toggle();
//     $("#layer_sitemap").css("display", "none");
//     $("#layer_search").css("display", "none");
//     siteBtn.removeClass("on");
//     searchBtn.removeClass("on");
// });

// //탭 메뉴
// let tabMenu = $(".tab_rank>ul>li")
// let tabCont = $(".rank_cont>.list>ul");

// tabCont.hide().eq(0).show();

// tabMenu.click(function (e) {
//     e.preventDefault();
//     let target = $(this);
//     let index = target.index();

//     tabMenu.removeClass("on");
//     target.addClass("on");
//     tabCont.css("display", "none");
//     tabCont.eq(index).css("display", "block");

//     if (tabMenu.eq(1).hasClass("on")) {
//         $(".img > img").attr("src", "assets/img/qDLdOQKdvIeLyniUM7DX567IaJeyJmbv_420.jpg");
//     } else {
//         $(".img > img").attr("src", "assets/img/aR0TeTKH61QBpOgvYEpPCyFs3im2ivR0_420.jpg");
//     }
// });

// //이미지 슬라이드
// $(function () {
//     const swiper = new Swiper('.swiper-container', {

//         direction: 'horizontal',
//         loop: false,
//         effect: 'fade',

//         autoplay: {
//             delay: 3000,
//         },

//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'fraction',
//         },
//         // And if we need scrollbar
//         scrollbar: {
//             el: '.swiper-scrollbar',
//         },
//     });

//     //이미지 슬라이드 재생,정지
//     $(".slider-play").click(function (e) {
//         e.preventDefault();
//         swiper.autoplay.start();
//         $(".slider-pause").addClass("on");
//         $(this).removeClass("on");
//     })

//     $(".slider-pause").click(function (e) {
//         e.preventDefault();
//         swiper.autoplay.stop();
//         $(".slider-play").addClass("on");
//         $(this).removeClass("on");

//     });
// });

// // footer layer
// let footerClose = $(".footer_btn"),
//     theaterFind = $(".footer_top>.wrap>a"),
//     layerTheater = $(".layer_theater");

// theaterFind.click(function (e) {
//     e.preventDefault();
//     layerTheater.addClass("on");
// });

// footerClose.click(function (e) {
//     e.preventDefault();
//     layerTheater.removeClass("on");
// });

// JS GNB
let navGnb = document.getElementById('gnb');
let gnbDepth = document.querySelectorAll('.gnb_depth1>li');
let depthCont = document.querySelectorAll('.gnb_depth2');
let gnbMenu = Array.prototype.slice.call(gnbDepth);
gnbMenu.splice(4,1);

for(let i = 0; i < gnbMenu.length; i++){
    gnbMenu[i].addEventListener('mouseenter',function(e){
        e.target.classList.add('on');
        navGnb.classList.add('on');
    });

    gnbMenu[i].addEventListener('mouseleave',function(e){
        e.target.classList.remove('on');
        navGnb.classList.remove('on');
    });
};