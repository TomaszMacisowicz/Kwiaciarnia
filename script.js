
/* global google */

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
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