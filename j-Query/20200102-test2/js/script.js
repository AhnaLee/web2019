$(document).ready(function(){
	// QUESTION 01
	$("#ex_01_title").click(function(){
		$(".p_01, .p_03").css("background","#ffaaff");
	});
	// QUESTION 02
	$("#ex_02").click(function(){
		var $inputChk = $("input[name^='item_0']");
		console.log($inputChk);
		if($inputChk.attr("checked")){//현재 기준으로 체크 되어있는 상태
			$("input[name^='item_0']").removeAttr("checked");
			$("#ex_02_tit").text("전체선택");
		}else{ //현재 기준으로 체크가 되어 있지 않은 상태
			$("input[name^='item_0']").attr("checked", "checked");
			$("#ex_02_tit").text("전체해제");
		}
	});
	// QUESTION 03
	$("#ex_03 span").click(function(){
		$(this).closest("div").hide();
	});
	// QUESTION 04
	var $init = 0;
	$(".go").click(function(){
		$(".ch_04_frame img").animate({"margin-left":$init+= 200},1500);
	});
	$(".back").click(function(){
		$(".ch_04_frame img").animate({"margin-left":$init-= 200},1500);
	});
	//QUESTION 05
	/* $("#tab_01").click(function(){
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").hide();
		$(".tab_01").fadeIn();
		$(".bg-bk").animate({"left":0},500);
	});

	$("#tab_02").click(function(){
		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").hide();
		$(".tab_02").fadeIn();
		$(".bg-bk").animate({"left":50+"%"},500);
	}); */
	$(".tab_btn>div").click(function(){
		var $index = $(this).index();

		$(".tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").removeClass("activeBox");
		$(".tab_box>div").eq($index).addClass("activeBox");

		$(".bg-bk").stop().animate({"left":50*$index+"%"},500);
	});

	//QUESTION 06 
	$("#ex_06 .less").hide();
	$("#ex_06 .title p").hide();


	$("#ex_06 .more").click(function(){
		$(this).closest("h4").next("p").slideDown();
		$(this).hide();
		$(this).siblings(".less").show();

	});

	$("#ex_06 .less").click(function(){
		$(this).closest("h4").next("p").slideUp();
		$(this).hide();
		$(this).siblings(".more").show();
	});

	//QUESTION 07
	$(".q_box p").hide();
	$(".q_box").click(function(){
		var $cur_Opt = $(this).children("p").hasClass("open");
		// 가상의 class 가 본인을 체크할 수 있는 열쇠
		console.log($cur_Opt);
		if($cur_Opt == true){// 본인을 클릭 시, 현재 열려있는지 또는 닫혀있는 지를 체크. 열려있다면 
			$(this).children("p").removeClass("open"); // 본인한테 부여된 class를 제거
			$(this).children("p").slideUp(); //본인을 닫는다.
		}else{// 다른 곳을 클릭시 
			$(".q_box p").removeClass("open"); //강제로 class를 제거 
			$(".q_box p").slideUp(); //강제로 닫아버린다.
			$(this).children("p").addClass("open"); //클릭한 곳에 class를 부여
			$(this).children("p").slideDown(); //본인만 열어준다.
		}
	});

	//QUESTION 08
	$(".per_bar_frame").each(function(){
		var $cur_per = $(this).attr("data-percent");
		console.log($cur_per); //80%, 90%, 75%
		$(this).find(".per_bar").animate({"width":$cur_per},500);
		$(this).find(".cur_per").text($cur_per);
	});

});