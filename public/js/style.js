$(document).ready(function () {
    new WOW().init();

    $("a.menu-item").click(function activateAnimate() {
        new WOW().init();
    });

    function alterClass() {
        var wd = $(window).width()
        if (wd < 600) {
            $('section').removeClass('wow');
        } else if (wd > 600) {
            $('section').addClass('wow');
            new WOW().init();
        }
    }

    $(window).resize(function () {
        alterClass();
    })

    alterClass();
});

// Click Animations

$("#contacts button").on("click", function () {
    /*
    If any input is empty shake it. After the animation is complete, remove the shake and animated classes so that the animation can repeat.
    */

    // Check name input
    if ($("#nom input").val() === "") {
        $("#nom")
            .addClass("animated shake")
            .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    $(this).removeClass("animated shake");
                }
            );
    }

    // Check forename input
     if ($("#prenom input").val() === "") {
        $("#prenom")
            .addClass("form-error animated shake")
            .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    $(this).removeClass("animated shake");
                }
            );
        }

    // Check email input
    if ($("#email input").val() === "") {
        $("#email")
            .addClass("form-error animated shake")
            .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    $(this).removeClass("animated shake");
                }
            );
    }

    // Check message object
    if ($("#objet input").val() === "") {
        $("#objet")
            .addClass("form-error animated shake")
            .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    $(this).removeClass("animated shake");
                }
            );
    }

    // Check message textarea
    if ($("#contenu").val() === "") {
        $("#contenu")
            .addClass("form-error animated shake")
            .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    $(this).removeClass("animated shake");
                }
            );
    }
});

/*
new PerfectScrollbar('body',{
    wheelSpeed: 10,
    wheelPropagation: 3,
    minScrollbarLength: 10,
    suppressScrollX: true,
    scrollYMarginOffset: -2
});
*/