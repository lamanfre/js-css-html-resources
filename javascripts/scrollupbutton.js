//<![CDATA[
// create the back to top button and jquery animation
$(window).scroll(function(){
            if ($(this).scrollTop() > 300) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 900);
            return false;
        });
//]]>