 function Scrollmouse(){
            $(window).scroll(function(){
            y=$(window).scrollTop();
            console.log(y);
            if(y>=0 && y<320){
             $(".banner-content").fadeIn(2000);
             }else if(y>=500 && y<680){
            $(".left-title").fadeIn(3000);
            $(".analysis li.part-head").eq(0).fadeIn(2000)
        }  else if(y>680 && y<840){
            $(".analysis li.part-head").eq(1).fadeIn(2000)
        } else if(y>840 && y<1000){
            $(".analysis li.part-head").eq(2).fadeIn(2000)
        } else if(y>=1170 && y<1300){
            $("li.service-head").eq(0).fadeIn(2000);
        } else if(y>=1300 && y<1400){
            $("li.service-head").eq(1).fadeIn(2000);
        } else if(y>=1400 && y<1600){
            $("li.service-head").eq(2).fadeIn(2000);
        } else if(y>=2300 && y<2350){
            $(".resource-part").eq(0).fadeIn(2000); 
        } else if(y>=2350 && y<2500){
            $(".resource-part").eq(1).fadeIn(2000); 
        } else if(y>=2500 && y<2670){
            $(".resource-part").eq(2).fadeIn(2000); 
        } else if(y>=2670 && y<2900){
            $(".resource-part").eq(3).fadeIn(2000); 
        } else if(y>=3100){
            $(".company").fadeIn(2000);
            $(".address").fadeIn(2000)
        } 
        })
        }