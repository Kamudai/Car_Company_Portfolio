modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('cd-modal')){
    modal.classList.remove("open");
    original.classList.remove("open");
    // background.classList.remove("open");

  }
});



