$(document).ready(function(){
	var $menu_arr = [
		{$img:"img/menu_fashion.jpg", $name:"패션"},
		{$img:"img/menu_beauty.jpg", $name:"뷰티"},
		{$img:"img/menu_living.jpg", $name:"리빙"},
		{$img:"img/menu_kids.jpg", $name:"유아동"}
	]
	var $menu_html = `<li class="bg_img"><div class="dark-bg">
	<a href="#" class="name"></a></div></li>`;

	for(i=0; i<=$menu_arr.length-1; i++){
		$("#test_01 .menu").append($menu_html);
	}

	$("#test_01 .menu li").each(function(index){
		$(this).css("background-image", "url("+$menu_arr[index].$img+")" );
		$(this).find(".name").text($menu_arr[index].$name);
	});
	//Question 02
	var $btn_arr = [
		{$name:"SACAI"},
		{$name:"REISS"},
		{$name:"DIESEL"}
	]
	$("#test_02 .tab_btn div").each(function(index){
		$(this).text($btn_arr[index].$name);
	});

	var $cont_arr = [
		{$img:"img/tab_01.jpg",$title:"SACAI",$sub:"사카이, 뉴욕 타임스와 협업해 한정판 티셔츠 출시",$text:"유명 패션 브랜드와 미국의 언론사가 협업한 티셔츠가 나왔다. 패션 브랜드 사카이는 이달 초 뉴욕 타임스의 ‘Truth(진실)’ 캠페인을 디자인에 반영한 협업 제품을 한정판으로 출시했다. 세계적 언론사인 뉴욕 타임스는 저널리즘의 독립성과 진실을 위한 투쟁이라는 명제 아래 작년 2월 ‘The Truth Is Hard(진실은 어렵다)’라는 광고캠페인을... "},
		{$img:"img/tab_02.jpg",$title:"REISS",$sub:"복고 바람 타고 올 여름 주름 잡는 주름치마!",$text:"올해 특히 인기를 끄는 디자인은 무릎을 덮는 긴 기장의 주름치마다. 주름치마는 여성미를 드러낼 수 있는 대표적인 옷인데 움직임에 따라 찰랑거리며 여성스러움을 극대화 해준다. 최근에는 티셔츠, 운동화와 함께 편안한 스타일로 연출하는 것이 유행이다."},
		{$img:"img/tab_03.jpg",$title:"DIESEL",$sub:"디젤, 아시아 시장 겨냥 컬렉션 설명회 서울 개최",$text:"이탈리아 패션 브랜드 디젤이 이달 5일 강남구 청담동에서 아시아 지역 패션 관계자들을 대상으로 한 신규 컬렉션 설명회를 개최한다. 디젤은 아시아∙태평양 PR본사 주관으로 매년 신규 컬렉션 설명회를 진행하는데 서울에서 개최하는 것은 이번이 처음이다. 이번 행사에는 한국의 패션 관계자,인플루언서,백화점 바이어들뿐만 아니라 중"}
	]

	$("#test_02 .tab_box>div").each(function(index){	
		$(this).find(".img").css("background-image", "url("+$cont_arr[index].$img+")" );
		$(this).find(".title").text($cont_arr[index].$title);
		$(this).find(".sub").text($cont_arr[index].$sub);
		$(this).find(".text").text($cont_arr[index].$text);
	});

	$("#test_02 .tab_btn>div").click(function(){

		var $index = $(this).index();
		$("#test_02 .tab_btn>div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$("#test_02 .tab_box>div").removeClass("activeBox");
		$("#test_02 .tab_box>div").eq($index).addClass("activeBox");
		$(".bg-bk").animate({"left":33.33*$index+"%"},500);
	});
	









	//Question 03

	// var $slide_arr = [
	// 	{$pic:"img/slide_01.jpg"},
	// 	{$pic:"img/slide_02.jpg"},
	// 	{$pic:"img/slide_03.jpg"},
	// 	{$pic:"img/slide_04.jpg"}
	// ]
	// var 
});