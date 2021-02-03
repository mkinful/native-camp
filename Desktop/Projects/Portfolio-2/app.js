/*menu reveal*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1100,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 110}); 
sr.reveal('.home__img',{delay: 1000}); 
sr.reveal('.home__social-icon',{ interval: 120}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 120}); 
sr.reveal('.about__text',{delay: 150}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 120}); 
sr.reveal('.skills__img',{delay: 180});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 90}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__form',{interval: 80}); 

/*CONTACT*/

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBubVJg-ZHBMKWqzcsZuXlUhZI33D8iods",
  authDomain: "form-submit-a6083.firebaseapp.com",
  projectId: "form-submit-a6083",
  storageBucket: "form-submit-a6083.appspot.com",
  messagingSenderId: "454612748461",
  appId: "1:454612748461:web:8e1d41e216715886511e24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Contact Info Collections
let contactInfo = firebase.database().ref('infos');


// listen for submit
  document.querySelector('.contact__form').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;
    console.log(name, email, message);

    saveContactInfo(name, email, message);

    document.querySelector('.contact__form').reset();
  }

  function saveContactInfo(name, email, message) {
      let newContactInfo = contactInfo.push();

      newContactInfo.set({
        name: name,
        email: email,
        message: message,
      })
  }
  