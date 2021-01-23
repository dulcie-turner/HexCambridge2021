//页面载入事件
$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, // 循环播放

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// 如果需要滚动条
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});

	//jquery代码
	$(".gotoTop").click(function() {
		//animate 动画 scrollTop 表示页面滚动距离
		$("html,body").animate({
			scrollTop: 0
		});
	});

	//导航菜单，鼠标滑过，菜单下拉，第一参数表示鼠标滑过，第二个参数表示鼠标移出
	$(".nav ul li").hover(function() {
		$(this).find("dl").stop().slideDown(); //显示，缓慢下拉
	}, function() {
		$(this).find("dl").stop().slideUp(); //隐藏，缓慢上浮
	});


	//作品展示动画
	$(".floor1 .ctr,.floor1 .up,.floor1 .down").hover(function() {
		//鼠标滑过
		$(this).find(".cover").stop().animate({
			top: 0
		});

	}, function() {
		//鼠标移出
		$(this).find(".cover").stop().animate({
			top: "100%"
		});
	});


	//场景展示
	$(".floor2 .photos .wrapper>div>div").hover(function() {
		$(this).parent().siblings().find("img").stop().animate({
			opacity: 0.5
		});
	}, function() {
		$(this).parent().siblings().find("img").stop().animate({
			opacity: 1
		});
	});

	//新闻资讯动画
	$(".floor3 .news ul li").hover(function() {
		//鼠标滑过
		$(this).find(".cover").stop().animate({
			opacity: 0
		});

	}, function() {
		//鼠标移出
		$(this).find(".cover").stop().animate({
			opacity: 0.75
		});
	});


	var today = new Date();
	var day = today.getDate(); //获取当前日期
	console.log(day);


	$(".floor3 .news ul li .cover").text(day);

	//当窗口滚动的时候
	$(window).scroll(function() {
		//获取当前窗口已滚动的高度
		var st = $(document).scrollTop();
		if (st > 200) { //滚动到200高度的时候
			$(".gotoTop").stop().animate({
				opacity: 1
			});

			//导航动画
			$(".nav .logo").stop().animate({
				opacity: 0
			}, function() {
				$(".nav ul").stop().animate({
					left: 0
				});
			});
		} else {
			$(".gotoTop").stop().animate({
				opacity: 0
			});

			$(".nav ul").stop().animate({
				left: "180px"
			}, function() {
				$(".nav .logo").stop().animate({
					opacity: 1
				});
			});



		}
	});


});
