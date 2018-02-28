

$(window).scroll(function() {
    var $position = $(window).scrollTop()
    var $tatry = $('#tatry').offset().top - 200 ;
    var $bieszczady = $('#bieszczady').offset().top - 200 ;
    var $karkonosze = $('#karkonosze').offset().top - 200 ;
    var $pieniny = $('#pieniny').offset().top - 200 ;
    var $gorce = $('#gorce').offset().top - 200 ;
    var $beskid = $('#beskid').offset().top - 200 ;
    var $swietokrzyskie = $('#swietokrzyskie').offset().top - 200 ;

   
    if ($position > 600 ) {
        $('#scrollUp').fadeIn();
        $('.sideMenu').fadeIn();
        
    }

    if ($position < 600 ) {
        $('#scrollUp').fadeOut();
        $('.sideMenu').fadeOut();
    }

    if ($position > $tatry) {
        $('.sideMenu ul li').removeClass('active');
        $('.tatry').addClass('active');       
    }

    if ($position > $bieszczady) {
        $('.sideMenu ul li').removeClass('active');
        $('.bieszczady').addClass('active');       
    }

    if ($position > $karkonosze) {
        $('.sideMenu ul li').removeClass('active');
        $('.karkonosze').addClass('active');       
    }

    if ($position > $pieniny) {
        $('.sideMenu ul li').removeClass('active');
        $('.pieniny').addClass('active');       
    }

    if ($position > $gorce) {
        $('.sideMenu ul li').removeClass('active');
        $('.gorce').addClass('active');       
    }

    if ($position > $beskid) {
        $('.sideMenu ul li').removeClass('active');
        $('.beskid').addClass('active');       
    }

    if ($position > $swietokrzyskie) {
        $('.sideMenu ul li').removeClass('active');
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
    

// ------------------------


// $('.nav a').click(function(e) {
//     var data = $(this).attr('data');
//     console.log(data)
    

//     $(document).animate({
//         scrollTop: $(this).attr('href').offset().top
//     }, 1500);
// })
