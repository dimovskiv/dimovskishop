
$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $(".navbar").addClass("changecolor")
        $('.navbar-brand img').attr("src","logoalt.png");
        
      
    } else {
       $(".navbar").removeClass("changecolor");
       $('.navbar-brand img').attr("src","clothing1.png");
       
    }
})

