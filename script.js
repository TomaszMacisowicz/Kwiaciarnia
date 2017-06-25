



function initMap() {
    var myLatLng = {lat: 52.1623137, lng: 21.215364};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng,
        gestureHandling: 'cooperative'
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kwiaciarnia Ewa Macisowicz'
    });
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

$(function () {
    // View the selected photo at full size
    $(".photo-image").click(function () {
        $(this).addClass("photo-selected");
        $(this).parent().addClass("photo-x");
        $("#overlay").show();
    });
});
