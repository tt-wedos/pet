var slider=$('#sliderlist');
var speed=-2;
var num=0;	
var timer=null;
function move(){	
	timer=setInterval(function(){
		
		if(num<=-2490){
			num=0;
			num+=speed;
			slider.css('left',num+'px');
		}else{
			num+=speed;
			slider.css('left',num+'px');
		}
	},20)
}
$(".slider_box").hover(function(){
	clearInterval(timer);
},function(){
	move();	
}).trigger('mouseleave');




