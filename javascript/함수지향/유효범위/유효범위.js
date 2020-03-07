var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert('함수안 '+vscope);
}
fscope();
alert('함수밖 '+vscope);
//같은 이름의 지역변수와 전역변수가 동시에 정의되어 있다면 지역변수가 우선한다
//결과값 : 함수안 local 
//		  함수밖 global

//=====전역변수의 사용========
/*
function a (){
    i = 0;
}
for(i = 0; i < 5; i++){
    a();
    document.write(i);
} //본 예제는 무한반복을 발생시킨다. 

*/


//불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.
var MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
} //calculator 속성
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}//cordinate 속성
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());

/*
//전역변수를 사용하고 싶지 않다면 아래와 같이 익명함수를 호출함으로서 이러한 목적을 달성할 수 있다.

//익명함수 예시

(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())


*/

/*=================정적 유효 범위======================
자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 
이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다. 
*/
var i = 5;
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    document.write(i); 
    //b내부에 i가 있는가 -> 전역 변수 i가 있는가 -> a의 지역변수 안에 i가 있는가? 순으로 탐색
    //그러므로 함수 b가 "선언된 시점에서의" i 는 5가 된다. 
}
 
a(); // 실행결과 : 5