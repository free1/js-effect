window.onload = function(){
  oTurnRight = document.getElementById('turn_right');
  oTurnLeft = document.getElementById('turn_left');
  oBookLeft = document.getElementById('book_left');
  oBookRight = document.getElementById('book_right');
  oBookLast = document.getElementById('book_last');

  oTurnLeft.onclick = function(){
    if (oBookLeft.style.width != '0%')
    {
      leftTimer = setInterval(turnLeftPage, 1);
    }
  };
  function turnLeftPage(){
    oBookLeft.style.width = (parseInt(oBookLeft.style.width)-1)+'%';
    oBookLeft.style.left = (parseInt(oBookLeft.style.left)+1)+'%';
    if (oBookLeft.style.width == '0%')
    {
      clearInterval(leftTimer);
      rightTimer = setInterval(turnRightPage, 10);
    };
  }
  function turnRightPage(){
    oBookLast.style.zIndex = 1000;
    oBookLast.style.width = (parseInt(oBookLast.style.width)+10)+'%';
    if (oBookLast.style.width == '420%')
    {
      clearInterval(rightTimer);
    };
  }
  oTurnRight.onclick = function(){
    alert('');
  };
};