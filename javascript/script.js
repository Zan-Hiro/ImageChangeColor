function changeColor(event) {

  //remove active class first
  document.querySelectorAll('span.active').forEach((item)=> {
    item.classList.remove('active');
  })

  //add active class
  event.target.classList.add('active');
}