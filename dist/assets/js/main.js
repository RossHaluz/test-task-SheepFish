
const onOpenMobileMenu = document.querySelector(".mobile-menu-btn");
const onCloseMobileMenu = document.querySelector('.mobile-menu-btn-close');
const mobileMenu = document.querySelector('.menu-overlay');
const emailForm = document.getElementById('#emailForm');
const formBrn = document.querySelector('.sign-up-desc__form--btn')

onOpenMobileMenu.addEventListener("click", openModal)
onCloseMobileMenu.addEventListener("click", closeModal)
formBrn.addEventListener('click', onSubmitForm);

function onSubmitForm(e){
  e.preventDefault()
}

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

  $(emailForm).validate({
    rules: {
      email: {
        required: 'Emaile is required!',
        email: true
      }
    },

    submitHandler: function(form) {
      // some other code
      // maybe disabling submit button
      // then:
      $(form).submit();
    }
  })