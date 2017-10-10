$(document).ready(function() {
    $("p.research_summary").hide();
    $("h3#research1_h3").on('click', function() {
        $("p#research1").slideToggle(300, "swing", function() {
            var newHeight = $("div.active").css({
                height: 'auto'
            }).height();
            $("div#fh5co-main").animate({
                height: newHeight
            }, 10);
        });
    });
    $("h3#research2_h3").on('click', function() {
        $("p#research2").slideToggle(300, "swing", function() {
            var newHeight = $("div.active").css({
                height: 'auto'
            }).height();
            $("div#fh5co-main").animate({
                height: newHeight
            }, 10);
        });
    });
    $("h3#research3_h3").on('click', function() {
        $("p#research3").slideToggle(300, "swing", function() {
            var newHeight = $("div.active").css({
                height: 'auto'
            }).height();
            $("div#fh5co-main").animate({
                height: newHeight
            }, 10);
        });
    });
});
