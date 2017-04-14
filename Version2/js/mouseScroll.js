//content fade in with scrolling mouse
function Scrollmouse(){
    $(window).on("scroll",function(){
    y=$(window).scrollTop();
    if(y>=0 && y<320){
     $(".banner-content").fadeIn();
     } else if(y>=500 && y<1220){
    $(".left-title").fadeIn();
    $(".analysis li.part-head").fadeIn()
    } else if(y>=1220 && y<2000){
        $("li.service-head").fadeIn();
    } else if(y>=2300 && y<3300){
        $(".resource-part").fadeIn(); 
    } else if(y>=3300){
        $(".company").fadeIn();
        $(".address").fadeIn()
    } 
    })
}