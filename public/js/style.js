$( document ).ready(function() {
    new WOW().init();
    
    $("a.menu-item").click(function activateAnimate() {
        new WOW().init();
    });
});

