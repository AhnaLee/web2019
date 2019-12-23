$(document).ready(function(){
	// $("*").css("color","red");

	//$("#id_sel").css("background", "#aaffff").css("color","#0000ff"); //체이닝기법 : 연결하여 적용시 활용
	$("#id_sel").css({"background":"#aaffff","color":"#0000ff"}); //복수의 스타일을 적용시 .css({"선언1":"선언값1", "선언2":"선언값2",....});

	$(".class_sel").css("font-size", "40px");

	$(".el_selector p").css("color","#00ff00");

	$(".contain_selector h4.contain").css("background", "#ffffaa"); //종속 선택자

	$("#child").parent().css("background", "#ffaaff");

	$(".children_selector .parent").children().css("color","red");
	$(".children_selector .parent").children("#child").css("background","#aaffaa");

	$(".my_sel").prev().css("border-bottom", "2px dashed #00ffff");
	$(".my_sel").prev().prev().css("background", "#aaffff");
	$(".my_sel").next().children().css("color", "#0000ff");

	$(".my_sel").prevAll().css("font-size","24px"); //본인제외환  이전의 모든 선택자 
	$(".my_sel").nextAll().css("background","#aaaaff"); //본인제외한  이후의 모든 선택자 

	$(".my_sel").siblings().css("border-left", "8px solid #ff0000"); //본인을 제외한 모든 형제들을 선택 
	$(".my_sel").siblings(".last_brother").css("border-bottom", "8px solid #ffff00"); //형제요소 중에 특정적인 형제요소만을 선택이 가능

	$(".my_unit").prevUntil(".prev").css("color","#ff0000");
	$(".my_unit").nextUntil(".next").css("color","#0000ff");

	$(".my_menu").closest("li").css("background","#aaffaa");
	$(".my_span").closest("li").next().children().css("color","red");

	$(".first_sel p").first().css("color","red");
	$(".first_sel p:first").css("background","#aaa");
	$(".first_sel p").last().css("color","purple");
	$(".first_sel p:last").css("background","#aaa");

	$(".first_sel p").eq(2).css("color","yellow"); 
	$(".first_sel p:lt(4)").css("font-size","28px");
	$(".first_sel p:gt(4)").css("font-size","12px");

	$("#wrap a[href]").css("color","green");
	$("#wrap a[target='_blank']").css("background","#ffff00");
	$("#wrap a[href$='net']").css("font-style", "italic");
	$("#wrap a[href*='go']").css("color","blue")
	$("#wrap a[href^='http']").css("border", "2px solid green");

	var $val_in = $("#wrap input[type='text']").val();
	// input 요소중 type='text'인 입력상자가 갖고 있는 value 값을 가져 오겠다는 의미 
	console.log($val_in);

	var $sel_in = $("#fav_region option:selected").val();
	console.log($sel_in);

	var $sel_chk = $("#wrap input[type='checkbox']:checked").val();
	console.log($sel_chk);

	/*내부 텍스트 탐색 */
	$("#cont_search p:contains('콘텐츠-02')").css("color","red");
	$("#cont_search p.cont_01").has("span").css("border-bottom","4px solid #0000ff");
	$("#cont_search p.cont_01").not(":last").css("font-style","italic");

	/* is() 메서드 : 현재 상태의 유부를 체크하여 true 또는 false 를 반환 (논리형 데이터로 반환) */
	var $isChk = $("#agree").is(":checked");
	console.log($isChk);

	/* each 문은 선택자에 의해 해당하는 요소를 선택하지만 이때 개별적인 요소로 순차 접근함*/
	$(".each_box>li").each(function(index){ // index라는 매개변수, each문에서 접근시 최초의 인덱스 번호로 0을 자동으로 선택 index=0
		// 1.자동으로 부여된 인덱스 번호의 0에 따라서 <li>Labtop</li>(첫번째 li) 접근

		if(index > 2){
			$(this).css("color","red");
		}else{
			$(this).css("color","green");
		}
	});



	var $arr_box = ["orange", "red", "green", "yellow"];
	var $arr_txt = ["box_01","box_02","box_03","box_04"];

	var $repeat = ""; //undefined  data형태가 정의되지 않은 초기값.
	for(i=0; i<4; i++){
		$repeat += "<div class='in_box'></div>"
	};

	$(".each_box_01").html($repeat);


	$(".each_box_01 .in_box").each(function(a){ // a= 0,1,2,3
		$(this).css("background", $arr_box[a]);
		$(this).text($arr_txt[a]);
	});

	var $html_txt = $(".html_txt").html();
	console.log($html_txt);
	$(".html_txt").html("02. <span>사생결단</span>");

	$(".detail").text("-감추기");
	$(".detail").text("<span>-감추기</span>");
	/* html() 메서드와는 달리 text()메서드는 내부에 들어가는 텍스트로 인식하기떄문에 태크명을 포함하였다면 태그명 조차도 텍스트로 인식이 됨*/

	var $pic_img = $(".ch_img").attr("src");
	console.log($pic_img);
	$(".ch_img").attr({"src":"img/pic-2.jpg", "alt":"이미지2"});
	// $(".ch_img").attr("alt","이미지2");

	$(".control_txt").addClass("active"); //선택자에 지정한 클래스를 추가
	$(".control_txt").removeClass("active"); //선택자에 지정한 클래스를 제거

	var $has_class = $(".control_txt").hasClass("active"); //선택자가 지정한 클래스를 가지고있는지에 대한 유무를 판단 . true 또는 flase
	 console.log($has_class);
	 if($has_class == true){
	 	$(".control_txt").text("active 클래스가 있습니다.")
	 }else{
	 	$(".control_txt").text("active 클래스가 없습니다.")
	 }

	 $(".control_txt").prop("id","active_box");
	 var $val = $("#user_name").val(); // 기존의 value 속성의 값을 가져옴
	 console.log($val);
	 $("#user_name").val("이하늬");

	 var $win_width = $(window).width();
	 var $win_height = $(window).height();
	 console.log("현재 브라우저의 가로 값 : "+ $win_width);
	 console.log("현재 브라우저의 세로 값 : "+ $win_height);

	 var $c_width = $(".property").width();
	 console.log("width : "+$c_width);

	 var $in_width = $(".property").innerWidth();
	 console.log("innerWidth : "+$in_width);

 	 var $out_width = $(".property").outerWidth();
	 console.log("outerWidth : "+$out_width);

	 var $po_top = $(".po_in").position().top;
	 console.log("position Y 위치 : "+$po_top);

	 var $off_top = $(".po_in").offset().top;
	 console.log("offset Y 위치 : "+$off_top);

	 var $sc_top = $(window).scrollTop();
	 console.log("브라우저 상단으로부터 스크롤 바가 이동한 위치 : "+$sc_top);

	 $(window).scroll(function(){
	 	var $sc = $(window).scrollTop();
	 	console.log($sc);

	 	if($sc >= $off_top){
	 		$(".po_in").css("background","#ffffaa")
	 	}else{
	 		$(".po_in").css("background","#ffaaff")
	 	}
	 });
	 $(".po_in").click(function(){
	 	$("html, body").animate({scrollTop:$("body").offset().top},2000);
	 });

	 //템플릿 리터럴 = 자바스크립트 코딩상 한줄을 저장할수는 있지만 여러줄(엔터값 포함)을 저장하고자 할 때 (`html,문서`)사용 
	 var $temp = `
	 <li>
	 	<a href="#">경영소개</a>
	 </li>
	  <li>
	 	<a href="#">프로젝트</a>
	 </li>`;

	 //before() 메서드 : 선택한 요소의 이전 형제로 새로운 요소(들)을 추가
	 $(".before_after_add li").eq(1).before($temp);
	 // $(".before_after_add li").eq(1).before("<li><a href='#'>경영소개</a></li>"); //한줄용

	 //after () 메서드 : 선택한 요소의 다음 형제로 새로운 요소(들)을 추가
	$(".before_after_add li").last(1).after("<li><a href='#'>공지사항</a></li>");

	$("<h5>이벤트 기간 : 2019.12.23~2019.12.31</h5>").insertBefore(".insert_before_after h4");
	$("<p>엄마는 외계인</p>").insertAfter(".insert_before_after p:eq(2)");

	//append () 메서드
	$(".append ul").append("<li><a href=''>Portfolio</a></li>")
	// prepend() 메서드
	$(".prepend").prepend("<p>영국</p>");
	/*
		#1. 배열값으로 메뉴에 대한 항목을 저장
		#2. for 문을 이용하여 구조를 .add_menu 의 자식으로 반복하여 넣겠다
		#3. each 문을 활용하여 배열 값을 각각의 분기점 항목의 내부에 넣겠다.

		*2차배열을 활용한 항목 넣기 (메뉴이름,링크주소)*
	*/
	var $menu_arr = [
	["About", "about.html"], // 0
	["Dishes", "dishes.html"], //1
	["Event", "event.html"], //2
	["Notice", "notice.html"] //3
	];
	for (i=0; i<$menu_arr.length; i++){
		$(".add_menu").append("<li><a href=''>"+i+"</a></li>");
	}; //for문 (반복)으로 구조(li, a)를 만들고나서 밑에로 내려가 메뉴를 구성

	$(".add_menu li").each(function(index){ //each (각각)적용해라
		console.log(index);
		$(this).find("a").text($menu_arr[index][0]); //this = li ,find("태그")
		$(this).find("a").attr("href", $menu_arr[index][1]); //2번째 배열 attr(링크)
	});

	// //setInterval
	// setInterval(function(){
	// 	var $f_img = "<li><img src='img/tree-1.jpg' alt=''></li>"; // 실제 문서를 데이터 형태로 저장
	// 	console.log($f_img);
	// 	var $f_img = $(".slide li").eq(0); //첫번째 <li>이하를 저장 
	// 	//선택자를 객체 저장 (내부의 항목 뿐만 아니라 내부의 DOM 요소들을 포함한 모든 노드값을 모두 가져온다.)
	// 	console.log($f_img);
	// 	var $f_img = $(".slide li").eq(0).html;
	// 	console.log($f_img);
	// 	$(".slide").append($f_img); //저장된 첫번째 <li> 이하를 부모영역인 .slide의 맨 마지막 자식으로 넣어주겠다.
	//  }, 1000);

	var $c_img = $(".card_img"); //객체로 접근하여 저장 -객체 데이터.
	console.log($c_img);

	$(".in_card p").after($c_img);

	var $color_clone = $(".clone p:eq(0)").clone(true);
	console.log($color_clone);
	$(".clone").append($color_clone);

	//clone(true) : 선택한 항목의 하위 요소를 모두 복제하겠다는 의미를 갖고있음.

	$(".empty p").empty(); //내부내용만 사라지고 본인(p)는 남아있음
	$(".remove").remove();

	$(".replaceWith p").replaceWith("<p>오렌지</p>")

	$(".unwrap p").unwrap(); //선택자의 부모 영역 제거
//	$(".unwrap p").wrap("<div />"); //p 태그를 div로 하나하나 감싸기
    $(".unwrap p").wrapAll("<div />"); // 모든 p 태그를 하나의 div로 감싸기
    $(".unwrap p").wrapInner("<a />"); //p 태그 내부를 a 태그로 감싸기

    $("#myList li").not(":first").css("background","blue");
    // $("#myList li").not("#myList li:eq(0)").css("background","blue");
    $("#myList li:eq(2)").css("background","green");
    	









});