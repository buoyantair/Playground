function showdown(button){
  var intro = button.parentNode;
  var shophead = document.getElementById('scroller-shophead');
  shophead.classList.toggle('scroller-shophead-scrolled');
  intro.classList.toggle('intro-scrolled');
  document.body.style.overflowY = "scroll";
  document.getElementById('catalog').style.display = "flex";
  button.remove();
};
