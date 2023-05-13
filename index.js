// let num = 3;

// function changeItem() {
//   document.getElementById('block').style.zIndex = num + 1;
// }

// function rechangeItem() {
//   document.getElementById('block').style.zIndex = 0;
// }

// document.getElementById('one').onmouseover=function() {changeItem()};
// document.getElementById('one').onmouseout=function() {rechangeItem()};



// function changeItem2() {
//   document.getElementById('blockQWE').style.zIndex = num +1 ;
// }

// function rechangeItem2() {
//   document.getElementById('blockQWE').style.zIndex = 0;
// }

// document.getElementById('two').onmouseover=function() {changeItem2()};
// document.getElementById('two').onmouseout=function() {rechangeItem2()};



// function changeItem3() {
//   document.getElementById('blockASD').style.zIndex = num + 1;
// }

// function rechangeItem3() {
//   document.getElementById('blockASD').style.zIndex = 0;
// }

// document.getElementById('three').onmouseover=function() {changeItem3()};
// document.getElementById('three').onmouseout=function() {rechangeItem3()};






let num = 3;

function changeItem() {
  document.getElementById('block').style.zIndex = num;
  num = num + 1;
}

document.getElementById('one').onclick=function() {changeItem()};


function changeItem2() {
  document.getElementById('blockQWE').style.zIndex = num;
  num = num + 1;
}

document.getElementById('two').onclick=function() {changeItem2()};




// function changeItem3() {
//   document.getElementById('blockASD').style.zIndex = num;
// }

// document.getElementById('three').onclick=function() {changeItem3()};
