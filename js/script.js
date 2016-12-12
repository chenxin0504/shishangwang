$(document).ready(function(){
	 /*
		swiper轮播
	 */
	  var mySwiper = new Swiper('.swiper-container',{
	    loop: true,
		autoplay: 3000,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
		paginationClickable: true,
		autoplayDisableOnInteraction: false
	  });

	/*
		二维码显示
	*/ 
	 $('.weixin').mouseover(function(event) {
	 	$('.weixinpic').css('display', 'block');
	 });
	 $('.weixin').mouseleave(function(event) {
	 	$('.weixinpic').css('display', 'none');
	 });

	 /*
		文本框伸缩效果
	 */
	  $('.wenbenkuang1').focus(function(event) {
	  	 $(this).animate({width:'220'}, 500);
	  });
	  $('.wenbenkuang1').blur(function(event) {
	  	 $(this).animate({width:'170'}, 500);
	  });

	  /*
		layer购物车模态层
	  */
	  $('#gouwuche').click(function(event) {				
				
				layer.open({
					title:'购物车',
				    type: 2, 				   
				    area: ['1200px', '600px'], //宽高
				    content: 'shopcart.html'
				});

			});

	/*
		无间断滚动
	*/
	var speed = 10;//速度

	var slider = document.getElementById('slider-box');//容器
	var sliderWrapper = document.getElementById('slider-wrapper');//内层容器
	var slider1 = document.getElementById('slider1');//正体		

	slider1.innerHTML += slider1.innerHTML; //拷贝内容一式两份	

	//改变left位置向左移动，当left值小于等于正体内容，left复位0
	function marquee() {
		var sLeft = parseInt(slider1.style.left);

		if (sLeft == -slider1.offsetWidth/2) {				
			sLeft = 0;	
		}			

		sLeft --;
		slider1.style.left = sLeft + 'px'; 			
	}

	//初始化定时器
	var timer = setInterval(marquee, speed);

	//鼠标移上停止
	slider.onmouseover = function() {
		window.clearInterval(timer);
	}

	//鼠标离开继续
	slider.onmouseout = function() {
		timer = setInterval(marquee, speed);
	}
});




