// #1번 실습
var $date = new Date();
var year = $date.getFullYear();
var month = $date.getMonth()+1;
var date = $date.getDate();
var day = $date.getDay();
var hours = $date.getHours();
var mints = $date.getMinutes();
var secns = $date.getSeconds();
var $arr_day = ["일", "월", "화", "수", "목", "금", "토"];
var $yoil = $arr_day[$date.getDay(3)];
document.getElementById("result_01").innerHTML = year+"년 "+month+"월 "+date+"일 "+$yoil+"요일, "+hours +": "+mints +": "+secns;

//# 2번 실습 
var $str ="welcome to my home";
document.getElementById("result_02").innerHTML = $str.replace("home","homepage");

//# 3번 실습 
var $arr_01 = ["kakao_01.jpg","kakao_02.jpg","kakao_03.jpg"];
document.getElementById("result_03").innerHTML = "<img src='img/"+$arr_01[0]+"'><img src='img/"+$arr_01[1]+"'><img src='img/"+$arr_01[2]+"'>";

// # 4번 실습 
var $kakao_01 = ["kakao_01.jpg","kakao_02.jpg","kakao_03.jpg"];
var $kakao_02 = ["카카오 소풍","카카오 나들이","카카오 휴가"];
document.getElementById("result_04").innerHTML = "<div class='kakao_bx'><img src='img/"+$kakao_01[0]+"'><span>"+$kakao_02[0]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$kakao_01[1]+"'><span>"+$kakao_02[1]+"</span></div>"+"<div class='kakao_bx'><img src='img/"+$kakao_01[2]+"'><span>"+$kakao_02[2]+"</span></div>";

// #4번 실습 for문으로 사용하는 방법 
// for(i=0; i<3; i++){
// 	document.getElementById("result_04").innerHTML +="<div class='kakao_bx'><img src='img/"+$kakao_01[i]+"'><span>"+$kakao_02[i]+"</span></div>"
// }

// #5번 실습 (인덱스 안에 이미지 태그가 있을 경우)
// var $img_01 = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg",];
// var i = 0;
// var $pic =document.getElementById("pic");
// function nextImg(){
// 	if(i>=8){
// 		i=0; 
// 		$pic.setAttribute("src", "img/"+$img_01[i]);
// 	}else{
// 		i++;
// 		$pic.setAttribute("src", "img/"+$img_01[i]);
// 	}
// }

// #5번 인덱스에 이미지 태그가 없을경우
var $img_01=["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg", "img/img7.jpg", "img/img8.jpg", "img/img9.jpg"]
var i=0;
var $result_05=document.getElementById("result_05");
$result_05.innerHTML="<div><button onclick='nextImg();'>다음 이미지 보기</button></div><img id='pic' src='"+$img_01[i]+"'></img>";
function nextImg(){
	var $img_05= document.getElementById("pic");
	$img_05.setAttribute("src", $img_01[i]);
	if(i>=8){
		i=0; 
		$pic.setAttribute("src", $img_01[i]);
	}else{
		i++;
		$pic.setAttribute("src", $img_01[i]);
	}
}
// #5번 실습 (강사님 답안)
// var $img_01 = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg", "img/img7.jpg", "img/img8.jpg", "img/img9.jpg"];
// var i=0;
// function nextImg(){
// 	document.getElementById("result_05").innerHTML ="<img src='img/"+$img_01[i]+"'>";
// 	i++;
// 	console.log($img_01.length);
// 	if(i>$img_01.length-1){
// 		i=0;
// 	}
// }

// #6번 실습
var k=1;
var $rst_06 = document.getElementById("rst_06");
function subNext(){
	$rst_06.setAttribute("src", "img/sub_0"+k+".jpg");
	k++;
	if(k>3){
		k=1;
	}
}














