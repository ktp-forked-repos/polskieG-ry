

$(window).scroll(function() {
    var $position = $(window).scrollTop()
    var $tatry = $('#tatry').offset().top - 200 ;
    var $bieszczady = $('#bieszczady').offset().top - 200 ;
    var $karkonosze = $('#karkonosze').offset().top - 200 ;
    var $pieniny = $('#pieniny').offset().top - 200 ;
    var $gorce = $('#gorce').offset().top - 200 ;
    var $beskid = $('#beskid').offset().top - 200 ;
    var $swietokrzyskie = $('#swietokrzyskie').offset().top - 200 ;
    var opacity = (( $(window).scrollTop() - 3311 )/ 100 - 1)/5;
    var opacityC = opacity * (-1) + 2.5; 

    if ($position > 600 ) {
        $('#scrollUp').fadeIn();
        $('.sideMenu').fadeIn();
        $('#opacity').css('opacity', opacity);
    }

    if ($position < 600 ) {
        $('#scrollUp').fadeOut();
        $('.sideMenu').fadeOut();
    }

    if ($position > $tatry) {
        $('.sideMenu ul li').removeClass('active');
        $('.sideMenu ul li').addClass('sideMenuItem');
        $('.tatry').removeClass('sideMenuItem'); 
        $('.tatry').addClass('active');       
    }

    if ($position > $bieszczady) {
        $('.sideMenu ul li').removeClass('active');
        $('.sideMenu ul li').addClass('sideMenuItem');
        $('.bieszczady').removeClass('sideMenuItem'); 
        $('.bieszczady').addClass('active');       
    }

    if ($position > $karkonosze) {
        $('.sideMenu ul li').removeClass('active');
        $('.sideMenu ul li').addClass('sideMenuItem');
        $('.karkonosze').removeClass('sideMenuItem'); 
        $('.karkonosze').addClass('active');       
    }

    if ($position > $pieniny) {
        $('.sideMenu ul li').removeClass('active');
        $('.sideMenu ul li').addClass('sideMenuItem');
        $('.pieniny').removeClass('sideMenuItem'); 
        $('.pieniny').addClass('active');       
    }

    if ($position > $gorce) {
        $('.sideMenu ul li').removeClass('active');
        $('.sideMenu ul li').addClass('sideMenuItem');
        $('.gorce').removeClass('sideMenuItem'); 
        $('.gorce').addClass('active');       
    }

    if ($position > $beskid) {
        $('.sideMenu ul li').removeClass('active');
        $('.sideMenu ul li').addClass('sideMenuItem');
        $('.beskid').removeClass('sideMenuItem'); 
        $('.beskid').addClass('active');   
        $('#opacity').css('opacity', opacityC);
            
        
    }

    if ($position > $swietokrzyskie) {
        $('.sideMenu ul li').removeClass('active');
        $('.sideMenu ul li').addClass('sideMenuItem');
        $('.swietokrzyskie').removeClass('sideMenuItem'); 
        $('.swietokrzyskie').addClass('active');   
        
    }
})

$('.sideMenu ul li').click(function() {
    $('.sideMenu ul li').removeClass('active');
    $(this).addClass('active')
})

$('#scrollUp').click(function() {      
         
    $('html').animate({
        scrollTop: $('body').offset().top
    }, 1500 );
})	  
    

