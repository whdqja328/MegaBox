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


// 레이어 팝업
const layerContainer = document.querySelector('.link_area');
const layerContents = [
    '#layer_sitemap',
    '#layer_search',
    '#layer_mymega'
]

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