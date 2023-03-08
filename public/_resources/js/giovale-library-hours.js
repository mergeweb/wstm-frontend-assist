$(document).ready(function() {
    $.getJSON("https://apps.westminstercollege.edu/api/Hours", '_blank', function(data) {
        $('.today').html('<p>Today: <span class="time">' + data.today + '</span></p>');
        $('.tomorrow').html('<p>Tomorrow: <span class="time">' + data.tomorrow + '</span></p>');
    });

});