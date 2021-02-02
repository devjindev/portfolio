// Nav scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// Nav hambuger
$('nav div').click(function() {
    $(this).toggleClass('is-opened');
})