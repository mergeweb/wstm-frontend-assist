var revealCalendar = document.getElementsByClassName('calendar-ou')

if(revealCalendar.length){
    $('footer').append(`<script src="/_resources/js/evets-and-performances.js"></script>
        <script src="/_resources/js/events-daygrid.js"></script>
        <script src="/_resources/js/list-events.js"></script>
        <script src="/_resources/js/events.js"></script>`
    )
}

var revealCalendar2 = document.getElementsByClassName('reveal')

if(revealCalendar2.length){
    $('head').append(`<script src="/_resources/js/reveal.js"></script> <script src="/_resources/js/hwac.js"></script>`)
}

