$(document).ready(function(){
	
	//배열 순서 : 이미지, 타이틀, 내용, 가격, 업데이트순서, 좋아요 횟수  
	var $pd_arr = [
		["img1.jpg","거실 인테리어4", "합리적인 실용주의 인테리어1", "30000","20190807","23"],
		["img2.jpg","거실 인테리어2", "합리적인 실용주의 인테리어2", "40000","20191107","16"],
		["img3.jpg","침실 인테리어1", "합리적인 실용주의 인테리어3", "50000","20191004","20"],
		["img4.jpg","침실 인테리어2", "합리적인 실용주의 인테리어4", "90000","20190212","32"],
		["img5.jpg","주방 인테리어", "합리적인 실용주의 인테리어5", "70000","20191225","87"],
		["img6.jpg","침실 인테리어3", "합리적인 실용주의 인테리어6", "80000","20191117","23"],
		["img7.jpg","서재 인테리어", "합리적인 실용주의 인테리어7", "60000","20190227","50"],
		["img8.jpg","욕실 인테리어", "합리적인 실용주의 인테리어8", "100000","20190831","49"],
		["img9.jpg","거실 인테리어3", "합리적인 실용주의 인테리어9", "120000","20191231","8"],
		["img1.jpg","거실 인테리어4", "합리적인 실용주의 인테리어1", "30000","20190807","23"],
		["img2.jpg","거실 인테리어2", "합리적인 실용주의 인테리어2", "40000","20191107","16"],
		["img3.jpg","침실 인테리어1", "합리적인 실용주의 인테리어3", "50000","20191004","20"],
		["img4.jpg","침실 인테리어2", "합리적인 실용주의 인테리어4", "90000","20190212","32"],
		["img5.jpg","주방 인테리어", "합리적인 실용주의 인테리어5", "70000","20191225","87"],
		["img6.jpg","침실 인테리어3", "합리적인 실용주의 인테리어6", "80000","20191117","23"],
		["img7.jpg","서재 인테리어", "합리적인 실용주의 인테리어7", "60000","20190227","50"],
		["img8.jpg","욕실 인테리어", "합리적인 실용주의 인테리어8", "100000","20190831","49"],
		["img9.jpg","거실 인테리어3", "합리적인 실용주의 인테리어9", "120000","20191231","8"],

	];

	var $pd_box = `
		<div class="pd_box">
			<div class="pd_photo">
				<img src="img/img1.jpg">
			</div>
			<div class="pd_info">
				<h3 class="pd_title">title</h3>
				<p class="pd_text">context</p>
			<div class="pd_etc">
				<span class="pd_price">가격정보</span>
				<span class="pd_date">업데이트 날짜</span>
			</div>
				<p class="fav">좋아요&nbsp;<span>10</span></p>
			</div>
		</div>
	`;

	var $ea_item = 6; //각 페이지별로 8개의 아이템을 보여주겠다는 초기 선언

	//배열의 데이터 갯수가 각 페이지별로 분배되는 과정에서 나머지 값이 없다면 
	if($pd_arr.length % $ea_item == 0){
		for(k=0; k< parseInt($pd_arr.length / $ea_item); k++){
		$(".pager ul").append("<li>"+(k+1)+"</li>");
		}
	// 배열의 데이터 갯수가 각 페이지별로 분배되는 과정에서 나머지 값이 존재한다면
	}else{
		for(k=0; k<= parseInt($pd_arr.length / $ea_item); k++){
		$(".pager ul").append("<li>"+(k+1)+"</li>");
		}
	}

	


	// #1 .pd_box 배열 데이터의 갯수 만큼 구성
	for(i=0; i<$ea_item; i++){ //8개의 .pd_box 를 구성
		$(".pd_frame").append($pd_box);
	}

	// #2 .pd_box에 순차적으로 접근  
	function pd_sort(){
		$(".pd_box").each(function(index){ //each 문 function(매개변수)가 있음
			$(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
			$(this).find(".pd_title").text($pd_arr[index][1]);
			$(this).find(".pd_text").text($pd_arr[index][2]);
			$(this).find(".pd_price").text($pd_arr[index][3]);
			$(this).find(".pd_date").text($pd_arr[index][4]);
			$(this).find(".fav span").text($pd_arr[index][5]);
		});
	}
	pd_sort(); //브라우저 로딩(ready() 이벤트)이 완료되면 함수를 호출

	// 만약 pager 의 통제에 의한 페이지 보여주기에서 각 페이지 별로 8개씩 보여주어야 한다면
	/*
	1번 페이지에 인덱스 0(8*인덱스(0)= 0)~ 7(8*(인덱스(0)+1)-1) 까지만 보여주어야 한다.
	2번 페이지에 인덱스 8(8*인덱스(1)= 8)~ 15(8*(인덱스(1)+1)-1) 까지 보여주어야 한다.
	3번 페이지에 인덱스 16(8*인덱스(2)= 16)~ 23(8*(인덱스(2)+1)-1) 까지 보여주어야 한다.
	n번 인덱스 (n-1) 페이지에 (8*(인덱스 n-1)) ~ (8*((인덱스 n-1)+1)-1)16~23까지 보여주어야 한다.
	*/


	$(".pager li").eq(0).addClass("active"); //1번 번호에 .active 를 부여(최초 페이지 번호를 알려줌)
	$(".pager li").click(function(){ //각 번호를 클릭했을 때
		var $pager_index = $(this).index(); // 클릭된 번호의 인덱스 번호를 추출
		console.log($pager_index);
		$(".pager li").removeClass("active"); //전체 .active 를 회수 (제거)
		$(this).addClass("active"); //클릭한 곳에 .active를 부여(추가)
		$(".pd_box").show(); //클릭하자마자 숨겨놓은 박스를 보여줌  
		$(".pd_box").each(function(index){ //index는 0 ~ 생성된 개수만큼의 인덱스 번호로 순차적으로 접근
			if($pd_arr[$ea_item * $pager_index + index] != undefined){ //현재 인덱스번호의 데이터가 존대한다면 
				$(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[$ea_item * $pager_index + index][0]);
				$(this).find(".pd_title").text($pd_arr[$ea_item * $pager_index + index][1]);
				$(this).find(".pd_text").text($pd_arr[$ea_item * $pager_index + index][2]);
				$(this).find(".pd_price").text($pd_arr[$ea_item * $pager_index + index][3]);
				$(this).find(".pd_date").text($pd_arr[$ea_item * $pager_index + index][4]);
				$(this).find(".fav span").text($pd_arr[$ea_item * $pager_index + index][5]);
			}else{// 현재 인덱스 번호의 데이터가 존재하지 않는다면 
				$(this).hide(); // 데이터가 존재하지않는 박스를 숨김처리한다 
			}
		});
	});


	//최신순 클릭시 
	$(".date_sort").click(function(){
		$pd_arr.sort(function(a,b){ //sort () 메서드 :순차적으로 나열을 진행하는 메서드
			return a[4] - b[4];
		});
		console.log("오래된 순으로 나열하기"+$pd_arr,"<br>");
		$pd_arr.reverse(); //배열의 순서를 역순으로 변경
		console.log("최신순으로 나열하기"+$pd_arr,"<br>");
		pd_sort(); //배열에 대한 sort 작업이 완료되면 함수문을 호출
	});

	//낮은 가격순 클릭시 
	$(".low_sort").click(function(){
		$pd_arr.sort(function(a,b){ //sort () 메서드 :순차적으로 나열을 진행하는 메서드
			return a[3] - b[3];
		});
		console.log("낮은가격 순으로 나열하기"+$pd_arr,"<br>");
		pd_sort(); //배열에 대한 sort 작업이 완료되면 함수문을 호출
	});

	//높은 가격순 클릭시 
	$(".high_sort").click(function(){
		$pd_arr.sort(function(a,b){ //sort () 메서드 :순차적으로 나열을 진행하는 메서드
			return a[3] - b[3];
		});
		$pd_arr.reverse();
		console.log("높은가격 순으로 나열하기"+$pd_arr,"<br>");

		pd_sort(); //배열에 대한 sort 작업이 완료되면 함수문을 호출
	});

	//좋아요 클릭시 
	$(".fav_sort").click(function(){
		$pd_arr.sort(function(a,b){ //sort () 메서드 :순차적으로 나열을 진행하는 메서드
			return a[5] - b[5];
		});
		$pd_arr.reverse();
		console.log("좋아요 높은순으로 나열하기"+$pd_arr,"<br>");

		pd_sort(); //배열에 대한 sort 작업이 완료되면 함수문을 호출
	});



	// select & option 사용 시 
	$(".sort").change(function(){ //값이 변경되었을때 (change)
		var $sel_select = $(this).val();
		console.log($sel_select);
		if($sel_select == "date"){
			$pd_arr.sort(function(a,b){ //sort () 메서드 :순차적으로 나열을 진행하는 메서드
				return a[4] - b[4];
			});
			// console.log("오래된 순으로 나열하기"+$pd_arr,"<br>");
			$pd_arr.reverse(); //배열의 순서를 역순으로 변경
			// console.log("최신순으로 나열하기"+$pd_arr,"<br>");
			pd_sort(); //배열에 대한 sort 작업이 완료되면 함수문을 호출
		}else if($sel_select == "low"){
			$pd_arr.sort(function(a,b){ //sort () 메서드 :순차적으로 나열을 진행하는 메서드
				return a[3] - b[3];
			});
			// console.log("낮은가격 순으로 나열하기"+$pd_arr,"<br>");
			pd_sort(); //배열에 대한 sort 작업이 완료되면 함수문을 호출
		}else if($sel_select == "high"){
			$pd_arr.sort(function(a,b){ //sort () 메서드 :순차적으로 나열을 진행하는 메서드
			return a[3] - b[3];
			});
			$pd_arr.reverse();
			// console.log("높은가격 순으로 나열하기"+$pd_arr,"<br>");
			pd_sort(); //배열에 대한 sort 작업이 완료되면 함수문을 호출
		}else if($sel_select == "fav"){
			$pd_arr.sort(function(a,b){ //sort () 메서드 :순차적으로 나열을 진행하는 메서드
			return a[5] - b[5];
			});
			$pd_arr.reverse();
			// console.log("좋아요 높은순으로 나열하기"+$pd_arr,"<br>");
			pd_sort(); //배열에 대한 sort 작업이 완료되면 함수문을 호출
		}
	});






});