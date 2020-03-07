var pattern = /a/ 
//정규표현식 리터럴

var pattern2 = new RegExp('a');
//정규표현식 객체 생성자

console.log(pattern.exec('abcdef')); // ["a"]
console.log(pattern.exec('bcdefg')); // null

console.log(pattern.test('abcdef')); // true
console.log(pattern.test('bcdefg')); // false

console.log('abcdef'.match(pattern)); // ["a"]
console.log('bcdefg'.match(pattern)); // null


console.log('abcdef'.replace(pattern, 'A'));  // Abcdef
//문자열에서 패턴을 검색해서 이를 변경한 후에 변경된 값을 리턴한다.


var xi = /a/;
console.log("Abcde".match(xi)); // null
var oi = /a/i;
console.log("Abcde".match(oi)); // ["A"];
//i를 붙이면 대소문자를 구분하지 않느다.



var xg = /a/;
console.log("abcdea".match(xg));
var og = /a/g;
console.log("abcdea".match(og)); //(2) ["a", "a"]
//g를 붙이면 검색된 모든 결과를 리턴한다.

var pattern = /(\w+)\s(\w+)/; //정규표현식
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
//$2는 두 번째 나온 (\w+)를, $1은 첫 번째 나온 (\w+) 를 의미한다. 

console.log(result); //coding과 everybody의 순서를 역전
//결과값 : everybody, coding 



var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);

/*결과값 : 
생활코딩 : <a href="http://opentutorials.org/course/1">http://opentutorials.org/course/1</a> 입니다. 
네이버 : <a href="http://naver.com">http://naver.com</a> 입니다.
*/