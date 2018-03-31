

function scrollPosition(position) {
    $('#scrollPos').css('width', position);
}
$(window).scroll(function () {
    var currentPosition = Math.round(window.scrollY /
        (document.documentElement.offsetHeight -
            window.innerHeight) * 100) + '%';
    scrollPosition(currentPosition);
    
});