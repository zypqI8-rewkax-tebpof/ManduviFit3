let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".food-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
   previewContainer.style.display = 'none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};

var swiper = new Swiper(".menu-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

var swiper = new Swiper(".blogs-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoHeight:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

document.addEventListener('DOMContentLoaded', function() {
   const textarea = document.getElementById('direccion');
   const charCount = document.getElementById('char-count');
   const selectElement = document.getElementById('producto-select'); 
   const priceInput = document.getElementById('precio-producto'); 
 
   selectElement.addEventListener('change', function() { 
     const selectedOption = selectElement.options[selectElement.selectedIndex]; 
     const price = selectedOption.getAttribute('data-price'); 
     priceInput.value = price; 
   }); 
   const initialOption = selectElement.options[selectElement.selectedIndex]; 
   const initialPrice = initialOption.getAttribute('data-price'); 
   priceInput.value = initialPrice; 
 
   textarea.addEventListener('input', function() { 
     charCount.textContent = textarea.value.length; 
   }); 
 });
 
 function handleSubmit(event) {
   event.preventDefault();
   const nombre = document.forms["contact-form"]["nombre"].value;
   const apellido = document.forms["contact-form"]["apellido"].value;
   const correo = document.forms["contact-form"]["correo"].value;
   const celular = document.forms["contact-form"]["celular"].value;
   const producto = document.forms["contact-form"]["producto"].value;
   const direccion = document.forms["contact-form"]["direccion"].value;
 
   if (nombre && apellido && correo && celular && producto && direccion) {
     const mensaje = `Hola!\nMi nombre es ${nombre} ${apellido}.\nQuisiera ordenar ${producto}.\nMi correo es ${correo}.\nMi número de celular es ${celular}.\nLa dirección de entrega es: ${direccion}.`;
     const url = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${encodeURIComponent(mensaje)}`;
     window.open(url, '_blank');
     showModal('modal-success');
     clearForm();
   } else {
     showModal('modal-error');
   }
 }
 
 function clearForm() {
   document.forms["contact-form"].reset();
   document.getElementById('char-count').textContent = "0";
   document.getElementById('precio-producto').value = "";
 }
 
 function showModal(modalId) {
   document.getElementById(modalId).style.display = 'block';
 }
 
 function closeModal(modalId) {
   document.getElementById(modalId).style.display = 'none';
 }
 
 // Cerrar el modal cuando el usuario hace clic fuera del contenido del modal
 window.onclick = function(event) {
   if (event.target.classList.contains('modal')) {
     event.target.style.display = 'none';
   }
 }
 