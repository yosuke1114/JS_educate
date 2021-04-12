// 変数宣言
let hensuu1 = 1;
var hensuu2 = "qq";
const hensuu3 = "const";
console.log(`変数宣言：${hensuu1},${hensuu2},${hensuu3}`);

//データ型
console.log(typeof ture);
console.log(typeof 123);
console.log(typeof "string");
console.log(typeof Symbol("しんぼる"));
console.log(typeof undefined);
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { "key": "value" }); // => "object"
console.log(typeof function() {}); // => "function"
//オブジェクトリテラル
const obj = {
    key:"ob1",
    key1:"obj2",
}
//ドット記法
console.log(obj.key);
//ブラケット記法
console.log(obj["key1"]);
//変数を使用してブラケット記法
let v1 = "key";
console.log(obj[v1]);

//if文

if (true){
    console.log("ここはtrue")
}
else{
    console.log("ここはfalse")
}
//三項演算子
console.log(true?"ok":"no");

//while
let num=3
while(num<3){

    console.log(`while回数：${num}`)
    num += 1;
}
//do-while

 num =3;
do {
    console.log(`do-while回数：${num}`)
    num += 1;
}while(num <3);

//for
for(let i = 0; i<10; i++){
    console.log(`for回数:${i}`);
} 


//配列
//someを使用した
let array = [1,11,21];
function isEven(num) {
    return num % 2 === 0;
}
console.log(array.some(isEven));
//配列操作
let array2 = []; 
let inputarray = [10,13,15,16];
for (const input of inputarray){
    if(input % 2 == 0){

        array2.push(input);
    }
}
console.log(`${array2}`);


//
function reducer(total, value){
    return total += value;
}
const array1 =[1,10,100];

let reduce_test = (array1.reduce(reducer,0));
console.log(reduce_test);
