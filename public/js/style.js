$( document ).ready(function() {
    new WOW().init();
    
    $("a.menu-item").click(function activateAnimate() {
        new WOW().init();
    });
    
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