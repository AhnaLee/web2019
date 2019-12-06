// 자바스크립트 기초

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



var i = 1;
var j = i++ +1;
var k = ++i +1;