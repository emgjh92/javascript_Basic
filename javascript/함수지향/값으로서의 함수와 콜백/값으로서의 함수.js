//javascript 는 함수 자체가 값이 될 수 있다!!!

function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));
//======결과값 : 2 0 =======


function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1)); 
//함수는 함수의 리턴 값으로도 사용할 수 있다. 결과값 : 3 1

var process = [
    function(input){ return input + 10;}, //input : 10+1 = 11
    function(input){ return input * input;}, //input : 11*11 = 121
    function(input){ return input / 2;} //input = 121 / 2 = 60.5
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
alert(input);
//함수는 배열의 값으로도 사용할 수 있다. 결과값 : 60.5

//==================Call Back - 처리의 위임================================
function sortNumber(a,b){
    // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
    return b-a;
    //a>b는 1 반환, a<b는 -1 반환, a=b는 0 반환 
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
alert(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]


