export const scrollSwith = () => {
    console.log('MODULE: scrollSwith');

    let topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
    let productImageHeight = $('.woocommerce-product-gallery__image > img').height();
    let imageOffSet = topOffSet - productImageHeight;    

    if (window.innerWidth < 960) {

        if (document.documentElement.scrollTop > topOffSet) {
            $('.woocommerce-product-gallery__image').css('display', 'none');
            $('#liner').css('display', 'block');
            topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
            productImageHeight = $('.woocommerce-product-gallery__image > img').height();
            imageOffSet = topOffSet - productImageHeight;

        } else if (document.documentElement.scrollTop < imageOffSet) {
            $('.woocommerce-product-gallery__image').css('display', 'block');
            $('#liner').css('display', 'none');
            topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
            productImageHeight = $('.woocommerce-product-gallery__image > img').height();
            imageOffSet = topOffSet - productImageHeight;
        }

        window.onscroll = function () {
            if (document.documentElement.scrollTop > topOffSet) {
                $('.woocommerce-product-gallery__image').css('display', 'none');
                $('#liner').css('display', 'block');
                topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
                productImageHeight = $('.woocommerce-product-gallery__image > img').height();
                imageOffSet = topOffSet - productImageHeight;
            } else if (document.documentElement.scrollTop < imageOffSet) {
                $('.woocommerce-product-gallery__image').css('display', 'block');
                $('#liner').css('display', 'none');
                topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
                productImageHeight = $('.woocommerce-product-gallery__image > img').height();
                imageOffSet = topOffSet - productImageHeight;
            }
        }

    } else {
        $('.woocommerce-product-gallery__image').css('display', 'block');
        $('#liner').css('display', 'block');
        window.onscroll = null;
    }
};

