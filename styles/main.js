$(document).ready(function(){
    
    
    $('.cd-posts-container').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
      })
      // $('.contact').isotope({
      //   itemSelector: '.grid-con',
      //   percentPosition: true,
      //   masonry: {
      //     // use outer width of grid-sizer for columnWidth
      //     columnWidth: 1
      //   }
      // })
      

      
      
      // Menu toggle 
      $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})


const modal = document.querySelector(".cd-modal");
const previews = document.querySelectorAll(".cd-post img");
const original = document.querySelector(".full-img");
// const background = document.querySelector(".cd-full-bg");
// const text = document.querySelector("")

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        // background.classList.add("open");

        const originalSrc = preview.getAttribute("data-original")
        original.src = `./img/${originalSrc}`;
        // const altText = preview.alt;
        // caption.textContent = altText;
    });
});



