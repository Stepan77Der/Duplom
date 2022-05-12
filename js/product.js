; (function(){
    var catalog = document.querySelector('.catalog');

    if  (catalog === null) {
        return;
    }

    var changeProductSize = function(target) {
        var product = myLib.closesItemByClass(target, 'product');
        var previousBtnActive = product.querySelector('.product_size.is-active');

        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');
    };

        var changeProductOrderInfo = function(target) {
        var product = myLib.closesItemByClass(target, 'product');
        var order = document.querySelector('.popup__order');

        var productTitle = product.querySelector('.product__title').textContent;
        var productSize = product.querySelector('.product_size.is-active').textContent;
        var productPrice = product.querySelector('.product__price-value').textContent;
        var productImgSrc = product.querySelector('.product__img').getAttribute('src');
 

        order.querySelector('.order__info-title').setAttribute('value', productTitle);
        order.querySelector('.order__info-size').setAttribute('value', productSize);
        order.querySelector('.order__info-price').setAttribute('value', productPrice);

        order.querySelector('.order__product-title').textContent = productTitle;
        order.querySelector('.order__product-price').textContent = productPrice;
        order.querySelector('.order__size').textContent = productSize;
        order.querySelector('.order__img').setAttribute('src', productImgSrc);



    };  

    catalog.addEventListener('click', function(e){
        var target = e.target;

        if(target.classList.contains('product_size')) {
            e.preventDefault();
            changeProductSize(target);
        }

        if(target.classList.contains('product__btn')) {
            e.preventDefault();
            changeProductOrderInfo(target);
        }
    }); 
})();