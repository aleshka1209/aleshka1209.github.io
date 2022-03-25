$(function(){
    $('.burger-menu').on('click', '.bar', function() {
        $('.menu-burger').slideToggle();
        $('.bar').toggleClass('change');
        $('.menu-burger__burger li').slideRight();
        $('.menu-burger').toggleClass('lock');
    });
});