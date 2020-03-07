
/*클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다*/
/*
function outter(){
    function inner(){
        var title = 'coding everybody'; 
        alert(title);
    }
    inner(); 
}
outter();
*/

function outter(){
    var title = 'coding everybody';  
    function inner(){        
        alert(title); //내부 함수에서 외부 함수의 지역 변수(var little)에 접근 가능
    }
    inner();
}
outter();
//======================

function outter(){
    var title = 'coding everybody';  
    return function(){        
        alert(title);
    }
}
inner = outter();
inner();
/*내부함수는 외부함수의 지역변수에 접근 할 수 있는데 
외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 
내부함수가 외부함수의 변수에 접근 할 수 있다. 
이러한 메커니즘을 클로저라고 한다.*/

//------------------------------------------------

function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());

//======================================================

var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
//결과값 : 5 5 5 5 5

var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
//결과값 : 0 1 2 3 4
