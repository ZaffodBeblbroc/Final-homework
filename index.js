let num = 3;

function changeItem1() {
  document.getElementById('block-one').style.zIndex = num;
}
function rechangeItem1() {
  document.getElementById('block-one').style.zIndex = 0;
}
document.getElementById('one').onclick=function() {changeItem1(), rechangeItem2(), rechangeItem3(), rechangeItem4(), rechangeItem5(), rechangeItem6(), rechangeItem7(), rechangeItem8() };


function changeItem2() {
  document.getElementById('block-two').style.zIndex = num;
}
function rechangeItem2() {
  document.getElementById('block-two').style.zIndex = 0;
}
document.getElementById('two').onclick=function() {changeItem2(), rechangeItem1(), rechangeItem3(), rechangeItem4(), rechangeItem5(), rechangeItem6(), rechangeItem7(), rechangeItem8()};


function changeItem3() {
  document.getElementById('block-three').style.zIndex = num;
}
function rechangeItem3() {
  document.getElementById('block-three').style.zIndex = 0;
}
document.getElementById('three').onclick=function() {changeItem3(), rechangeItem2(), rechangeItem1(), rechangeItem4(), rechangeItem5(), rechangeItem6(), rechangeItem7(), rechangeItem8()};


function changeItem4() {
  document.getElementById('block-four').style.zIndex = num;
}
function rechangeItem4() {
  document.getElementById('block-four').style.zIndex = 0;
}
document.getElementById('four').onclick=function() {changeItem4(), rechangeItem2(), rechangeItem3(), rechangeItem1(), rechangeItem5(), rechangeItem6(), rechangeItem7(), rechangeItem8()};


function changeItem5() {
  document.getElementById('block-five').style.zIndex = num;
}
function rechangeItem5() {
  document.getElementById('block-five').style.zIndex = 0;
}
document.getElementById('five').onclick=function() {changeItem5(), rechangeItem2(), rechangeItem3(), rechangeItem4(), rechangeItem1(), rechangeItem6(), rechangeItem7(), rechangeItem8()};


function changeItem6() {
  document.getElementById('block-six').style.zIndex = num;
}
function rechangeItem6() {
  document.getElementById('block-six').style.zIndex = 0;
}
document.getElementById('six').onclick=function() {changeItem6(), rechangeItem2(), rechangeItem3(), rechangeItem4(), rechangeItem5(), rechangeItem1(), rechangeItem7(), rechangeItem8()};


function changeItem7() {
  document.getElementById('block-seven').style.zIndex = num;
}
function rechangeItem7() {
  document.getElementById('block-seven').style.zIndex = 0;
}
document.getElementById('seven').onclick=function() {changeItem7(), rechangeItem2(), rechangeItem3(), rechangeItem4(), rechangeItem5(), rechangeItem6(), rechangeItem1(), rechangeItem8()};


function changeItem8() {
  document.getElementById('block-eight').style.zIndex = num;
}
function rechangeItem8() {
  document.getElementById('block-eight').style.zIndex = 0;
}
document.getElementById('eight').onclick=function() {changeItem8(), rechangeItem2(), rechangeItem3(), rechangeItem4(), rechangeItem5(), rechangeItem6(), rechangeItem7(), rechangeItem1()};