;(function(){
    if (window.matchMedia('(max-width:992)').matches){
        return;
    }




    var headerPage = document.querySelector('.header__page')

    window.addEventListener('scroll', function(){
          if (window.pageYOffset > 0){
              headerPage.classList.add('si-active');
          } else{
              headerPage.classList.remove('is-active');
          }
    });

})();