


function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(52.1623137, 21.215364),
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).ready(function () {
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1500, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});