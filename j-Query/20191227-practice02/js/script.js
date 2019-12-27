$(document).ready(function(){
	// #1
	$("#txt_ch").css({"color":"red","font-size":"20px;"});
	//#2
	var $second = $("#txt_02").text();
	console.log($second);
	$("#txt_sel span").text($second);
	//#3
	$("#ex_03").append("<p id='vo_05'>시드니</p>");
	$("#vo_05").css("color","red");
	//#4
	$("#ex_04").attr("src","img/apple.jpg");
	//#5
	$("#ex_05").attr("src","img/image_02.jpg");
	//#6
	$("#ex_06").attr("src","img/mango.jpg").css("margin-left","200px");
	// #7
	$("#ex_07 .num_03").addClass("active");
	// #8
	$("#ex_08 p:eq(2)").remove();
	// #9
	var $sel = $("#ex_09 .ho_04");
	$("#ex_09 .ho_01").before($sel);
	// #10
	var $lo_03 = $("#ex_10 .lo_03").val();
	console.log($lo_03);
	$("#ex_10 .lo_03").val("대전");
	// #11
	$(".main>li").hover(function(){
		$(this).find("a").addClass("active_menu");
		$(this).find(".sub").slideDown();
	}, function(){
		$(this).find("a").removeClass("active_menu");
		$(this).find(".sub").slideUp();
	});
	// #12
	$(".slider_num>li").click(function(){
		var $index = $(this).index();
		console.log($index);
		$(".slider li").css("z-index","0");
		$(".slider li:eq("+$index+")").css("z-index","1");
		$(".slider_num>li").css("background","#999");
		$(this).css("background","pink");
	});
	
});