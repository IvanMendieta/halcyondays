var scroll = new SmoothScroll('a[href*="#"]');
function smoothScroll(e){
  e.preventDefault();

};
document.getElementById('scroll-Btn').addEventListener('click', smoothScroll);
