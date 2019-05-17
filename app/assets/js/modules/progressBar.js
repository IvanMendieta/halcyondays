// When the user scrolls the page, execute myFunction
window.onscroll = function(){
  //calling the showScrollBtn() the scroll button when user scrolls;
  showScrollBtn();

  //onscroll show  progress bar process
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  //show and hide progress bar on scroll
  // grab the element
  var myprogress = document.getElementById('myprogress');
  //validate of scroll is grater than 0 add change style to opacity, show progress bar else removed
  if( scrolled > 0 ){
    // console.log(scrolled);
    myprogress.classList.add('change');
  }else{
    myprogress.classList.remove('change');
  }


};

// create the scroll button function if user scrolls 20px show button else hide
function showScrollBtn(){

  if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
    document.getElementById('scroll-Btn').style.opacity = '1';
  }else{
    document.getElementById('scroll-Btn').style.opacity = '0';
  }

};
