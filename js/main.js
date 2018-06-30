$(document).ready(function () {



// Slider Options
$(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    fade: true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"> <span class="Thumbnail"></span></button>',
    nextArrow: '<button class="NextArrow"> <span class="Thumbnail"></span></button>',
    // Custom Dots With Thumbnails Tool Tip
    customPaging: function (slider, i) {
        var thumbnail = $(slider.$slides[i]).data('thumbnail');
        return '<a href="javascript:void(0)"><img src="' + thumbnail + '"></a>';
    },
});

// Arrows Thumbnails Trick
var PrevThumbinalFirst = $(".Modern-Slider .item:last-child").children(".img-fill").children("img").attr("src");
$(".Modern-Slider .PrevArrow .Thumbnail").css({
    "background-image": "url(" + PrevThumbinalFirst + ")"
})
var NextThumbinalFirst = $(".Modern-Slider .item:first-child").next().children(".img-fill").children("img").attr("src");
$(".Modern-Slider .NextArrow .Thumbnail").css({
    "background-image": "url(" + NextThumbinalFirst + ")"
})
$(".Modern-Slider").on('afterChange', function (event, slick, currentSlide) {
    var PrevThumbinal = $(".Modern-Slider .item.slick-active").prev(".item").children(".img-fill").children("img").attr("src");
    $(".Modern-Slider .PrevArrow .Thumbnail").css({
        "background-image": "url(" + PrevThumbinal + ")"
    })
    var NextThumbinal = $(".Modern-Slider .item.slick-active").next(".item").children(".img-fill").children("img").attr("src");
    $(".Modern-Slider .NextArrow .Thumbnail").css({
        "background-image": "url(" + NextThumbinal + ")"
    })
});












    $('#owl-demo').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#owl-demo2').owlCarousel({
        loop: true,
        autoplay: true,
        center: true,
        items:1,
        nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    function switchStyleSheets(theme) {
        $('link[title="theme"]').attr('href', theme);
    }

    $(document).ready(function () {

        $('#black').click(function (event) {
            event.preventDefault();
            switchStyleSheets('css/black.css');
        });

        $('#default').click(function (event) {
            event.preventDefault();
            switchStyleSheets('css/default.css');
        });

        $('#orange').click(function (event) {
            event.preventDefault();
            switchStyleSheets('css/orange.css');
        });

        $('#green').click(function (event) {
            event.preventDefault();
            switchStyleSheets('css/green.css');
        });

    });

    /* this changes font size of */

    var originalSize = $('div').css('font-size');
    // reset
    $(".resetMe").click(function () {
        $('div').css('font-size', originalSize);

    });

    // Increase Font Size
    $(".increase").click(function () {
        var currentSize = $('div').css('font-size');
        var currentSize = parseFloat(currentSize) * 1.2;
        $('div').css('font-size', currentSize);

        return false;
    });

    // Decrease Font Size
    $(".decrease").click(function () {
        var currentFontSize = $('div').css('font-size');
        var currentSize = $('div').css('font-size');
        var currentSize = parseFloat(currentSize) * 0.8;
        $('div').css('font-size', currentSize);

        return false;
    });

})