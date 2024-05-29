'use strict';

const btn = document.getElementById('omikuji');

btn.addEventListener('click',function(){
    const reslut =['大吉 ','中吉','小吉','吉','凶','大凶','強','狂','恐','教','協','今日','鏡','香','叫','kyou','京','亨'];
    const number = Math.floor(Math.random()*reslut.length);
    btn.textContent = reslut[number];
})
