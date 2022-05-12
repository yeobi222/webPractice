var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function changeDN(self) {
  if(self.value === '2night'){
    var textColor = "white"
    Body.setColor(textColor)
    Body.setBackColor("black")
    changeStyle('list', textColor);
    changeStyle('top', textColor);
    changeStyle('daynight', textColor);
    document.getElementById('daynight').style.color = textColor;
    document.getElementById('daynight').style.backgroundColor = "black";
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i<links.length){
      links[i].style.color='skyblue';
      i = i + 1;
    }
    self.value = '2day';
  } else {
    var textColor = 'black'
    Body.setColor(textColor)
    Body.setBackColor("white")
    changeStyle('list', textColor);
    changeStyle('top', textColor);
    changeStyle('daynight', textColor);
    document.getElementById('daynight').style.color = textColor;
    document.getElementById('daynight').style.backgroundColor = "white";
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i<links.length){
      links[i].style.color='blue';
      i = i + 1;
    }
    self.value = '2night'
  }
}
function changeStyle(idnm, tc){
  var element = document.getElementById(idnm);
  element.style.borderColor = tc;
}
