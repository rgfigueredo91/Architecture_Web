/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/

let slideIndex = 1;
                showSlides(slideIndex);

                function plusSlides(n) {
                showSlides(slideIndex += n);
                }

                function showSlides(n) {
                let i;
             
                let slides = document.getElementsByClassName("comments");
                if (n > slides.length) {slideIndex = 1}    
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.opacity = "0"; 
               

                }
          
                slides[slideIndex-1].style.opacity = "1";  
                slides[slideIndex-1].style.transition = "ease-in-out 0.7s";
          
 
                }



