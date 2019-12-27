$(document).ready(function(){
	$("#selector").css({"background":"#ffff00","font-size":"28px"});

	$(".science_01, .science_03").css("color", "#00dd00");
	//$("p:eq(0), p:eq(2)").css("color", "#00dd00");

	$(".test_04 p:eq(1), .test_04  p:eq(3)").css("background","#aaffff");

	$(".test_05 p:eq(3)").siblings("p").css("color"," #0000ff");

	$(".test_06 a:eq(2)").closest("ul").children().css("background","#ffff77");
	
	$(".port").closest("ul").siblings().css("background","#aaffff");
	// 형제가 여러명일땐 siblings("형제의클래스명")써주기
    $("#side_menu a:eq(2)").closest("a").find("span").css("color","#ff0000");
    //강사님 답변 (1줄로 사용)$(".port").closest("ul").siblings("#side_menu").css("background","#aaffff").find("span").css("color","#ff0000");

    $(".test_08 input[type='text']").css("background","#ffff00");

    $(".test_09").text("텍스트변경완료").css("background","#aaffaa");

    // (click() 이벤트와 slideUp() 효과 메서드 이용)
    $(".test_10 p").click(function(){
    	$(this).slideUp();
    });

    // $(".test_11 p").hover(function(){
    // 	var $highlight = $(this).hasClass("highlight")
    // 	if($highlight == true){
    // 		$(this).removeClass("highlight")
    // 	}else{
    // 		$(this).addClass("highlight")
    // 	}
    // });
     $(".test_11 p").hover(function(){
     	$(this).addClass("highlight")
     }, function(){
     	$(this).removeClass("highlight")
     });


    $(".test_12 select").change(function(){
        var $trip = $(".test_12 select").val();
        console.log($trip)
        $(".test_12 p").text($trip);
     });

    $(window).resize(function(){
        var $win_width = $(this).width();
        var $win_height = $(this).height();
        console.log($win_width);
        console.log($win_height);
        $(".widthTxt").text($win_width);
        $(".heightTxt").text($win_height);
    });

    $(window).scrollTop(function(){
        var $win_scroll = $(this).scrollTop();
        console.log($win_scroll);
        $(".scroll_location").text($win_scroll)
    });
    $(".test_15 p").hide();

    $(".hide-btn").click(function(){
        $(".test_15 p").hide();
    });
    $(".show-btn").click(function(){
        $(".test_15 p").show();
    });
    // 16
    $(".hide-btn").click(function(){
        $(".normal").hide();
        $(".very-fast").hide(50);
        $(".fast").hide("fast");
        $(".slow").hide("slow");
        $(".very-slow").hide(2000);
    });
     $(".show-btn").click(function(){
        $(".normal").show();
        $(".very-fast").show(50);
        $(".fast").show("fast");
        $(".slow").show("slow");
        $(".very-slow").show(2000);
    });

    $(".test_17 p").hide();

    $(".out-btn").click(function(){
        $(".test_17 p").fadeOut();
    });
    $(".in-btn").click(function(){
        $(".test_17 p").fadeIn();
    });

    $(".test_18 p").hide();
    $(".up-btn").click(function(){
        $(".test_18 p").slideUp();
    });
    $(".down-btn").click(function(){
        $(".test_18 p").slideDown();
    });

    $(".test_19 button").click(function(){
        $(".test_19 p img").animate({"margin-left":"100px"},500);
    });

    $(".test_20 img").click(function(){
        var $title = $(".test_20 img").attr("title");
        console.log($title);
        $(".test_20 p").text($title);
    });

    $(".test_21 button").click(function(){
        var $ch_img = $(".test_20 img").attr("src")
        console.log($ch_img);
        $(".test_21 img").attr("src","img/kakao_img2.jpg");
    });

    $(".left_add").click(function(){
        $(".test_22 .img_frame").append("<img src='img/wall_img3.jpg'>");
    });
    $(".right_add").click(function(){
        $(".test_22 .img_frame").prepend("<img src='img/wall_img1.jpg'>");
    });

    $(".before_add").click(function(){
        $(".img_frame #kakao").before("<img src='img/wall_img4.jpg'>");
    });
    $(".after_add").click(function(){
        $(".img_frame #kakao").after("<img src='img/wall_img6.jpg'>");
    });

    $(".btn_frame .effect_add").click(function(){
        $(".test_24 .img_frame img").addClass("effect");
    });
    $(".btn_frame .effect_remove").click(function(){
        $(".test_24 .img_frame img").removeClass("effect");
    });

    $(".test_25 .effect_confirm").click(function(){
     var $effect = $(".test_25 #refresh").hasClass("effect")
     if($effect == true){
         $(".test_25 #refresh").removeClass("effect")
     }else{
         $(".test_25 #refresh").addClass("effect")
     }
    });

    $(".test_26 .img_frame img").not("img:eq(0)").hide();

    $(".test_26 .fadein_img").click(function(){
        $(".test_26 .img_frame img:eq(1)").fadeIn(1000,function(){
            $(".test_26 .img_frame img:eq(2)").fadeIn(1000,function(){
                $(".test_26 .img_frame img:eq(3)").fadeIn(1000,function(){
                    $(".test_26 .img_frame img:eq(4)").fadeIn(1000)
                });
            });
        });

    });





});


