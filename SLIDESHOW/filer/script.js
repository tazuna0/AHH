let slideIndex = 0;
showSlides(slideIndex);

// Manuell.


// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
//     slides[slideIndex-1].className += " active";
//   }

// Automatisk

function showSlides() {
   let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
  }