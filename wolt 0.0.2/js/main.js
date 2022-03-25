$(function(){
    $('.burger-menu').on('click', '.bar', function() {
        $('body').toggleClass('lock');
        $('.menu-burger').slideToggle();
        $('.bar').toggleClass('change');
        $('.menu-burger__burger li').slideRight();
    });
});