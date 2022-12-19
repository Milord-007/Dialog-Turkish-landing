
 const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click',showHideBlock)

function showHideBlock(event) {
    const contentShowHide = document.querySelector(".nav-bar");
    
    contentShowHide.classList.toggle("heddin")
  
}

// Modal
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const button =document.querySelector('#button');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active')
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})
button.addEventListener('click',(empty)=>{
    empty.preventDefault()
popUp.classList.remove('active')
})


// video
window.addEventListener('DOMContentLoaded', function() {
    let video = document.querySelector('.video');
    let icon = document.querySelector('.Vector')

    video.addEventListener('click', function(){
        if(video.classList.contains('ready')){
            return;
        }
        video.classList.add('ready');
        video.insertAdjacentHTML('afterbegin','<iframe  src="https://www.youtube.com/embed/tg8n22tTh_g?autoplay=1" title="YouTube video player" frameborder="5px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    })
    
  })
 
    


// ================slifer==============
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function isSendButtonDisabled() { 
    const nameField = document.getElementById('name_field').value; 
     const phoneNumberField = document.getElementById('phone_number_field').value; 
   
     return nameField && phoneNumberField; 
  } 
// slider 2
  // const swiper = new Swiper(".mySwiper", {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //       slidesPerGroup: 3,
  //       loop: true,
  //       loopFillGroupWithBlank: true,
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true,
  //       },
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //       },
  //     });
//   function isSendButtonDisabled() { 
//     const nameField = document.getElementById('name_field').value; 
//     const phoneNumberField = document.getElementById('phone_number_field').value; 
 
//     return nameField && phoneNumberField; 
// } 
 
// function modalHandler() { 
//     const openPopUp = document.getElementById('open_pop_up'); 
//     const closePopUp = document.getElementById('pop_up_close'); 
//     const popUp = document.getElementById('pop_up'); 
//     const sendButton = document.getElementById('send_button'); 
//     const form = document.querySelector('form'); 
 
//     openPopUp.addEventListener('click', function(e) { 
//         e.preventDefault(); 
//         popUp.classList.add('active') 
//     }) 
 
//     form.addEventListener('input', () => { 
//         if (!isSendButtonDisabled()) { 
//             sendButton.disabled = false; 
//             sendButton.classList.remove('btn_disabled'); 
//         } 
//     }) 
 
//     closePopUp.addEventListener('click', () => { 
//         popUp.classList.remove('active'); 
//         sendButton.disabled = true; 
//         sendButton.classList.add('btn_disabled') 
//     }) 
 
//     sendButton.addEventListener('click',(empty)=>{ 
//         empty.preventDefault() 
//         popUp.classList.remove('active') 
//     }) 
// } 
 
// function menuToggleHandler() { 
//     const hamburger = document.querySelector(".hamburger"); 
 
//     hamburger.addEventListener('click',showHideBlock) 
     
//     function showHideBlock() { 
//         const contentShowHide = document.querySelector(".nav-bar"); 
     
//         const displayStyle = getComputedStyle(contentShowHide).display; 
     
//         if (displayStyle === "none") { 
//             contentShowHide.style.display = "block"; 
//         } else { 
//             contentShowHide.style.display = "none"; 
//         } 
//     } 
// } 
 
// function showVideo() { 
//     window.addEventListener('DOMContentLoaded', function() { 
//         var video = document.querySelector('.video'); 
     
//         video.addEventListener('click', function(){ 
//             if(video.classList.contains('ready')){ 
//                 return; 
//             } 
//             video.classList.add('ready'); 
//             video.insertAdjacentHTML('afterbegin','<iframe  src="https://www.youtube.com/embed/tg8n22tTh_g?autoplay=1" title="YouTube video player" frameborder="5px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>') 
//         }) 
//     })     
// } 
 
// showVideo(); 
// menuToggleHandler(); 
// modalHandler();