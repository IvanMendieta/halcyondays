//click menu icon and open menu accordion
document.getElementById('my-Menu').addEventListener('click', () => {

  //grab the accordion element
  var accordion = document.querySelector('.menu-icon__accordion-menu');

  //validate if the accordion exist add class visible else removed
  if( accordion.classList.contains('menu-icon--visible') ){
      accordion.classList.remove('menu-icon--visible');
  }else{
      accordion.classList.add('menu-icon--visible');
  }

});
