$(function(){

    //configuration
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //start slider

    var interval;

    function startSlider(){

    //set interval for the animation
    interval =setInterval(function(){
        $('.slides').animate({'margin-left' : '-='+width}, animationSpeed)
    },

    //on last slide start over
     function(){
        currentSlide++;
        if (currentSlide = $('.slides.length')){
            currentSlide = 1;
            animate({'margin-left' : '0'})


        } 
     }, pause);
    }

    function pauseSlider(){
        clearInterval(interval);

    }

    //stop on mousehover

    $slider.on('mouseenter', pauseSlider);

})