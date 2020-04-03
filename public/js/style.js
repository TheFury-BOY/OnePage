$( document ).ready(function() {
    new WOW().init();
    
    $("a.menu-item").click(function activateAnimate() {
        new WOW().init();
    });
    
    function alterClass() {
        var wd = $(window).width()
        if (wd < 600) {
            $('section, div').removeClass('wow');
        } else if (wd > 600) {
            $('section, div').addClass('wow');
            new WOW().init();
        }
    }

    $( window ).resize(function() {
        alterClass();
    })

        alterClass();
});
/*
new PerfectScrollbar('body', {
    wheelSpeed: 10,
    wheelPropagation: 3,
    minScrollbarLength: 20,
    suppressScrollX: true,
    scrollYMarginOffset: -2
});
*/