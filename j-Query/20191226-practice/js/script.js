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


    // test 12 => 조건1. 셀렉트 박스의 옵션을 변경할 때 그 내부 내용을 
    // 하단에 위치한 클래스명 result를 가진 요소에 나타나도록 
    // 구성하세요. (change() 이벤트 및 val()와 text() 메서드 이용)
    



});


