
const onOpenMobileMenu = document.querySelector(".mobile-menu-btn");
const onCloseMobileMenu = document.querySelector('.mobile-menu-btn-close');
const mobileMenu = document.querySelector('.menu-overlay');

onOpenMobileMenu.addEventListener("click", openModal)
onCloseMobileMenu.addEventListener("click", closeModal)

function openModal() {
    onOpenMobileMenu.classList.add('is-open');
    onCloseMobileMenu.classList.remove('is-open')
    mobileMenu.classList.remove('is-open')
    document.body.classList.add('no-scroll')
  }

  function closeModal(){
    onOpenMobileMenu.classList.remove('is-open');
    onCloseMobileMenu.classList.add('is-open')
    mobileMenu.classList.add('is-open')
    document.body.classList.remove('no-scroll')
  }