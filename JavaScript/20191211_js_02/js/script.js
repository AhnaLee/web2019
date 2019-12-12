//javascript 객체 문법

/*객체 구성*/
var cell_phone = new Object();  //cell_phone 이라는 변수 명에 새로운 객체(Object)를 생성하겠다는 의미

cell_phone.width = "8cm";
cell_phone.height = "14cm";
cell_phone.weight = "200g";
cell_phone.color = "classic blue";

document.write(cell_phone.width, "<br>");
document.write(cell_phone.height, "<br>");
document.write(cell_phone.weight, "<br>");
document.write(cell_phone.color, "<br>");

/*날짜 객체*/
var $t = new Date(); //연, 월, 일, 요일, 시간, (시,분,초)등 의 날짜 정보를 받아오겠다는 의미.
var nowYear = $t.getFullYear();  //연도 정보
var nowMonth = $t.getMonth()+1; //월 정보 1월은 시스템 데이터 값에서 "0"으로 가져옴 
var nowDate = $t.getDate(); //일 정보 (서수개념-첫째날,둘째날,....)1일에 대한 데이터 값은 "1".
var nowDay = $t.getDay(); //요일 정보 (일요일: 0~ 토요일: 6);
var nowHours = $t.getHours(); //현재 시 정보
var nowMinutes = $t.getMinutes(); //현재 분 정보
var nowSeconds = $t.getSeconds(); //현재 초 정보


document.write("현재연도 :"+nowYear, "<br>");
document.write("현재월 :"+nowMonth, "<br>");
document.write("현재일 :"+nowDate, "<br>");
if(nowDay == 0){
	document.write("현재요일 : 일요일", "<br>");
}else if(nowDay == 1){
	document.write("현재요일 : 월요일", "<br>");
}else if(nowDay == 2){
	document.write("현재요일 : 화요일", "<br>");
}else if(nowDay == 3){
	document.write("현재요일 : 수요일", "<br>");
}else if(nowDay == 4){
	document.write("현재요일 : 목요일", "<br>");
}else if(nowDay == 5){
	document.write("현재요일 : 금요일", "<br>");
}else{
	document.write("현재요일 : 토요일", "<br>");
}
document.write("현재시 :"+nowHours, "<br>");
document.write("현재분 :"+nowMinutes, "<br>");
document.write("현재초 :"+nowSeconds, "<br>");



var myBirth = new Date("1987-09-04");
var theYear = myBirth.getFullYear();
var theMonth = myBirth.getMonth()+1;
var theDate = myBirth.getDate();
var theDay = myBirth.getDay();

if(theDay==0){
	ch_day = "일요일";
}else if(theDay==1){
	ch_day = "월요일";
}else if(theDay==2){
	ch_day = "화요일";
}else if(theDay==3){
	ch_day = "수요일";
}else if(theDay==4){
	ch_day = "목요일";
}else if(theDay==5){
	ch_day = "금요일";
}else{
	ch_day = "토요일";
}
document.write(theYear+"년 "+theMonth+"월 "+theDate+"일은 "+ch_day+"입니다.", "<br>");

/*요일별 이미지 적용하기*/
var $n_date = new Date();
var $nDay = $n_date.getDay();

if($nDay==0){
	document.write("<img src='img/img_day/sunday.gif'>");
}else if($nDay==1){
	document.write("<img src='img/img_day/monday.gif'>");
}else if($nDay==2){
	document.write("<img src='img/img_day/tuesday.gif'>");
}else if($nDay==3){
	document.write("<img src='img/img_day/wednesday.gif'>");
}else if($nDay==4){
	document.write("<img src='img/img_day/thursday.gif'>");
}else if($nDay==5){
	document.write("<img src='img/img_day/friday.gif'>");
}else{
	document.write("<img src='img/img_day/saturday.gif'>");
}


/* 계절별 이미지 변경 */

var $nMonth = $n_date.getMonth()+1;
if($nMonth>=3 && $nMonth<=5){
	document.write("<img src= 'img/img_season/img-m.jpg'>","<br>");
}else if($nMonth>=6 && $nMonth<=8){
	document.write("<img src= 'img/img_season/img-s.jpg'>","<br>");
}else if($nMonth>=9 && $nMonth<=11){
	document.write("<img src= 'img/img_season/img-f.jpg'>","<br>");
}else{
	document.write("<img src= 'img/img_season/img-w.jpg'>","<br>");
}

/* 숫자(number)객체 */
document.write("<h3>숫자(number)객체</h3>");
var maxNum = Math.max(12, 24, 5, 3, 30); //숫자 중에서 가장 큰값 을 출력
var minNum = Math.min(12, 24, 5, 3, 30);//숫자 중에서 가장 작은값 을 출력
document.write("최대값 반환하기 :"+maxNum, "<br>");
document.write("최소값 반환하기 :"+minNum, "<br>");

var num = 2.52345;
var roundNum = Math.round(num); //저장된 숫자의 반올림한 값을 정수 형태로 (소수점 첫번쨰 자리에서 반올림 적용)출력 
document.write("반올림 적용하기 :"+roundNum, "<br>");

var floorNum = Math.floor(num); //저장된 숫자의 내림한 값을 정수 형태로 (소수점 첫번쨰 자리에서 내림 적용)출력 
document.write("내림 적용하기 :"+floorNum, "<br>");

var ceilNum = Math.ceil(num); //저장된 숫자의 올림한 값을 정수 형태로 (소수점 첫번쨰 자리에서 올림 적용)출력 
document.write("올림 적용하기 :"+ceilNum, "<br>");

var randomNum = Math.random();// 0부터 1사이의 숫자(실수)를 반환 (소수점 아래 자리까지)
document.write("무작위 숫자 가져오기 : "+randomNum, "<br>");


var piNum = Math.PI;
document.write("원주율 가져오기 : "+piNum, "<br>");

/* 0부터 10사이의 숫자를 난수로 반환 */
var randomNum = Math.random()*10;
document.write(" 0~10 무작위 숫자 가져오기 : "+randomNum, "<br>");


/* 0부터 10사이의 숫자를 정수로 반환 */
var randomNum = Math.floor(Math.random()*10);
document.write(" 0~10 무작위 정수 가져오기 : "+randomNum, "<br>");

/*폰트 사이즈를 10~110px 이하까지 랜덤으로 적용*/
document.getElementById("txt").style.fontSize = Math.floor((Math.random()*100)+10)+"px";

// document: 문서라는 객체에서 
//.getElementById ("txt"): ID명이 "txt"라고 설정되어있는 요소로 접근 
//.style : 접근한 요소에 스타일을 적용 
//.fontSize: 폰트의 크기를 인라인 스타일 시트로 직접 적용하겠다는 의미
//<p id="txt" style="font-size: 00px">문장 </p> <와 동일

/* 랜덤을 통해서 출력되는 정수값을 1부터 9까지 반환 */
var random_img = Math.floor((Math.random()*9)+1);
document.write("<img src='img/view"+random_img+".jpg'>");
// 만약 Math.random()으로 부터 받아온 값이 0.0000000000001 이라면 0.0000000000001*9 = 0.0000000000009 ==>
// 위의 값으로 부터 1을 더한다면 1.0000000000009 => 내림(Math.floor)을 적용하기 떄문에 최종값은 1.

//만약 Math.random()으로부터 받아온 값이 0.99 라면 0.99*9 => 8.91
//위의 값으로 부터 1을 더한다면 9.91 => 내림 (Math.floor)을 적용하기 때문에 최종값은 9.



document.write("<h3> 2019-12-12 </h3>");
// 문자형 객체 
var txt = "Hello Thank You good luck to you";
/*
12345678901234567890123456789012
Hello Thank You good luck to you
01234567890123456789012345678901
*/
document.write(txt.charAt(7), "<br>"); //charAt(숫자) 왼쪽으로부터 인덱스 번호(숫자)를 측정하여
// 해당하는 문자를 반환한다 

document.write(txt.indexOf("you"), "<br>"); //indexOf("문자") :좌측으로부터 최초로 시작하는 인덱스 번호를 반환(대소문자 구별)
document.write(txt.indexOf("o", 10), "<br>"); //indexOf("문지", 숫자) :인덱스 번호 (숫자)이후부터 동일한 문자를 찾아서 인덱스 번호를 반환
document.write(txt.lastIndexOf("ou"), "<br>"); //lastIndexOf("문자") : 우측으로 부터 문자를 찾아서 최초로 일치하는 시작 문자의 인덱스 번호를 반환
document.write(txt.match("good"), "<br>"); // match("문자") : "문자"를 찾아서 왼쪽으로부터 최초로 일치하는 문자를 반환. 이 떄 찾는 문자가 없다면 null값으로 반환
document.write(txt.search("luck"), "<br>"); //search("문자") :"문자"를 좌측으로 부터 최초로 일치하는 인덱스 번호를 반환
document.write(txt.substr(12, 3), "<br>"); //substr(12, 3) : 인덱스 번호 12번부터 3개의 문자를 반환(인덱스 번호에 해당하는 문자를 포함)

/*
12345678901234567890123456789012
Hello Thank You good luck to you
01234567890123456789012345678901
*/
document.write(txt.substring(16, 20), "<br>"); //substring(16, 20) :인덱스 번호 16번부터 20번 이전의 구간까지의 문자를 반환 
document.write(txt.replace("You","Me"), "<br>"); //replace("바꿀 문자","새 문자") : 문자열 중에서 바꿀 문자를 새 문자로 교체
document.write(txt.replace("You",""), "<br>"); //replace("바꿀 문자","") : 문자열 중에서 바꿀 문자를 제거
document.write(txt.toLowerCase(), "<br>"); //toLowerCase() : 대문자를 소문자로 변경
document.write(txt.toUpperCase(), "<br>"); //toUpperCase() : 소문자를 대문자로 변경 
document.write(txt.length, "<br>"); //☆★☆★☆★문자 데이터의 갯수를 반환 (띄어쓰기 포함) 렝쓰는 1번부터 카운트 함 ☆★☆★☆★

var $strArr = txt.split(" "); //☆★☆spilt(" ") : 공백의 문자를 기준으로 각 단어를 끊어서 배열로 저장한다는 의미☆★☆
// $strArr = ["Hello", "Thank", "You", "good", "luck", "to", "you"];
document.write($strArr[1], "<br>");

/* 문자형 객체 실습 응용 */
/*
12345678901
01012345678
01234567890
*/

var $phoneNum ="01012345678";
var $resultNum = $phoneNum.substring (0,7) + "****";
document.write($resultNum, "<br>");
/*
010-1234-5678 , 010 1234 5678 ,01012345678 : 공백,기호 포함 또는 공백이 없는 경우 
*/
var $result = $phoneNum.substring(0, $phoneNum.length-4)+ "****";
document.write($result, "<br>");

/* 배열 객체 : DB 내의 데이터처럼 운용이 가능한것이 장점*/
var $member = ["유재석","김종국", "하하","이광수","송지효","지석진","전소민","양세찬"];
document.write("벌칙 대상자1:" + $member[3], "<br>");
document.write("벌칙 대상자2:" + $member[5], "<br>");

var $arr_day = ["일", "월", "화", "수", "목", "금", "토"];
var $today = new Date();
var $yoil = $arr_day[$today.getDay()];
document.write("오늘은 " +$yoil+"요일 입니다.", "<br>");


var $img_day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var nowDay = $img_day[$today.getDay()]; //$img_day[4] => "thursday"
document.write("<img src='img/img_day/"+nowDay+".gif'>", "<br>");


var $member = ["유재석","김종국", "하하","이광수","송지효","지석진","전소민","양세찬"];
$member.pop(); //pop(): 배열 데이터 중에서 마지막 인덱스의 데이터를 삭제 ("양세찬")["유재석","김종국", "하하","이광수","송지효","지석진","전소민"]
document.write($member[7], "<br>"); //데이터가 존재하지 않기 때문에 undefind 
document.write($member.length, "<br>"); //7명 

$member.push("강하늘"); //push("강하늘") 마지막 인덱스에 데이터를 추가 ["유재석","김종국", "하하","이광수","송지효","지석진","전소민","강하늘"]
document.write($member[7], "<br>"); //강하늘 
document.write($member.length, "<br>"); //8명 

$member.shift(); // 첫번째 인덱스 데이터를 삭제 ("유재석") ["김종국", "하하","이광수","송지효","지석진","전소민","강하늘"]
document.write($member[0],"<br>"); //김종국 
document.write($member.length, "<br>"); //7명

$member.unshift("공유"); //첫번째 인덱스에 새로운 데이터를 추가  ["공유","김종국", "하하","이광수","송지효","지석진","전소민","강하늘"]
document.write($member[0],"<br>"); //공유 
document.write($member.length, "<br>"); //8명


/* 2차 배열을 활용한 콘텐츠 구성하기 */
var $arr_bx = [
	["shop_01.jpg", "마마스앤파파스", "NEW 스너그 트레이완구 포함", "월 17,400원"],
	["shop_02.jpg", "알집매트", "알집 꾸러기 소파", "월 7,500원"],
	["shop_03.jpg", "알집매트", "알집 네오 소파", "월 8,300원"],
	["shop_04.jpg", "알집매트", "알집 핑크퐁 소파", "월 9,900원"]
];
document.write("<div class='outer'>");
for(i=0; i<$arr_bx.length; i++){
	document.write("<div class='box'><img src='img/arr_02/"+$arr_bx[i][0]+"' alt='"+(i+1)+"''><h2>"+$arr_bx[i][1]+"</h2><p class='context'>"+$arr_bx[i][2]+"</p><p class='price'>"+$arr_bx[i][3]+"</p></div>");
} 
document.write("</div>");
/* $arr_bx[0][0]의 의미
1 : $arr_bx[0] :1차 배열의 0번 인덱스로 접근 
2 : $arr_bx[0][0] : 1차 배열의 0번 인덱스로 접근하여 2차배열의 0번 인덱스의 값을 가져온다.
3 : $arr_bx[0][1] : 1차 배열의 0번 인덱스로 접근하여 2차배열의 1번 인덱스의 값을 가져온다.
4 : $arr_bx[0][2] : 1차 배열의 0번 인덱스로 접근하여 2차배열의 2번 인덱스의 값을 가져온다.
5 : $arr_bx[0][3] : 1차 배열의 0번 인덱스로 접근하여 2차배열의 3번 인덱스의 값을 가져온다.
*/















