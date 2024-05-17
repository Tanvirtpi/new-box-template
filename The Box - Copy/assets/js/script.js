

$(document).ready(function(){
    $(".caurocel-area").owlCarousel({
        items:1,
        loop:true,
        dots:false,
        nav:true,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>Back','Next<i class="fa-solid fa-arrow-right-long"></i>'],
    });
  });



  $(document).ready(function(){
    var filter_container = mixitup('.filter_content',{
        load: {
            filter: '.all'
        },
        animation: {
            effects: 'fade stagger(100ms)',
                staggerSequence: function(i) {
                    return i % 3;
                }
        }
    });
});


$(document).ready(function(){
    $('.menu-bar').click(function(){
        $('.menu').slideToggle(1000)
    });
});