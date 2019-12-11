// 자바스크립트 기초
document.write("20191206 자바스크립트 시작", "<br>" )
document.write("안녕하세요!!", "<br>");

// 데이터의 종류 ("문자형 데이터", 숫자형 데이터,논리형데이터,null(빈공간)데이터)
// #1 문자형 데이터 : "문자형 데이터", 문자 타입의 형태로 표현시 사용
var message = "문자형 데이터";
document.write(message, "<br>");
var $tag = "<h2 class='txt_01'>Title</h2>";
document.write($tag, "<br>");

var studentName = "홍길동";

// #2 숫자형 데이터 : 정수 또는 실수를 포함하고 있는 데이터 (양의 수, 음의 수)
var num_01 = 6; //숫자형 데이터
var num_02 = Number("6"); // 문자형 데이터 
//Number("문자형 데이터"): 문자형 데이터를 연산이 가능한 숫자형 데이터로 변환
document.write(num_01, "<br>");
document.write(num_02, "<br>");
document.write(num_01+num_02, "<br>");

// #3 논리형 데이터: true or false 
var $real_01 = false;
var $big = 24<21;
var $isTxt = Boolean("hi"); //Boolean("") : false , Boolean("값이있음") : true

document.write($real_01, "<br>");
document.write($big, "<br>");
document.write($isTxt, "<br>");

// #4 null data , undefined 데이터 : 	
var $init; // 초기값을 선언하지 않은 상태
var $null = null; // 값이 null로 선언된 상태 
document.write($init, "<br>");
document.write($null, "<br>");


// consloe.log() : 검사창의 console 창에 값이 표현
var $num_03 = 3;
var $num_04 = 4;
console.log($num_03 + $num_04);

//데이터의 형태가 무엇인지를 확인!!
console.log(typeof message); //문자형 데이터 
console.log(typeof num_01); //숫자형 데이터 
console.log(typeof $real_01); //논리형 데이터
console.log(typeof $init); //논리형 데이터


/* 산술 연산자 */
var $num_01 = 27;
var $num_02 = 4;

var $sum = $num_01 + $num_02;
document.write($sum, "<br>");

var $subtract = $num_01 - $num_02;
document.write($subtract, "<br>");

var $multi = $num_01 * $num_02;
document.write($multi, "<br>");

var $divide = $num_01 / $num_02;
document.write($divide, "<br>");

var $share = $num_01 % $num_02;
document.write($share, "<br>");


/*문자 결합 연산자 : 예약금액 * 예약인원 */
var $txt_01 = "바나나우유"; //문자형 데이터
var $txt_02 = 500; //숫자형 데이터
var $txt_03 = "ml"; //문자형 데이터

var $txt_result = $txt_01 + $txt_02 + $txt_03;
document.write($txt_result, "<br>");
console.log(typeof $txt_result);

/* 대입 연산자 : 지속적으로 추가된 값(1보다 큰 정수 )을 적용하여 증가 또는 감소 */
var $no_01 = 13;
var $no_02 = 6;

$no_01+=$no_02; //$no_01= $no_01+$no_02
document.write($no_01, "<br>"); //$no_01=19

$no_01-=$no_02; //$no_01= $no_01-$no_02
document.write($no_01, "<br>");//$no_01=13

$no_01*=$no_02; //$no_01= $no_01*$no_02
document.write($no_01, "<br>");//$no_01=78

$no_01/=$no_02; //$no_01= $no_01/$no_02
document.write($no_01, "<br>");//$no_01=13

$no_01%=$no_02; //$no_01= $no_01%$no_02
document.write($no_01, "<br>");//$no_01=1


var $t = "<table border='1' style='border-collapse:collapse;'>";
$t+="<tr>";
$t+="<td>1</td>";
$t+="<td>2</td>";
$t+="<td>3</td>";
$t+="</tr>";
$t+="</table>";

document.write($t, "<br>");
console.log($t);

/*증감 연산자: 1씩 증가시키거나 1씩 감소시킬때 사용하는 연산자  */
/*
	받아오는 변수가 없는 경우 , 단항 ($no++, ++$no)으로 연산 
*/

var $no = 12;
$no++;
document.write($no, "<br>"); //13
++$no;
document.write($no, "<br>"); //14

$no--;
document.write($no, "<br>"); //13
--$no;
document.write($no, "<br>"); //12

// $no_ch = ++$no;
// document.write("선행처리 결과값: "+$no_ch + "증감연산된 값 : " + $no, "<br>");

$no_ch = $no++;
document.write("후행처리 결과값: "+$no_ch + "증감연산된 값 : " + $no, "<br>");



var $number_01 = 10;
var $number_02 = 20;

$number_01++; //본인만 증감 연산자를 적용할 때 본인의 값은 1씩 올라감 
document.write($number_01, "<br>");

$rst = ++$number_02;
document.write($rst+","+$number_02, "<br>"); // $rst=21, $number_02=21

$rst = $number_02++;
document.write($rst+","+$number_02, "<br>"); //$rst=21, $number_02=22



/*비교 연산자*/
var $num_01 = 24;
var $num_02 = 7;
var $num_03 = "12";

document.write($num_01 == 24, "<br>");
document.write($num_02 == "7", "<br>");
document.write($num_03 == 12, "<br>");

document.write($num_01 === 24, "<br>");
document.write($num_02 === "7", "<br>");
document.write($num_03 === 12, "<br>");


document.write($num_01 > $num_02, "<br>");
document.write($num_02 > $num_03, "<br>");


document.write("20191209논리연산자", "<br>" )
/* 논리 연산자 (|| 연산자는 => or 연산자 : 내부의 값이 하나라도 true 면 전체의 값은 true 다) */ 
var $a = 10;
var $b = 12;
var $c = 24;
var $d = 21;

var $result;

$result = $a>$b || $c>$d; //$a>$b (false) || $c>$d (true)  => true 
document.write($result, "<br>");
/* or 연산자는 전체가 true 라면 당연히 true가 된다 */

/* 논리 연산자 (&& 연산자는 => and 연산자 : 내부의 값이 하나라도 false 면 전체의 값은 false 다) */ 
$result = $a>$b && $c>$d; //$a>$b (false) || $c>$d (true)  => true 
document.write($result, "<br>"); 
/*and 연산자는 전체가 true가 되어야 ture로 반환*/

/* 논리 연산자 (! 연산자 => not 연산자 : 기존의 값이 true라면 반대로 false를 반환)*/
$result = !($a>$b);
document.write($result, "<br>");

/* 삼항조건 연산자  조건문? 실행문1 : 실행문2 => 조건식이 true면 실행문1번을 실행한다, 조건식이 false일 경우 
실행문 2번을 실행한다.*/
var $hour = 8;
var $result = $hour>=12 ? "오후 "+($hour-12)  + "시" : "오전 "+$hour + "시";
document.write($result, "<br>");


/*조건식 if(조건식){실행문},else{실행문}, else if(조건식){실행문}*/

// var $age = 17;
// // var $age = prompt("당신의 나이는?", "20"); //질의응답창 (브라우저에서 제공)
// if($age>0){
// 	if($age>=20){
// 		document.write("당신은 성년입니다.", "<br>");
// 	}else if($age>=13 && $age<20 ){
// 		document.write("당신은 청소년입니다.", "<br>");
// 	}else {
// 		document.write("당신은 아동입니다.", "<br>");
// 	}
// }else {
// 	alert("입력한 값이 올바르지 않습니다. 재입력 바랍니다.");
// 	location.reload(); //현재 url을 새로고침 후 로딩 
// }


// var $userName = prompt("당신의 이름을 입력하세요.", "홍길동"); //입력을 했을경우, true 반환
// if($userName){
// 	document.write($userName+"님의 방문을 환영합니다.", "<br>");
// }


/*중첩 if :1차 if 문의 조건에 부합할 때 2차 if 문의 조건식을 검사하여 해당하는 곳의 실행문을 출력 */

// var $in_num = parseInt(prompt("네자리 이상의 수를 입력하세요", "0000"));
// console.log($in_num);
// if($in_num>=1000){
// 	if ($in_num%3 == 0){
// 		document.write("입력한 값은 3의 배수입니다. " );
// 	}else{
// 		document.write("입력한 값은 3의 배수가 아닙니다. " );
// 	}
// }else{
// 	alert("입력한 숫자가 유효하지 않습니다. 재입력 해 주세요.");
// 	location.reload();
// }

// var $season = prompt("현재 월을 입력하세요", "");
// if($season>=0 && $season<=12){
// 	if($season>=3 && $season<=5){
// 		document.write("새싹이 솓아나는 따뜻한 봄입니다.");
// 	}else if($season>=6 && $season<=8){
// 		document.write("뜨거운 태양이 작렬하는 여름입니다.");
// 	}else if($season>=9 && $season<=11){
// 		document.write("하늘이 높다란 가을입니다.");
// 	}else{
// 		document.write("흰눈이 내리는 겨울입니다.");
// 	}
// }else {
// 	alert("입력한 숫자가 유효하지 않습니다. 재입력 해 주세요.");
// 	location.reload();
// }



/* */
// var $month = parseInt(prompt("현재 월을 입력하세요.", ""));
// if($month>=1 && $month<=12){
// 	document.write("<img src='img/m_"+$month+".png' alt='"+$month+"월'>");
// }


// if($month  == 1){
// 	document.write("<img src='img/m_1.png' alt='1월'>");
// }else if ($month == 2){
// 	document.write("<img src='img/m_2.png' alt='2월'>");
// }else if ($month == 3){
// 	document.write("<img src='img/m_3.png' alt='3월'>");
// }else if ($month == 4){
// 	document.write("<img src='img/m_4.png' alt='4월'>");
// }else if ($month == 5){
// 	document.write("<img src='img/m_5.png' alt='5월'>");
// }else if ($month == 6){
// 	document.write("<img src='img/m_6.png' alt='6월'>");
// }else if ($month == 7){
// 	document.write("<img src='img/m_7.png' alt='7월'>");
// }else if ($month == 8){
// 	document.write("<img src='img/m_8.png' alt='8월'>");
// }else if ($month == 9){
// 	document.write("<img src='img/m_9.png' alt='9월'>");
// }else if ($month == 10){
// 	document.write("<img src='img/m_10.png' alt='10월'>");
// }else if ($month == 11){
// 	document.write("<img src='img/m_11.png' alt='11월'>");
// }else if ($month == 12){
// 	document.write("<img src='img/m_12.png' alt='12월'>");
// }


/* if 문을 활용한 로그인 구성하기*/
// var $user_id = "ahnalee87";
// var $user_pw = "1234";
// var $in_id = prompt("아이디를 입력하세요", "");
// var $in_pw = prompt("비밀번호를 입력하세요", "");

// if($user_id == $in_id && $user_pw == $in_pw){
// 	document.write($in_id +"님의 방문을 환영합니다.", "<br>");
// }else{
// 	alert("입력한 정보가 일치하지 않습니다. 재입력 바랍니다.");
// 	location.reload();
// }

/*switch 문 : switch~case+break...........default */
// var $select = prompt("자주 사용하는 포털 사이트는 어디인가요? \n조건 : 네이버, 구글, 다음, 네이트", "");
// var $url; //undefined 데이터 
// switch($select){
// 	case "네이버" : $url = "https://www.naver.com";
// 	break;
// 	case "구글" : $url = "https://www.google.com";
// 	break;
// 	case "다음" : $url = "https://www.daum.net";
// 	break;
// 	case "네이트" : $url = "https://www.nate.com";
// 	break;
// 	default : alert("조건에 제시된 사이트명이 아닙니다.");
// }
// if($url){
// 	location.href=$url;
// }


// var $session = prompt("관심 있는 분야의 세션 번호를 선택하세요.\n 힌트 : 1 - 디자인, 2 - 개발파트, 3 - 마켓팅","1");
// // console.log(typeof $session); //문자형 데이터 (string)
// // //문자형 데이터를 숫자형 데이터로 변경 : Number (문자형 데이터)

// switch($session){
// 	case "1" : document.write("<img src='img/img_01.png'><p>세미나실 201호 입니다.</p>", "<br>");
// 	break;
// 	case "2" : document.write("<img src='img/img_02.png'><p>세미나실 202호 입니다.</p>", "<br>");
// 	break;
// 	case "3" : document.write("<img src='img/img_03.png'><p>세미나실 203호 입니다.</p>", "<br>");
// 	break;
// 	default : alert("입력한 숫자가 조건과 일치하지 않습니다. 다시 입력 바랍니다."); //예외처리 항목
// 	location.reload();
// }

/* 반복문 세가지 필수항목 (1)초기값, (2)조건문(또는 조건식), (3)증감식 + (실행문) */
document.write("<h3>while 문</h3>");
/* 이미지 3장을 반목문을 통해서 생성 */
var $n = 1;      // (1) 초기값
while($n<4){     //(2) 조건문(또는 조건식)
	document.write("<div class='box box"+$n+"'><img src='img/img_0"+$n+".png'></div>"); //(옵션)실행문
	$n++;        //(3) 증감식
}

var $i = 1; //초기값 
while($i<=50) {// 조건식
	document.write($i, "<br>"); //실행문을
	$i++; //증감식
}
//i가 51이 되는 순간 while 문에서 탈출


// 12개의 박스를 반복문을 통해서 구성 
var $box_num = 1;
while($box_num<=12){
	if($box_num%3 == 0){ //$box_num%3 == 0 의미는 3의 배수인 숫자 
		document.write("<div class='bx bx_"+$box_num+"' style='background:#ffaaff;'>"+$box_num+"</div>");
	}else{ //3의 배수가 아닌 숫자
		document.write("<div class='bx bx_"+$box_num+"' style='background:#ffffaa;'>"+$box_num+"</div>");
	}
	$box_num++;
}

document.write("<div class='clear'></div>")

// do-while 문 
document.write("<h3>do-while 문</h3>"); //먼저 실행을 하고나서 조건식을 검사하여 반복한다.
var $dw = 1; // 1번 : 초기값
do {
	document.write("<div class='dw_bx'>"+$dw+"</div>"); // 2번 : 실행문, 5번
	$dw++; //3번 증감식 ,6번 
}while($dw<=9) // 4번 조건식 , 7번

document.write("<div class='clear'></div>");

// for 문 : for(a =1; a <= 10; a++){document.write(a);} 증감식뒤에는 세미콜론을 찍지 않는다.
document.write("<h3>for 문</h3>"); //#1 초기값, #2 조건식, #3 실행문, #4 증감식
for(var $i=1; $i<=10; $i++){
	document.write("<div class='for_bx'>"+$i+"</div>");
}

document.write("<div class='clear'></div>");
//50개의 박스를 구성. 3의 배수,4의 배수, 3과4의 교집합이 되는 배수의 박스 영역 색상을 교체.
for(k=1; k<=50; k++){
	if(k%3==0 && k%4!=0){ //3의 배수 이면서 4의 배수가 아닌 박스 영역
		document.write("<div class='for_bx2' style='background:#ffffaa;'>"+k+"</div>");
	}else if(k%3!=0 && k%4==0){ //3의 배수가 아니면서 4의 배수인 박스 영역
		document.write("<div class='for_bx2' style='background:#aaffaa;'>"+k+"</div>");
	}else if(k%3==0 && k%4==0){// 3의 배수이면서 4의 배수인 박스 영역
		document.write("<div class='for_bx2' style='background:#ffaaff;'>"+k+"</div>");
	}else{
		document.write("<div class='for_bx2' style='background:#ccc;'>"+k+"</div>");
	}
} 
document.write("<div class='clear'></div>");
document.write("<h3>break 문</h3>");

for($m=1; $m<=10; $m++){
	document.write("<div class='for_break'>"+$m+"</div>");
	break; //반복문이 실행되지 않도록 막는 기능 
}

document.write("<div class='clear'></div>");
for($n=1; $n<=10000; $n++){
	if($n == 8){
		break;
	}
	document.write("<div class='for_break'>"+$n+"</div>");
}

document.write("<div class='clear'></div>");
document.write("<h3>continue 문</h3>");
for($p=1; $p<=12; $p++){
	if($p == 7){ // $p = 1,2,3,4,5,6 박스를 구성하고 7번 박스는 만들지 않는다. 그리고 그 다음에 적용될 8번 박스부터 다시구성(12번까지)
		continue; //다음에 오는 실행문은 실행하지 않고 건너 뛴 상태에서 다음 증감식으로 이동하여 다음 박스에서 다시 실행문을 반복한다.
	}
	document.write("<div class='for_continue'>"+$p+"</div>")
}

document.write("<div class='clear'></div>");
document.write("<h3>중첩 for 문</h3>");
for($g=1; $g<=5; $g++){ //행
	for($h=1; $h<=6; $h++){ //열
		document.write($g+"행 "+$h+"열 ", "<br>")
	}
}

for($a=2; $a<=9; $a++){
	document.write("<h4>"+$a+"단</h4>");
	for($b=1; $b<=9; $b++){
		document.write($a+"×"+$b+"="+$a*$b, "<br>");
	}
}

// // 실습 응용 1번 
// var $in = prompt("출력할 구구단 하나를 입력하세요","");
// document.write("<h1>"+$in+"단</h1>");
// for($c=1; $c<=9; $c++){
// 	document.write($in+"×"+$c+"="+$in*$c, "<br>")
// }


// // 실습 응용 2번
// var $in2= prompt("시작할 구구단의 수를 입력하세요",""); 
// for($e=$in2; $e<=9; $e++){
// 	document.write("<h1>"+$e+"단</h1>");
// 	for($f=1; $f<=9; $f++){
// 		document.write($e+"×"+$f+"="+$e*$f, "<br>")
// 	}
// }


document.write("<h3>형 변환(숫자형을 문자형으로 변환)-01</h3>");
var numString = 24;
console.log(typeof numString); //number(숫자형 데이터)
var resultString = String(numString);
console.log(typeof resultString);// string (문자형 데이터)


document.write("<h3>형 변환(문자형을 숫자형으로 변환)-02</h3>");
var strNum = "24";
console.log(typeof strNum); //string (문자형 데이터)
var resultNum = Number(strNum);
console.log(typeof resultNum);

var strNo = "3.1458765567";
var rstNo1 = parseInt(strNo); //정수형태의 숫자형 데이터로 변환
console.log(rstNo1);
console.log(typeof rstNo1);

var rstNo2 = parseFloat(strNo); //실수형태의 숫자형 데이터로 변환
console.log(rstNo2); 
console.log(typeof rstNo2);

//계산기 실습 
// var number1 = prompt("첫번째 숫자를 입력하세요", "");
// var number2 = prompt("두번째 숫자를 입력하세요", "");
// var number1 = Number(number1);
// var number2 = Number(number2);
// var sum = Number(number1+number2);
// var subtract= Number(number1-number2);
// console.log(sum);
// console.log(typeof sum);
// console.log(subtract);
// console.log(typeof subtract);

//계산기
var number1 = Number(prompt("첫번째 숫자를 입력하세요", ""));
var number2 = Number(prompt("두번째 숫자를 입력하세요", ""));
console.log(typeof number1);
console.log(typeof number2);
var sum = Number(number1+number2);
var subtract= Number(number1-number2);
console.log(sum);
console.log(subtract);
alert("입력받은 수: "+number1+", "+number2+"\n\n sum(덧셈) : "+sum+"\n subtract(뺄셈) : "+subtract);

































