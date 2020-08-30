

// carousel-references

var slideIndex = 1;
//  showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("slides");
   var slide1 = document.getElementById("image1");
   var slide2 = document.getElementById("image2");
   var slide3 = document.getElementById("image3");

   if (n >= slides.length) { slideIndex = 0 }
   if (n < 0) { slideIndex = slides.length - 1 }
   for (i = 0; i < slides.length; i++) {

      if (slideIndex == 1) {
         slide1.src = "img/mobile/ref_" + (slideIndex - 1) + ".png";
         slide2.src = "img/mobile/ref_" + (slideIndex) + ".png";
         slide3.src = "img/mobile/ref_" + (slideIndex + 1) + ".png";
      }
      if (slideIndex == 2) {
         slide1.src = "img/mobile/ref_" + (slideIndex - 1) + ".png";
         slide2.src = "img/mobile/ref_" + (slideIndex) + ".png";
         slide3.src = "img/mobile/ref_" + (slideIndex - 2) + ".png";
      }
      if (slideIndex == 0) {
         slide1.src = "img/mobile/ref_" + (slideIndex + 2) + ".png";
         slide2.src = "img/mobile/ref_" + (slideIndex) + ".png";
         slide3.src = "img/mobile/ref_" + (slideIndex + 1) + ".png";
      }
   }
}

var sponsorIndex = 1
function nextSponsor(n) {

   showSponsors(sponsorIndex += n);

}

function showSponsors(n) {
   var sponsors = document.getElementsByClassName("sponsor");
   var i;
   if (n >= sponsors.length - 1) { sponsorIndex = 1 }
   if (n <= 0) { sponsorIndex = sponsors.length - 2 }
   for (i = 0; i < sponsors.length; i++) {

      sponsors[i].classList.add("hide");

   }
   sponsors[sponsorIndex - 1].classList.remove("hide");
   sponsors[sponsorIndex].classList.remove("hide");
   sponsors[sponsorIndex + 1].classList.remove("hide");
}

