module.exports = function () {

    const mobileMenuOpen = () => {
        const hamburger = $('.js-hamburger')
        const headerMenu = $('.header-menu')
        $(hamburger).on('click', function () {
          $(this).toggleClass('open')
          if(headerMenu.hasClass('hiding')) {
            $(headerMenu).removeClass('hiding').addClass('open')
          } else {
            $(headerMenu).removeClass('open').addClass('hiding')
          }
        })
        $('.header-menu>li>a').on('click', function () {
          $('.header-menu').removeClass('open').addClass('hiding')
          $(hamburger).removeClass('open')
        })
        
    }
    $(document).ready(() => {
      mobileMenuOpen()
    })
    };