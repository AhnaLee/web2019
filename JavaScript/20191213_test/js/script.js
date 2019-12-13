/*
// 20191213 - 기초 문법/ 기본 문법 실습 // 
// #1 실습 
var $num01 = 36;
var $num02 = 12;
var sum = $num01+$num02;
document.write("sum = "+ sum, "<br>");
var substract =$num01-$num02;
document.write("substract = "+ substract, "<br>");
var multiply = $num01*$num02;
document.write("multiply = "+ multiply, "<br>");
var divide = $num01/$num02;
document.write("divide = "+ divide, "<br>");
var reminder = $num01%$num02;
document.write("reminder = "+ reminder, "<br>");
// #2 실습 
var $num03 = 36;
var $num04 = 12;
var $result;
$result = $num03+=$num04;
document.write("$result(+=) = "+ $result, "<br>");
$result = $num03-=$num04;
document.write("$result(-=) = "+ $result, "<br>");
$result = $num03*=$num04;
document.write("$result(*=) = "+ $result, "<br>");
$result = $num03/=$num04;
document.write("$result(/=) = "+ $result, "<br>");
$result = $num03%=$num04;
document.write("$result(%=) = "+ $result, "<br>");
// #3 실습 
// var $width = prompt("브라우저의 가로 값(px)", "");
// var $height = prompt("브라우저의 세로 값(px)", "");
// var result = $width*$height;
// document.write("브라우저의 총 면적(px) : "+ result, "<br>");
// #4 실습

var $t ="<table border ='1'>";
$t+="<tr><td>1</td><td>2</td><td>3</td></tr>";
$t+="<tr><td>4</td><td>5</td><td>6</td></tr>";
$t+="</table>";
document.write($t);

// #5 실습
/* var $num_in = prompt("네 자리 이상의 수를 입력하세요", "");
if($num_in%7 == 0){
	document.write("입력한"+$num_in+"은(는) 7의 배수입니다.");
}else {
	document.write("입력한"+$num_in+"은(는) 7의 배수가 아닙니다.");
};*/
 /* // #6
  var $bx_num =1;
 for($bx_num=1; $bx_num<=10;  $bx_num++){
 	document.write("<div class='box'></div>");
 }; 
document.write("<div style='clear:both'></div>");
 // #7
 var $bx_limit = prompt("보여줄 박스의 개수를 입력하세요", "");
 for($m=0; $m<$bx_limit; $m++){
 	document.write("<div class='box2'></div>");
 }; */



 /* 브라우저 객체 모델 */
var $bom = "브라우저 객체 모델";
// $bom : 전체에 영향을 미칠 수 있는 전역 변수.
window.document.write($bom, "<br>"); // window 는 생략 가능 

function winOpen(){
	window.open("popup.html", "popup", "width=640,height=400,left=50,top=50");
}
// open("url 주소(절대경로/상대경로)", "창 이름","창을 구성하는 옵션(가로,세로,좌상단으로 부터 이격된 거리)") : 새로운 창을 띄우겠다는 메서드

function unmember(){
	var $c_01 = confirm("정말 회원을 탈퇴하시겠습니까?"); //'확인'이라는 버튼을 클릭하는 것 자체 만으로도 행동을 진행한다는 값이 있음을 저장	
	if($c_01){
		location.href="index.html"; //회원탈퇴가 확실할 때 보통의 경우 홈 화면으로 돌아가도록 구성 (UI 관점에서 접근하는 방식)

	}
}
/*screen 객체 */
var $sc_w = screen.width;
var $sc_h = screen.height;
var $sc_availW =screen.availWidth;
var $sc_availH =screen.availHeight;


document.write("현재 스크린의 가로 크기 : "+ $sc_w, "<br>");
document.write("현재 스크린의 세로 크기 : "+ $sc_h, "<br>");
document.write("현재 스크린의 가로 가용 크기 : "+ $sc_availW, "<br>");
document.write("현재 스크린의 세로 가용 크기 : "+ $sc_availH, "<br>");



var i = 0;
var $interval = setInterval(function(){
	$time = i++;
	document.write($time);
}, 1000); //1초마다 내부의 실행문을 반복하여 실행시키겠다는 의미

clearInterval($interval);

var $hash_txt = location.hash;
console.log($hash_txt);
var $ch_hash =$hash_txt.replace("#", "");
console.log($ch_hash);









