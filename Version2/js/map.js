//map
function Map(){
    $(".click").on("click",function(){
            $(".cover").show();
            // 百度地图API功能初始化
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(118.786,32.029);
	map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.enableScrollWheelZoom();
    
    //文本
    var opts = {
	  position : point,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(-30, -10)    //设置文本偏移量
	}
	var label = new BMap.Label("欣才学院", opts);  // 创建文本标注对象
		label.setStyle({
			 color : "red",
			 fontSize : "12px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"Microsoft Yahei"
		 });
	map.addOverlay(label);  
    
    //Resize        
    $(window).on("resize",function(){
        var move=1;
        map.addEventListener("tilesloaded",function(){
          if(move==1){
           map.setCenter(point)   
          };
        move+=1
        })
    })
	})
    $(".close").on("click",function(){
        $(".cover").hide()
    })
}
      