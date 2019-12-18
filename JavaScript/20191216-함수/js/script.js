/* javascript - 함수 */
function proceedAlt(){
	alert("함수의 실행문 영역");
};
// proceedAlt(); 함수를 호출하는 열쇠와 가은 역할을 담당.


var $bg_color = ["#aaffff", "#ffaaff", "#ffffaa", "#aaffaa"];
var $i=0;
function ch_bg(){
	document.getElementsByTagName("body")[0].style.background=$bg_color[$i];
	$i++;
	if($i>4){
		$i=0;
	}
}



















